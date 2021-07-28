import firebase from "firebase";

const Config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "waterassistanceprograms-6fcca.firebaseapp.com",
  projectId: "waterassistanceprograms-6fcca",
  storageBucket: "waterassistanceprograms-6fcca.appspot.com",
  messagingSenderId: "511118749868",
  appId: "1:511118749868:web:645de7fdbfbbf7e497af09",
  measurementId: "G-T2YZ1056F8",
};

var firebaseApp = firebase.initializeApp(Config);

var db = firebaseApp.firestore();

export { firebaseApp, db };
