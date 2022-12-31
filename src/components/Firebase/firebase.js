// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6o4uFXoDXu_pHrF7hs9pOVtu1Q1ENyqk",
    authDomain: "auth-project-eb192.firebaseapp.com",
    projectId: "auth-project-eb192",
    storageBucket: "auth-project-eb192.appspot.com",
    messagingSenderId: "242313524786",
    appId: "1:242313524786:web:8be472154974903685ee2b",
    measurementId: "G-Q4XNXK12B4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };

