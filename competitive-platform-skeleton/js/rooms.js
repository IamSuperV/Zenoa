import { db, auth } from './firebase.js';
import {
    collection,
    addDoc,
    doc,
    updateDoc,
    onSnapshot,
    arrayUnion,
    serverTimestamp,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const roomsCol = collection(db, 'rooms');

/**
 * Creates a new room with the current user as host.
 * @param {string} roomName - Optional name for the room
 * @returns {Promise<string>} The Room ID
 */
export async function createRoom(roomName = "Custom Lobby") {
    if (!auth.currentUser) throw new Error("Must be logged in to create room");

    const user = auth.currentUser;
    const roomPayload = {
        hostId: user.uid,
        hostName: user.displayName || "Anonymous Host",
        name: roomName,
        status: 'waiting', // waiting, active, finished
        createdAt: serverTimestamp(),
        players: [
            {
                uid: user.uid,
                name: user.displayName || "Anonymous",
                ready: true, // Host is always ready
                joinedAt: Date.now()
            }
        ]
    };

    const docRef = await addDoc(roomsCol, roomPayload);
    return docRef.id;
}

/**
 * Joins an existing room.
 * @param {string} roomId 
 */
export async function joinRoom(roomId) {
    if (!auth.currentUser) throw new Error("Must be logged in to join room");

    const user = auth.currentUser;
    const roomRef = doc(db, 'rooms', roomId);
    const roomSnap = await getDoc(roomRef);

    if (!roomSnap.exists()) {
        throw new Error("Room not found");
    }

    const roomData = roomSnap.data();

    // Check if already in room
    const isAlreadyJoined = roomData.players.some(p => p.uid === user.uid);
    if (isAlreadyJoined) return;

    if (roomData.status !== 'waiting') {
        throw new Error("Room is already active or finished");
    }

    if (roomData.players.length >= 5) {
        throw new Error("Room is full");
    }

    await updateDoc(roomRef, {
        players: arrayUnion({
            uid: user.uid,
            name: user.displayName || "Anonymous",
            ready: false,
            joinedAt: Date.now()
        })
    });
}

/**
 * Subscribes to real-time updates for a room.
 * @param {string} roomId 
 * @param {function} callback - Function called with room data
 * @returns {function} Unsubscribe function
 */
export function subscribeToRoom(roomId, callback) {
    const roomRef = doc(db, 'rooms', roomId);
    return onSnapshot(roomRef, (doc) => {
        if (doc.exists()) {
            callback({ id: doc.id, ...doc.data() });
        } else {
            callback(null);
        }
    });
}
