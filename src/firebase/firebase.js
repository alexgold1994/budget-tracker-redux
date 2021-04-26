import  firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzfMBmQ9hrvq4AjM3-DuQb_WlWctnYc6E",
    authDomain: "budget-tracker-redux.firebaseapp.com",
    databaseURL: "https://budget-tracker-redux-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "budget-tracker-redux",
    storageBucket: "budget-tracker-redux.appspot.com",
    messagingSenderId: "70811567688",
    appId: "1:70811567688:web:65cd747a58eaeb3f373a7d"
  };

 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();


export {googleProvider, firebase as default};