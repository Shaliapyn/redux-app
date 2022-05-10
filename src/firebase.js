import { initializeApp } from "firebase/app";
import {  
    collection,
    getFirestore
} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCf7hiyQjdgK7bSxvOMk-m3iJNZFPv2idE",
  authDomain: "booklist-95a05.firebaseapp.com",
  projectId: "booklist-95a05",
  storageBucket: "booklist-95a05.appspot.com",
  messagingSenderId: "306876709471",
  appId: "1:306876709471:web:0097a18c11ab750a97b9ea",
  measurementId: "G-6NJP4LWY87"
};

 const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const todoCollectionRef = collection(db, "todos")
