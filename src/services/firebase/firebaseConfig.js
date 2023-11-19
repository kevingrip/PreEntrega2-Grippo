// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi-QdKOs0XYk1jGa4-7wY6hoBUTlihFAU",
  authDomain: "practicadistribuidora.firebaseapp.com",
  projectId: "practicadistribuidora",
  storageBucket: "practicadistribuidora.appspot.com",
  messagingSenderId: "517630109202",
  appId: "1:517630109202:web:18c2164b2f253206ba9acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)