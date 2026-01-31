import { db } from './firebase.js';
import {
    doc,
    updateDoc,
    getDoc,
    onSnapshot,
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

    // BUG FIX: If no answers found, return a default empty structure instead of null
    // This allows the UI to render 0s instead of crashing/hanging
    if (!playerAnswers) {
        console.warn(`No answers found for user ${userId} in room ${roomId}. Returning 0 stats.`);
        return {
            stats: { logical: 0, strategic: 0, social: 0, political: 0, adaptive: 0 },
            dominantType: "Unranked",
            badges: [],
            xpGained: 0,
            newTotalScore: userData.totalScore || 0,
            oldTier: "BRONZE",
            newTier: "BRONZE",
            isPromoted: false,
            trophyEarned: false
        };
    }

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

    // 5. Update User Profile & Calculate Progression
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.exists() ? userDoc.data() : {};

    // TIER SYSTEM
    const currentScore = userData.totalScore || 0;
    // XP Gain = Total Session Score + 50 Bonus
    const sessionScore = (sessionStats.logical + sessionStats.strategic + sessionStats.social + sessionStats.political + sessionStats.adaptive);
    const totalGain = Math.max(0, sessionScore) + 50; // Ensure positive + bonus
    const newTotalScore = currentScore + totalGain;

    const getTier = (score) => {
        if (score >= 5000) return "LEGEND";
        if (score >= 3000) return "CHAMPION";
        if (score >= 1500) return "PLATINUM";
        if (score >= 500) return "GOLD";
        return "BRONZE";
    };

    const oldTier = getTier(currentScore);
    const newTier = getTier(newTotalScore);
    const isPromoted = oldTier !== newTier;

    // FIX: Define newBadges array
    let newBadges = [];
    if (isPromoted) {
        newBadges.push(`Promoted to ${newTier}`);
    }

    // TROPHIES
    // Award a trophy just for playing (Participation) or potentially for winning (if we knew rank here)
    // Since this runs per user, we'll award a "Match Completion" trophy every time
    // But store as simple count or distinct IDs? User asked "trophies after every match"
    // Let's increment a "trophies" counter and maybe add a unique trophy ID
    const trophyId = `trophy_${Date.now()}`;

    const updatePayload = {
        matchesPlayed: increment(1),
        "intelligence.logical": increment(sessionStats.logical),
        "intelligence.strategic": increment(sessionStats.strategic),
        "intelligence.social": increment(sessionStats.social),
        "intelligence.political": increment(sessionStats.political),
        "intelligence.adaptive": increment(sessionStats.adaptive),
        "totalScore": increment(totalGain), // Add to total Score
        "dominantType": dominantType,
        "trophies": increment(1) // Simple count for now
    };

    if (newBadges.length > 0) {
        updatePayload.badges = arrayUnion(...newBadges);
    }

    await updateDoc(userRef, updatePayload);

    return {
        stats: sessionStats,
        dominantType: dominantType,
        badges: newBadges,
        xpGained: totalGain,
        newTotalScore: newTotalScore,
        oldTier: oldTier,
        newTier: newTier,
        isPromoted: isPromoted,
        trophyEarned: true
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

// NEW: Real-Time Global/College/City Leaderboard
export const subscribeToLeaderboard = (type, filterValue, categoryField, onUpdate, onError) => {
    const usersRef = collection(db, "users");
    let q;

    // Mapping categoryField to Firestore field
    let dbField = categoryField;
    if (categoryField !== 'totalScore') {
        dbField = `intelligence.${categoryField.toLowerCase()}`;
    }

    try {
        // STRATEGY CHANGE: To avoid "System Calibration" (Missing Index) errors, 
        // we will fetch the top 100 users sorted by score and filter client-side.
        // This works with default Firestore indexes and avoids manual setup.

        // 1. Base Query: Sort by the target score field
        // We do NOT filter by 'isGuest' or 'college' in the query itself to avoid composite index requirements.
        q = query(usersRef, orderBy(dbField, "desc"), limit(100));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let users = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();

                // Client-Side Filter: Remove Guests
                if (data.isGuest === true) return;

                // Client-Side Filter: College / City
                if (type === 'College' && filterValue && data.college !== filterValue) return;
                if (type === 'City' && filterValue && data.city !== filterValue) return;

                // Get display score
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
                    displayScore: displayScore,
                    dominantType: data.dominantType,
                    tier: getTierFromScore(data.totalScore || 0)
                });
            });

            // Re-sort client side just in case (though query was sorted, filtering preserves order)
            // But if we filtered differently (not needed here as we ordered by score), it's fine.

            // Limit to 50 specifically for display
            users = users.slice(0, 50);

            onUpdate(users);
        }, (error) => {
            console.error("Leaderboard Stream Error:", error);
            if (onError) onError(error);
        });

        return unsubscribe;

    } catch (e) {
        console.error("Setup Error:", e);
        if (onError) onError(e);
        return () => { };
    }
};

const getTierFromScore = (score) => {
    if (score >= 5000) return "LEGEND";
    if (score >= 3000) return "CHAMPION";
    if (score >= 1500) return "PLATINUM";
    if (score >= 500) return "GOLD";
    return "BRONZE";
};
