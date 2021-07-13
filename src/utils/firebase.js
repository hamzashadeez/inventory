import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPHLQl8WBdLuAtZtUQqMTB8be_gbbugro",
    authDomain: "inventory-7f6ce.firebaseapp.com",
    projectId: "inventory-7f6ce",
    storageBucket: "inventory-7f6ce.appspot.com",
    messagingSenderId: "749131749799",
    appId: "1:749131749799:web:e532776b1c57b1fc65be82",
    measurementId: "G-JB9LJG836Z"
  });

  firebase.analytics();

  const storage = firebaseApp.storage();
  const db = firebaseApp.firestore();

  export {db, storage}; 