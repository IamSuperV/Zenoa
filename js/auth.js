import { auth, db } from './firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// DOM Elements & Utility
const handleError = (error) => {
    console.error(error);
    alert(error.message);
};

// Sign Up Function
export const signUpUser = async (email, password, username, college, city) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update Auth Profile
        await updateProfile(user, { displayName: username });

        // Create User Document in Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: username,
            email: email,
            college: college,
            city: city || "Unknown",
            isGuest: false,
            createdAt: serverTimestamp(),
            matchesPlayed: 0,
            badges: [],
            stats: {
                consistency: 0,
                speed: 0,
                adaptability: 0,
                social: 0
            }
        });

        window.location.href = 'dashboard.html';
    } catch (error) {
        handleError(error);
    }
};

// Login Function
export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        handleError(error);
    }
};

// Helper: Create Guest Doc
export const createGuestProfile = async (user) => {
    const GUEST_NAMES = [
        "Thor", "Tony Stark", "Natasha", "Hulk", "Steve",
        "Nick Fury", "Peter Parker", "Ben Tennesson", "Gwen Stacy"
    ];
    const randomName = GUEST_NAMES[Math.floor(Math.random() * GUEST_NAMES.length)];

    // Append small suffix to ensure uniqueness in room if needed, or just keep name
    // User asked for "just these names". But collision might be confusing in lobby.
    // I will add a small ID to be safe: "Thor (8F)"
    const suffix = user.uid.substring(0, 2).toUpperCase();
    const finalName = `${randomName} ${suffix}`;

    const headers = {
        uid: user.uid,
        username: finalName,
        email: "guest@zenoa.app",
        college: "N/A",
        city: "Unknown",
        isGuest: true,
        createdAt: serverTimestamp(),
        matchesPlayed: 0,
        badges: [],
        stats: {
            logical: 0, strategic: 0, social: 0, political: 0, adaptive: 0
        }
    };
    await setDoc(doc(db, "users", user.uid), headers);
    return headers;
};

// Guest Login
export const loginAsGuest = async () => {
    try {
        const validUser = await signInAnonymously(auth);
        await createGuestProfile(validUser.user);
        window.location.href = 'dashboard.html';
    } catch (error) {
        handleError(error);
    }
};

// Logout Function
export const logoutUser = async () => {
    try {
        await signOut(auth);
        window.location.href = 'index.html';
    } catch (error) {
        handleError(error);
    }
};

// Auth State Listener (for protected pages)
export const requireAuth = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });
};

// Get User Profile Data
export const getUserProfile = async (uid) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such user document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};
