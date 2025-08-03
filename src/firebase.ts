// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore}from"firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8WMoUyjViFtRiSI6SAIRAevcVWgdSD5w",
  authDomain: "householdtypescript-853b2.firebaseapp.com",
  projectId: "householdtypescript-853b2",
  storageBucket: "householdtypescript-853b2.firebasestorage.app",
  messagingSenderId: "145180839589",
  appId: "1:145180839589:web:dc160ad577ba1036f3c74c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
