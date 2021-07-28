import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./c3jscustom.css";
import { FirebaseAppProvider } from "reactfire";

import App from "./App.react";

const Config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "waterassistanceprograms-6fcca.firebaseapp.com",
  projectId: "waterassistanceprograms-6fcca",
  storageBucket: "waterassistanceprograms-6fcca.appspot.com",
  messagingSenderId: "511118749868",
  appId: "1:511118749868:web:645de7fdbfbbf7e497af09",
  measurementId: "G-T2YZ1056F8",
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={Config}>
      <App />
    </FirebaseAppProvider>,
    rootElement
  );
} else {
  throw new Error("Could not find root element to mount to!");
}
