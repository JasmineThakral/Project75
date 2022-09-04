import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBX0wiZ_T7bvKdO35gElxavd63E3FZZLkQ",
  authDomain: "class75-9d402.firebaseapp.com",
  projectId: "class75-9d402",
  storageBucket: "class75-9d402.appspot.com",
  messagingSenderId: "685061537429",
  appId: "1:685061537429:web:d6b823233b69e73132e59c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
