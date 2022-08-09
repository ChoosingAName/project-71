import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCk6F7aM1WRUOJOirhTLacWBGyGmA7G3yM",
    authDomain: "project-71-19521.firebaseapp.com",
    projectId: "project-71-19521",
    storageBucket: "project-71-19521.appspot.com",
    messagingSenderId: "594153688749",
    appId: "1:594153688749:web:c87096748ae1b0e4430024"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
