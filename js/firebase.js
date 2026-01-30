// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt1iQ18waxW0GY6Vt9RyhEO63wk6kMcCU",
    authDomain: "zenoa-d825e.firebaseapp.com",
    projectId: "zenoa-d825e",
    storageBucket: "zenoa-d825e.firebasestorage.app",
    messagingSenderId: "792298885262",
    appId: "1:792298885262:web:dd74e26077764eb23239df",
    measurementId: "G-D652YSETM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
