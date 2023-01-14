// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVTKGgUT4HlgbD5W7xG7cxa5k-shljE80",
  authDomain: "framework-site.firebaseapp.com",
  databaseURL: "https://framework-site-default-rtdb.firebaseio.com",
  projectId: "framework-site",
  storageBucket: "framework-site.appspot.com",
  messagingSenderId: "1023220853754",
  appId: "1:1023220853754:web:e81f32ebe59f2496fd1243",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
