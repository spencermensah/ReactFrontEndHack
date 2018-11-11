import React, { Component } from "react";
import firebase from 'firebase';
import {StyledFirebaseAuth} from 'react-firebaseui';
import 'firebase/firestore'
import './bootstrap-grid.css';

const config = {
  apiKey: "AIzaSyCh4QPx3kfFt9p-ZEeBevj9HTjbED5rfnw",
  authDomain: "theatre-booking.firebaseapp.com",
  databaseURL: "https://theatre-booking.firebaseio.com",
  projectId: "theatre-booking",
  storageBucket: "theatre-booking.appspot.com",
  messagingSenderId: "154420672527"
}
if (!firebase.apps.length) {
  firebase.initializeApp({});
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/#/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

const current = firebase.auth().currentuser;

if (current != null){
  const name = current.displayName;
  console.log(name);
}


class login extends Component {

  render() {
    return (

    <div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

          
      </div>
    </div>

  )
}
}

export default login;
