import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
apiKey: "AIzaSyA_QeClFIq8hIyhpwsNr2yGvlH-r4occ0E",
    authDomain: "nutri-lyfe-e4e8f.firebaseapp.com",
    databaseURL: "https://nutri-lyfe-e4e8f-default-rtdb.firebaseio.com",
    projectId: "nutri-lyfe-e4e8f",
    storageBucket: "nutri-lyfe-e4e8f.appspot.com",
    messagingSenderId: "279277005833",
    appId: "1:279277005833:web:c35c73125e40b60d6e1cd8",
    measurementId: "G-93P44BR3MV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();