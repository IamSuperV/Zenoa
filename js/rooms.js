import { db } from './firebase.js';
import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const GENERATE_ROOM_ID = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

import { QUESTIONS_DB } from './data.js';

// Create a Room
export const createRoom = async (hostUid, username, roomType) => {
    const roomId = GENERATE_ROOM_ID();

    // Default categories for v0.1
    const categories = [
        "Situational Reasoning",
        "Decision Under Pressure",
        "Social Intelligence",
        "Logical Adaptability"
    ];

    try {
        await setDoc(doc(db, "rooms", roomId), {
            roomId: roomId,
            hostId: hostUid,
            roomContext: roomType, // 'School' or 'College'
            status: 'waiting',     // waiting, playing, finished
            categories: categories,
            currentCategoryIndex: 0,
            currentQuestionIndex: 0,
            questionQueue: [
                ...QUESTIONS_DB.filter(q => q.category === "Situational Reasoning").slice(0, 2).map(q => q.id),
                ...QUESTIONS_DB.filter(q => q.category === "Decision Under Pressure").slice(0, 2).map(q => q.id),
                ...QUESTIONS_DB.filter(q => q.category === "Social Intelligence").slice(0, 2).map(q => q.id),
                ...QUESTIONS_DB.filter(q => q.category === "Logical Adaptability").slice(0, 2).map(q => q.id)
            ],
            createdAt: serverTimestamp(),
            players: [
                {
                    uid: hostUid,
                    username: username,
                    status: 'active', // active, disconnected
                    score: 0,
                    answers: {}
                }
            ]
        });
        return roomId;
    } catch (error) {
        console.error("Error creating room:", error);
        throw error;
    }
};

// Join a Room
export const joinRoom = async (roomId, uid, username) => {
    const roomRef = doc(db, "rooms", roomId);

    try {
        const roomSnap = await getDoc(roomRef);
        if (!roomSnap.exists()) {
            throw new Error("Room not found");
        }

        const roomData = roomSnap.data();

        // Check if already in room
        const isAlreadyIn = roomData.players.some(p => p.uid === uid);

        if (!isAlreadyIn) {
            if (roomData.status !== 'waiting') {
                throw new Error("Game already started");
            }

            await updateDoc(roomRef, {
                players: arrayUnion({
                    uid: uid,
                    username: username,
                    status: 'active',
                    score: 0,
                    answers: {}
                })
            });
        }

        return true;
    } catch (error) {
        console.error("Error joining room:", error);
        throw error;
    }
};

// Subscribe to Room Updates
export const subscribeToRoom = (roomId, callback) => {
    return onSnapshot(doc(db, "rooms", roomId), (doc) => {
        if (doc.exists()) {
            callback(doc.data());
        } else {
            callback(null); // Document deleted or doesn't exist
        }
    });
};

// Start Game
export const startGame = async (roomId) => {
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, {
        status: 'playing',
        startTime: serverTimestamp()
    });
};
