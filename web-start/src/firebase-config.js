/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyATdpGneCSuy_FFAvlnwF4eRt3c3r_QQF0",
  authDomain: "friendlychatcodelabsample.firebaseapp.com",
  projectId: "friendlychatcodelabsample",
  storageBucket: "friendlychatcodelabsample.appspot.com",
  messagingSenderId: "1095468410316",
  appId: "1:1095468410316:web:64f5bad677e76d50812969",
  measurementId: "G-H8SK6D2R2F"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}