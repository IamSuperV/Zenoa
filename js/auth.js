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

// Guest Login
export const loginAsGuest = async () => {
    try {
        const result = await signInAnonymously(auth);
        const user = result.user;
        const guestName = "Guest-" + user.uid.substring(0, 4).toUpperCase();

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: guestName,
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
        });

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
