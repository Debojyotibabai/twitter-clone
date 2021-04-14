import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHNG16NKxkkGgJAOfYXOIMunhLGL-IUd0",
  authDomain: "twitter-clone-b5044.firebaseapp.com",
  projectId: "twitter-clone-b5044",
  storageBucket: "twitter-clone-b5044.appspot.com",
  messagingSenderId: "523642348371",
  appId: "1:523642348371:web:2a7eddd3779910eef237a6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
