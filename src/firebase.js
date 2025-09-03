import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHNG16NKxkkGgJAOfYXOIMunhLGL-IUd0",
  authDomain: "twitter-clone-b5044.firebaseapp.com",
  projectId: "twitter-clone-b5044",
  storageBucket: "twitter-clone-b5044.appspot.com",
  messagingSenderId: "523642348371",
  appId: "1:523642348371:web:2a7eddd3779910eef237a6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
