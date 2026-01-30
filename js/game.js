import { db } from './firebase.js';
import {
    doc,
    updateDoc,
    onSnapshot,
    serverTimestamp,
    increment,
    arrayUnion
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

    // Calculate Score Impact (Simplistic for local feedback, real calc happens on profile update)
    const question = QUESTIONS_DB.find(q => q.id === questionId);
    const weights = question.weights[optionIndex] || {};

    // We store the answer in the player's object in the array
    // Firestore array update is tricky for specific item fields, standard pattern is to read-modify-write entire array
    // Or simpler: store answers in a separate subcollection or map if high concurrency
    // For v0.1: We will use a separate field `playerAnswers` map in the room doc: { uid: { qId: answerIdx } }

    const key = `answers.${uid}.${questionId}`;

    await updateDoc(roomRef, {
        [key]: optionIndex
    });
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

// Update Player Score/Stats (At end of game or live?)
// For v0.1, we'll calculate final stats at the results screen based on all answers.
