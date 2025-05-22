// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBJ9hq2j1fvdDYqBCiQ7KEbi5-gh9QH6ks",
  authDomain: "star-wars-ships-5303e.firebaseapp.com",
  projectId: "star-wars-ships-5303e",
  storageBucket: "star-wars-ships-5303e.firebasestorage.app",
  messagingSenderId: "147873892841",
  appId: "1:147873892841:web:c84219b4a73c81570ce378",
  measurementId: "G-EYQHRQTMJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);