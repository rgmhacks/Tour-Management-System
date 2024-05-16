// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tour-app-cf304.firebaseapp.com",
  projectId: "tour-app-cf304",
  storageBucket: "tour-app-cf304.appspot.com",
  messagingSenderId: "46975976543",
  appId: "1:46975976543:web:c9f2f515b527ff494347ea",
  measurementId: "G-JYG472TZ73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
