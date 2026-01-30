import { db } from './firebase.js';
import {
    doc,
    updateDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    orderBy,
    limit,
    increment,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { QUESTIONS_DB } from './data.js';

// Calculate and Save Results (Existing Function - Keep functionality same)
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
        let ansIdx = playerAnswers[qId];
        if (ansIdx === undefined) ansIdx = playerAnswers[String(qId)];

        if (ansIdx !== undefined) {
            const question = QUESTIONS_DB.find(q => q.id === qId);
            if (question) {
                const weights = question.weights[ansIdx] || {};
                Object.keys(weights).forEach(stat => {
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
            dominantType = type.charAt(0).toUpperCase() + type.slice(1);
        } else if (val === maxVal) {
            dominantType = "Multi-Faceted";
        }
    });

    if (dominantType !== "Multi-Faceted" && dominantType !== "Balanced") {
        dominantType += " Thinker";
    }

    // 5. Update User Profile
    const userRef = doc(db, "users", userId);

    const newBadges = [];
    if (sessionStats.logical > 5) newBadges.push("Master Logician");
    if (sessionStats.strategic > 5) newBadges.push("Grand Strategist");
    if (sessionStats.social > 5) newBadges.push("Social Architect");
    if (sessionStats.political > 5) newBadges.push("Power Player");
    if (sessionStats.adaptive > 5) newBadges.push("Chaos Surfer");

    // NEW: Calculate Total Score Gain for Leaderboard
    const totalGain = (sessionStats.logical + sessionStats.strategic + sessionStats.social + sessionStats.political + sessionStats.adaptive);

    const updatePayload = {
        matchesPlayed: increment(1),
        "intelligence.logical": increment(sessionStats.logical),
        "intelligence.strategic": increment(sessionStats.strategic),
        "intelligence.social": increment(sessionStats.social),
        "intelligence.political": increment(sessionStats.political),
        "intelligence.adaptive": increment(sessionStats.adaptive),
        "totalScore": increment(totalGain), // Add to total Score
        "dominantType": dominantType
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

// Helper: Calculate Leaderboard from Data (Sync)
export const calculateRoomLeaderboard = (roomData) => {
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

        let dom = "Balanced";
        let max = -999;
        Object.entries(pStats).forEach(([k, v]) => {
            if (v > max) { max = v; dom = k; }
        });
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

export const getRoomLeaderboard = async (roomId) => {
    // Helper used for Result Screen (Session based)
    const roomRef = doc(db, "rooms", roomId);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) return [];
    return calculateRoomLeaderboard(roomSnap.data());
};

// NEW: Global Leaderboard Fetcher
// NEW: Global Leaderboard Fetcher
export const getGlobalLeaderboard = async (type = 'Global', filterValue = null, categoryField = 'totalScore') => {
    const usersRef = collection(db, "users");
    let q;

    // Mapping categoryField to Firestore field
    // 'totalScore' -> 'totalScore'
    // 'Logical' -> 'intelligence.logical'
    let dbField = categoryField;
    if (categoryField !== 'totalScore') {
        dbField = `intelligence.${categoryField.toLowerCase()}`;
    }

    try {
        if (type === 'Global') {
            q = query(usersRef, where("isGuest", "==", false), orderBy(dbField, "desc"), limit(50));
        } else if (type === 'College') {
            q = query(usersRef, where("college", "==", filterValue), where("isGuest", "==", false), orderBy(dbField, "desc"), limit(50));
        } else if (type === 'City') {
            q = query(usersRef, where("city", "==", filterValue), where("isGuest", "==", false), orderBy(dbField, "desc"), limit(50));
        }

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Get the specific score we are sorting by for display
            let displayScore = 0;
            if (categoryField === 'totalScore') {
                displayScore = data.totalScore || 0;
            } else {
                displayScore = data.intelligence ? (data.intelligence[categoryField.toLowerCase()] || 0) : 0;
            }

            users.push({
                uid: data.uid,
                username: data.username,
                college: data.college,
                city: data.city,
                displayScore: displayScore, // Generalize the score
                dominantType: data.dominantType
            });
        });
        return users;

    } catch (e) {
        console.error("Firestore Index / Query Error:", e);
        console.warn("Falling back to client-side sort due to missing index.");

        const fallbackQ = query(usersRef, where("isGuest", "==", false), limit(100));
        const snap = await getDocs(fallbackQ);
        let users = [];
        snap.forEach(doc => {
            const data = doc.data();
            let score = 0;
            if (categoryField === 'totalScore') {
                score = data.totalScore || 0;
            } else {
                score = data.intelligence ? (data.intelligence[categoryField.toLowerCase()] || 0) : 0;
            }

            users.push({
                ...data,
                displayScore: score
            });
        });

        // Manual Filter
        if (type === 'College') {
            users = users.filter(u => u.college === filterValue);
        } else if (type === 'City') {
            users = users.filter(u => u.city === filterValue);
        }

        // Manual Sort
        users.sort((a, b) => b.displayScore - a.displayScore);

        return users.slice(0, 50);
    }
};
