// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeAYFRShTPsbqWgfgjwPY9St8l6Nny1Gc",
  authDomain: "my-travel-3e601.firebaseapp.com",
  projectId: "my-travel-3e601",
  storageBucket: "my-travel-3e601.appspot.com",
  messagingSenderId: "1032490454476",
  appId: "1:1032490454476:web:1d09563a9952d0d112e169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;