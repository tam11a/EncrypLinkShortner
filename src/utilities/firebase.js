import { initializeApp } from "firebase/app";
// import "firebase/auth"; //project-176088258311
// import "firebase/analytics";
// import "firebase/database";

const firebase = initializeApp({
  apiKey: "AIzaSyB2Gl_XAIu_KcDmFYP4zpZaCGxHCoQJKyI",
  authDomain: "encryplinkshortner.firebaseapp.com",
  databaseURL: "https://encryplinkshortner-default-rtdb.firebaseio.com",
  projectId: "encryplinkshortner",
  storageBucket: "encryplinkshortner.appspot.com",
  messagingSenderId: "176088258311",
  appId: "1:176088258311:web:fdef95c444c69e937bd7a2",
});

// firebase.analytics();
export default firebase;
