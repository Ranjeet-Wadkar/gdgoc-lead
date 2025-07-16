import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXPm1DNlyepDmaqPPU6PIX8NT0Mmw37LU",
    authDomain: "gdgoc-lead-project.firebaseapp.com",
    projectId: "gdgoc-lead-project",
    storageBucket: "gdgoc-lead-project.firebasestorage.app",
    messagingSenderId: "956132283372",
    appId: "1:956132283372:web:3d14d2d5085921eb2ca6c9"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
