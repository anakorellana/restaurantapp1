// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA58rX9e7diGAJgaFnUrHhcb9HArKeiwh0",
  authDomain: "courso-8bb14.firebaseapp.com",
  databaseURL: "https://courso-8bb14-default-rtdb.firebaseio.com",
  projectId: "courso-8bb14",
  storageBucket: "courso-8bb14.appspot.com",
  messagingSenderId: "652310181385",
  appId: "1:652310181385:web:0f0214580a45661eb8aad8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);