// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBhIL6zBAx3yX4hESJT2bxGwcdiGBefDQg",
  authDomain: "project71180274.firebaseapp.com",
  projectId: "project71180274",
  storageBucket: "project71180274.appspot.com",
  messagingSenderId: "1018744992578",
  appId: "1:1018744992578:web:29cb2a8caa87d85dbf0edb",
  measurementId: "G-7W19R8S57Q"
};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebase);

export default {firebase};