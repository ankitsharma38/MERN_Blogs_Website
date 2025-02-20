import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from './getEnv';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn("VITE_FIREBASE_API"),
  authDomain: "mern-blog-e4e8e.firebaseapp.com",
  projectId: "mern-blog-e4e8e",
  storageBucket: "mern-blog-e4e8e.firebasestorage.app",
  messagingSenderId: "634626734212",
  appId: "1:634626734212:web:36065ea33f67178a1f2ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}