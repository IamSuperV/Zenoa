// Data & Firestore Logic

import { db } from "./firebase.js";
import {
    doc,
    getDoc,
    setDoc,
    addDoc,
    updateDoc,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    increment,
    arrayUnion,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Get User Stats
 * @param {string} uid 
 */
export async function getUserStats(uid) {
    try {
        const docRef = doc(db, "stats", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching stats:", error);
        return null;
    }
}

/**
 * Get User Profile Data
 * @param {string} uid 
 */
export async function getUserProfile(uid) {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
}

/**
 * Save Game Response & Update Stats
 * @param {string} uid 
 * @param {object} responseData 
 */
export async function saveGameResult(uid, responseData) {
    try {
        // 1. Save individual response
        await addDoc(collection(db, "responses"), {
            userId: uid,
            ...responseData,
            createdAt: serverTimestamp()
        });

        // 2. Calculate Tier Progress (Simplified Logic)
        // In a real app, this would be backend logic.
        const xpGain = 50;
        let newDecisionStyle = responseData.decisionStyle || "balanced";

        // 3. Update User Stats
        const statsRef = doc(db, "stats", uid);
        await updateDoc(statsRef, {
            matchesPlayed: increment(1),
            tierProgress: increment(xpGain),
            sr: increment(25), // Placeholder SR gain
            decisionStyles: arrayUnion(newDecisionStyle),
            lastPlayed: serverTimestamp()
        });

        // 4. Update 'isNew' flag on user doc if it's the first match
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, {
            isNew: false
        });

        return true;
    } catch (error) {
        console.error("Error saving game:", error);
        throw error;
    }
}

/**
 * Get Leaderboard (Top 10 by SR)
 */
export async function getLeaderboard() {
    try {
        // Note: This query requires a Firestore index on 'sr'.
        // If it fails initially, check console for the index creation link.
        const q = query(collection(db, "stats"), orderBy("sr", "desc"), limit(10));
        const querySnapshot = await getDocs(q);

        const leaderboard = [];
        querySnapshot.forEach((doc) => {
            leaderboard.push({ id: doc.id, ...doc.data() });
        });

        // We need to fetch usernames separately or store them in stats. 
        // For simplicity, we'll fetch basic profile data or join client-side 
        // (Not ideal for production scale, but fits this constraint).
        // A better approach is copying displayName to 'stats' doc upon update.

        return leaderboard;
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return [];
    }
}
