// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCndg6AjQW80i32Pw9s3lwHCZbJJtA7AvE",
  authDomain: "nielybeauty.firebaseapp.com",
  projectId: "nielybeauty",
  storageBucket: "nielybeauty.appspot.com",
  messagingSenderId: "364874553876",
  appId: "1:364874553876:web:3524127bc87c3a7afa6501",
  measurementId: "G-605MDRKCNQ",
  databaseURL: "https://nielybeauty-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
