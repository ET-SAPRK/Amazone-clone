import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC80m02qCG2FSluJplxzaAtSjKlbDEYn1w",
  authDomain: "e-challenge-80c57.firebaseapp.com",
  projectId: "e-challenge-80c57",
  storageBucket: "e-challenge-80c57.appspot.com",
  messagingSenderId: "560623857483",
  appId: "1:560623857483:web:ce03a0d4dc13d9272942ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
