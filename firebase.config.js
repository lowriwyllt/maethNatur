// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7mEOdk1JhA3yNvq75AiHx_A6MFXDbFio",
  authDomain: "maeth-natur.firebaseapp.com",
  projectId: "maeth-natur",
  storageBucket: "maeth-natur.appspot.com",
  messagingSenderId: "42682549168",
  appId: "1:42682549168:web:5fb4ef1ba4a8f8fc678c75",
  measurementId: "G-NRYGYW95L7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
