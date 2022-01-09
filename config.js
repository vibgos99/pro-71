import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyD_6SVjgmbHkR5ZkqrTTejxNxDRRPjbdew",
    authDomain: "pro-71-3385e.firebaseapp.com",
    projectId: "pro-71-3385e",
    storageBucket: "pro-71-3385e.appspot.com",
    messagingSenderId: "37769253316",
    appId: "1:37769253316:web:12ef05ff958d4352af1491"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


