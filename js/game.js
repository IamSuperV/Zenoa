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
export const submitAnswer = async (roomId, uid, questionId, optionIndex) => {
    const roomRef = doc(db, "rooms", roomId);

    // We use setDoc with merge: true to ensure we don't overwrite other fields
    // and to create the nested structure if it's missing.
    // Structure: answers / UID / QuestionID

    // Convert QuestionID to string to be safe as Map key
    const qIdKey = String(questionId);

    const matchData = {
        answers: {
            [uid]: {
                [qIdKey]: optionIndex
            }
        }
    };

    try {
        await setDoc(roomRef, matchData, { merge: true });
        console.log("Answer submitted:", matchData);
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
