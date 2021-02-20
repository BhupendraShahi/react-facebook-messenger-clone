import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA55wIYgEpdcalVnJW5z_Zdu5H9blWL328",
  authDomain: "facebook-messenger-clone-4efd1.firebaseapp.com",
  projectId: "facebook-messenger-clone-4efd1",
  storageBucket: "facebook-messenger-clone-4efd1.appspot.com",
  messagingSenderId: "803901366094",
  appId: "1:803901366094:web:d2998fcc89f9d3dbbc481f",
  measurementId: "G-RP40798HHQ"
});

const db = firebaseApp.firestore();

export default db;