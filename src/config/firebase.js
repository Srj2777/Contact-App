// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudetUfc0vNv9smeoLwinlulleBtGV8xU",
  authDomain: "vite-contact-67597.firebaseapp.com",
  projectId: "vite-contact-67597",
  storageBucket: "vite-contact-67597.appspot.com",
  messagingSenderId: "870186449775",
  appId: "1:870186449775:web:067a6e2d9a1a807f36c69a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);