// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCL3sp0coqjfdEsFE88HR-b1pSj-Qrc6QY",
  authDomain: "netflix-64689.firebaseapp.com",
  projectId: "netflix-64689",
  storageBucket: "netflix-64689.appspot.com",
  messagingSenderId: "33971438495",
  appId: "1:33971438495:web:7bce351d6f7c49e7bd73aa",
  measurementId: "G-51TS6S9FC0"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};