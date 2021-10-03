// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASZkqfO9g6jNG2mJw9FN525uvPIelkFY4",
  authDomain: "dogs-meet-dogs.firebaseapp.com",
  projectId: "dogs-meet-dogs",
  storageBucket: "dogs-meet-dogs.appspot.com",
  messagingSenderId: "834839341307",
  appId: "1:834839341307:web:c2fa74ede09b3f137d285e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, auth, provider };
