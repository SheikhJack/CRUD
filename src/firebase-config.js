// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBii0Rhc0im71I1hftPWf7Mf-SNPV17W_8",
  authDomain: "my-blog-5c71f.firebaseapp.com",
  projectId: "my-blog-5c71f",
  storageBucket: "my-blog-5c71f.appspot.com",
  messagingSenderId: "203928924654",
  appId: "1:203928924654:web:127a7e5d02eb074d7d9eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();