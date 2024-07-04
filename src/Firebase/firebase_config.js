// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1VRW0As5uhZC2eafq59uoeHiBnn9UPE",
  authDomain: "my-tenth-assignment-1ace6.firebaseapp.com",
  projectId: "my-tenth-assignment-1ace6",
  storageBucket: "my-tenth-assignment-1ace6.appspot.com",
  messagingSenderId: "764032505865",
  appId: "1:764032505865:web:e0654775908be5a93a00d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app