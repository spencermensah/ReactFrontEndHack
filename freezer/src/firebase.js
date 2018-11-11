// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDUx91wO3ER6t1UpMm1ZvReo7kI3MzXVlQ",
  authDomain: "hacktrain-e9b55.firebaseapp.com",
  databaseURL: "https://hacktrain-e9b55.firebaseio.com",
  projectId: "hacktrain-e9b55",
  storageBucket: "hacktrain-e9b55.appspot.com",
  messagingSenderId: "1089601403952"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
