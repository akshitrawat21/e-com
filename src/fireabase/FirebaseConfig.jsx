// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9HJJVJEyX5aFfsfBpzU2UZEwJZ_WP5vA",
  authDomain: "ecommerce-c9355.firebaseapp.com",
  projectId: "ecommerce-c9355",
  storageBucket: "ecommerce-c9355.appspot.com",
  messagingSenderId: "277564775823",
  appId: "1:277564775823:web:189028dfcffc69361b7ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}