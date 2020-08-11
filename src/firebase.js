import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPXz2OLkLPX7-QvCGNT6FAVjq2WRs2z0E",
    authDomain: "tik-tok-clone-b3101.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-b3101.firebaseio.com",
    projectId: "tik-tok-clone-b3101",
    storageBucket: "tik-tok-clone-b3101.appspot.com",
    messagingSenderId: "716676661934",
    appId: "1:716676661934:web:c6ae78366bfaad9fe1233f",
    measurementId: "G-02NNXWCWNM"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;