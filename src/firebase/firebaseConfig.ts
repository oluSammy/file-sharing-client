// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9WYRv6abcv0ZsJ-s_D9Y2r4xcR59IQXY",
  authDomain: "file-sharing-e07cf.firebaseapp.com",
  projectId: "file-sharing-e07cf",
  storageBucket: "file-sharing-e07cf.appspot.com",
  messagingSenderId: "565922360783",
  appId: "1:565922360783:web:8e449124c651f8cde576ba",
  measurementId: "G-D9L9GY0BCQ",
  databaseURL: "https://file-sharing-e07cf-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore();

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  storage,
  db,
  signOut,
};
