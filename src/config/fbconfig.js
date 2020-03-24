import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyA53jkfqhUhgGHD44SbjAJXmkjfctU0tTY",
  authDomain: "proplannerreact.firebaseapp.com",
  databaseURL: "https://proplannerreact.firebaseio.com",
  projectId: "proplannerreact",
  storageBucket: "proplannerreact.appspot.com",
  messagingSenderId: "426134118696",
  appId: "1:426134118696:web:d630fcf0968821c81b701d",
  measurementId: "G-G9QN5MR5RQ"
};

  
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore();
  // firebase.firestore().settings({
  //   timestampsInSnapshots: true
  // });

 
  export default firebase;