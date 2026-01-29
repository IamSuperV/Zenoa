// Authentication Logic

import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Sign up a new user
 * @param {string} email 
 * @param {string} password 
 * @param {string} name 
 */
export async function signupUser(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update Display Name
        if (name) {
            await updateProfile(user, { displayName: name });
        }

        // Initialize User Document
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            displayName: name || "Anonymous",
            createdAt: serverTimestamp(),
            tier: "Rookie",
            isNew: true
        });

        // Initialize Stats Document
        await setDoc(doc(db, "stats", user.uid), {
            matchesPlayed: 0,
            bestCategory: null,
            decisionStyles: [],
            lastPlayed: null,
            tierProgress: 0,
            sr: 1000 // Starting Skill Rating
        });

        return user;
    } catch (error) {
        throw error;
    }
}

/**
 * Log in an existing user
 * @param {string} email 
 * @param {string} password 
 */
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

/**
 * Log out the current user
 */
export async function logoutUser() {
    try {
        await signOut(auth);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

/**
 * Monitor Auth State
 * @param {function} callback 
 */
export function monitorAuth(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}
