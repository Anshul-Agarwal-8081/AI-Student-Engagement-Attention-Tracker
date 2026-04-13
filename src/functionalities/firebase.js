import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyASDZHXZq_3GVsCarkZhRA-eMYvbXi0paU",
    authDomain: "student-engagement-track-a3d86.firebaseapp.com",
    databaseURL: "https://student-engagement-track-a3d86-default-rtdb.firebaseio.com",
    projectId: "student-engagement-track-a3d86",
    storageBucket: "student-engagement-track-a3d86.firebasestorage.app",
    messagingSenderId: "448854823442",
    appId: "1:448854823442:web:6ea0399791681c76ddfecb",
    measurementId: "G-PRJ6SWK6MD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);