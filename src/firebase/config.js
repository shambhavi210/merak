// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { Firestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDJ7JrvGmEqgQL0Bdd2JquqpKjNERHZRcY",
  authDomain: "merak-firebase.firebaseapp.com",
  databaseURL: "https://merak-firebase.appspot.com",
  projectId: "merak-firebase",
  storageBucket: "merak-firebase.appspot.com",
  messagingSenderId: "892300453916",
  appId: "1:892300453916:web:1dcbdef03268abe36897d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }