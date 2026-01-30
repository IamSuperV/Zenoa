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
    // answers structure: { uid: { qId: optionIndex } }
    const allAnswers = roomData.answers || {};
    const playerAnswers = allAnswers[userId];

    if (!playerAnswers) return null; // No answers?

    // 3. Calculate Stats
    let sessionStats = {
        social: 0,
        logic: 0,
        risk: 0,
        consistency: 0, // Simplified for now as just another stat
        adaptability: 0,
        decision: 0,
        leadership: 0
    };

    roomData.questionQueue.forEach(qId => {
        const ansIdx = playerAnswers[qId];
        if (ansIdx !== undefined) {
            const question = QUESTIONS_DB.find(q => q.id === qId);
            const weights = question.weights[ansIdx] || {};
            // Accumulate
            Object.keys(weights).forEach(stat => {
                // Map disparate stats to core 4 if needed, or just track all
                // Profile shows: Consistency, Speed, Adaptability, Social
                // We will map 'logic' -> Adaptability, 'risk' -> Consistency (inverse?) or just keep raw.
                // For simplicity of v0.1 Profile mapping:
                // logic -> adaptability
                // strategy -> adaptability
                // decision -> consistency
                // risk -> speed (proxy for bold decision)
                // social -> social

                let mappedStat = stat;
                if (stat === 'logic' || stat === 'strategy') mappedStat = 'adaptability';
                if (stat === 'decision' || stat === 'integrity') mappedStat = 'consistency';
                if (stat === 'risk' || stat === 'survival') mappedStat = 'speed'; // Loose mapping

                if (sessionStats[mappedStat] !== undefined) {
                    sessionStats[mappedStat] += weights[stat];
                } else if (sessionStats[stat] !== undefined) {
                    sessionStats[stat] += weights[stat];
                }
            });
        }
    });

    // 4. Update User Profile
    const userRef = doc(db, "users", userId);

    // Check for Badges
    const newBadges = [];
    if (sessionStats.social > 5) newBadges.push("Socialite");
    if (sessionStats.adaptability > 5) newBadges.push("Strategist");
    if (sessionStats.speed > 5) newBadges.push("Risk Taker");
    if (sessionStats.consistency > 5) newBadges.push("Iron Will");

    // Perform Update
    // We only want to update ONCE per game. 
    // Ideally we check if we already processed this room ID in user's history, but for v0.1 we rely on UI not calling this twice or idempotency logic if possible.
    // We'll just update blindly for now.

    const updatePayload = {
        matchesPlayed: increment(1),
        "stats.social": increment(sessionStats.social),
        "stats.adaptability": increment(sessionStats.adaptability),
        "stats.speed": increment(sessionStats.speed), // Using 'speed' bucket for risk/boldness
        "stats.consistency": increment(sessionStats.consistency)
    };

    if (newBadges.length > 0) {
        updatePayload.badges = arrayUnion(...newBadges);
    }

    await updateDoc(userRef, updatePayload);

    return {
        stats: sessionStats,
        badges: newBadges
    };
};

export const getRoomLeaderboard = async (roomId) => {
    // Fetch room again to get everyone's latest state?
    // Actually, we need to calculate scores for EVERYONE to rank them.
    // In a real app, backend triggers this.
    // Here, we can just compute scores from the 'answers' map locally for display.

    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) return [];
    const roomData = roomSnap.data();

    const leaderboard = [];
    const players = roomData.players || [];
    const allAnswers = roomData.answers || {};

    players.forEach(p => {
        const pAnswers = allAnswers[p.uid];
        let score = 0; // "Score" for ranking - maybe sum of all positive attributes?

        if (pAnswers) {
            roomData.questionQueue.forEach(qId => {
                const aIdx = pAnswers[qId];
                if (aIdx !== undefined) {
                    const q = QUESTIONS_DB.find(qu => qu.id === qId);
                    const w = q.weights[aIdx] || {};
                    Object.values(w).forEach(val => score += val);
                }
            });
        }

        leaderboard.push({
            uid: p.uid,
            username: p.username,
            score: score,
            badges: [] // Need to fetch user profile for real badges, or just show session performance
        });
    });

    return leaderboard.sort((a, b) => b.score - a.score);
};
