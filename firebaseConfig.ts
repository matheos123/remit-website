
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCsLpwCPIp5PzuOUxI0W5qymQeWzELuRQ8",
  authDomain: "sendly-website.firebaseapp.com",
  projectId: "sendly-website",
  storageBucket: "sendly-website.firebasestorage.app",
  messagingSenderId: "547367009479",
  appId: "1:547367009479:web:aa0bf54800f433e27012e2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // If using Firestore

export { app, auth, db };