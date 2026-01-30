import { db } from './firebase.js';
import {
    doc,
    updateDoc,
    getDoc,
    increment,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { QUESTIONS_DB } from './data.js';

export const calculateAndSaveResults = async (roomId, userId) => {
    // 1. Fetch Room Data
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) return null;
    const roomData = roomSnap.data();

    // 2. Identify Player's Answers
    const allAnswers = roomData.answers || {};
    const playerAnswers = allAnswers[userId];

    if (!playerAnswers) return null;

    // 3. Calculate Stats - NEW 5 PILLARS
    let sessionStats = {
        logical: 0,
        strategic: 0,
        social: 0,
        political: 0,
        adaptive: 0
    };

    roomData.questionQueue.forEach(qId => {
        // qId is likely number in DB but key is string in Map.
        // Try both or ensure string.
        let ansIdx = playerAnswers[qId];
        if (ansIdx === undefined) ansIdx = playerAnswers[String(qId)];

        if (ansIdx !== undefined) {
            const question = QUESTIONS_DB.find(q => q.id === qId);
            if (question) {
                const weights = question.weights[ansIdx] || {};
                Object.keys(weights).forEach(stat => {
                    // Accumulate raw weights into the 5 buckets
                    if (sessionStats[stat] !== undefined) {
                        sessionStats[stat] += weights[stat];
                    }
                });
            }
        }
    });

    // 4. Determine Dominant Type
    let maxVal = -999;
    let dominantType = "Balanced";

    Object.entries(sessionStats).forEach(([type, val]) => {
        if (val > maxVal) {
            maxVal = val;
            dominantType = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize
        } else if (val === maxVal) {
            dominantType = "Multi-Faceted"; // Tie
        }
    });

    // Add "Thinker" or similar suffix if not tie
    if (dominantType !== "Multi-Faceted" && dominantType !== "Balanced") {
        dominantType += " Thinker";
    }

    // 5. Update User Profile
    const userRef = doc(db, "users", userId);

    // Badges based on dominant performance
    const newBadges = [];
    // Only award badges for significant scores (> 5 in a session is high)
    if (sessionStats.logical > 5) newBadges.push("Master Logician");
    if (sessionStats.strategic > 5) newBadges.push("Grand Strategist");
    if (sessionStats.social > 5) newBadges.push("Social Architect");
    if (sessionStats.political > 5) newBadges.push("Power Player");
    if (sessionStats.adaptive > 5) newBadges.push("Chaos Surfer");

    const updatePayload = {
        matchesPlayed: increment(1),
        "intelligence.logical": increment(sessionStats.logical),
        "intelligence.strategic": increment(sessionStats.strategic),
        "intelligence.social": increment(sessionStats.social),
        "intelligence.political": increment(sessionStats.political),
        "intelligence.adaptive": increment(sessionStats.adaptive),
        "dominantType": dominantType // Update latest dominant type
    };

    if (newBadges.length > 0) {
        updatePayload.badges = arrayUnion(...newBadges);
    }

    await updateDoc(userRef, updatePayload);

    return {
        stats: sessionStats,
        dominantType: dominantType,
        badges: newBadges
    };
};

export const getRoomLeaderboard = async (roomId) => {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) return [];
    const roomData = roomSnap.data();

    const leaderboard = [];
    const players = roomData.players || [];
    const allAnswers = roomData.answers || {};

    players.forEach(p => {
        const pAnswers = allAnswers[p.uid];
        let totalScore = 0;
        let pStats = { logical: 0, strategic: 0, social: 0, political: 0, adaptive: 0 };

        if (pAnswers) {
            roomData.questionQueue.forEach(qId => {
                let aIdx = pAnswers[qId];
                if (aIdx === undefined) aIdx = pAnswers[String(qId)];

                if (aIdx !== undefined) {
                    const q = QUESTIONS_DB.find(qu => qu.id === qId);
                    if (q) {
                        const w = q.weights[aIdx] || {};
                        Object.entries(w).forEach(([k, v]) => {
                            totalScore += v;
                            if (pStats[k] !== undefined) pStats[k] += v;
                        });
                    }
                }
            });
        }

        // Quick Dominant Type Calc for Display
        let dom = "Balanced";
        let max = -999;
        Object.entries(pStats).forEach(([k, v]) => {
            if (v > max) { max = v; dom = k; }
        });

        // Capitalize
        dom = dom.charAt(0).toUpperCase() + dom.slice(1);

        leaderboard.push({
            uid: p.uid,
            username: p.username,
            score: totalScore,
            dominantType: dom
        });
    });

    return leaderboard.sort((a, b) => b.score - a.score);
};
