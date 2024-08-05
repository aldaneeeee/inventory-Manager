// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6LSL-EISORTDPsGDT-kFnDx94-nNUvnI",
  authDomain: "pantry-tracker-9cad0.firebaseapp.com",
  projectId: "pantry-tracker-9cad0",
  storageBucket: "pantry-tracker-9cad0.appspot.com",
  messagingSenderId: "1064858761166",
  appId: "1:1064858761166:web:aa4ca2a7aa06dbf4d59d9f",
  measurementId: "G-25P7TNCR8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}