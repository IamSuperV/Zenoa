import { db } from './firebase.js';
import {
    doc,
    updateDoc,
    setDoc,
    onSnapshot,
    serverTimestamp,
    increment
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { QUESTIONS_DB } from './data.js';

// Game State Listener
export const subscribeToGame = (roomId, callback) => {
    return onSnapshot(doc(db, "rooms", roomId), (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        }
    });
};

// Submit Answer
// Submit Answer
export const submitAnswer = async (roomId, uid, questionId, optionIndex) => {
    const roomRef = doc(db, "rooms", roomId);

    // FIX: Use updateDoc with Dot Notation to avoid overwriting the entire 'answers' map.
    // 'answers' field is initialized in createRoom, so updateDoc works.
    // keys: answers.UID.QuestionID

    const qIdKey = String(questionId);
    const fieldPath = `answers.${uid}.${qIdKey}`;

    try {
        await updateDoc(roomRef, {
            [fieldPath]: optionIndex
        });
        console.log(`Answer submitted to ${fieldPath}:`, optionIndex);
    } catch (error) {
        console.error("Submit error:", error);
        throw error;
    }
};

// Host: Advance to Next Question
export const nextQuestion = async (roomId, currentIndex, queueLength) => {
    const roomRef = doc(db, "rooms", roomId);

    if (currentIndex + 1 >= queueLength) {
        await updateDoc(roomRef, {
            status: 'finished'
        });
    } else {
        await updateDoc(roomRef, {
            currentQuestionIndex: increment(1),
            questionStartTime: serverTimestamp() // Reset timer
        });
    }
};
