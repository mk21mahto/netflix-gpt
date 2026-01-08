// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5OM270aBYx4slNuMH8XS2Q09q9ORAbZg",
  authDomain: "netflixgpt-6caea.firebaseapp.com",
  projectId: "netflixgpt-6caea",
  storageBucket: "netflixgpt-6caea.firebasestorage.app",
  messagingSenderId: "991016759476",
  appId: "1:991016759476:web:5ba3706c50f1b23a0c67e1",
  measurementId: "G-BPD3YRHT74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
