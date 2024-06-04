// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCejEoIMyc1eZ6sYa7oyB5c-CrlQJ6OQNI",
  authDomain: "he-and-she-356f5.firebaseapp.com",
  projectId: "he-and-she-356f5",
  storageBucket: "he-and-she-356f5.appspot.com",
  messagingSenderId: "473533416830",
  appId: "1:473533416830:web:3e5c32c0588c60b3dc9f2f",
  measurementId: "G-6CT6MP52BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
