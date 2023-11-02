const { initializeApp, applicationDefault, cert } = require("firebase/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
  getDocs,
} = require("firebase/firestore");

const apiKEY = process.env.apiKey;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: apiKEY,
  authDomain: "remember-1a08b.firebaseapp.com",
  databaseURL:
    "https://remember-1a08b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "remember-1a08b",
  storageBucket: "remember-1a08b.appspot.com",
  messagingSenderId: "128970616839",
  appId: "1:128970616839:web:66c884f1586b731fecbaa2",
  measurementId: "G-X6Y7BRZBZV",
});

const db = getFirestore();

export default db;
