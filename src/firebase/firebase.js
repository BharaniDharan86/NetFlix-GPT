// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEOHSYT4V3OkRRVccQLIlwvuQZlTILMtY",
  authDomain: "netflix-gpt-7ae88.firebaseapp.com",
  projectId: "netflix-gpt-7ae88",
  storageBucket: "netflix-gpt-7ae88.appspot.com",
  messagingSenderId: "495347986443",
  appId: "1:495347986443:web:d7d51c8935645164c8570e",
  measurementId: "G-8H3HVP9L0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
