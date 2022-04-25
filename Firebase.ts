// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth } from 'firebase/auth';
import * as firebase from "firebase";
import 'firebase/firestore'
import {getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDteD4s2BmkzPk-Bh4SAKSqUB4ToqtMQvU",
  authDomain: "toy-store-362cf.firebaseapp.com",
  projectId: "toy-store-362cf",
  storageBucket: "toy-store-362cf.appspot.com",
  messagingSenderId: "114451888219",
  appId: "1:114451888219:web:08394858d5050758efa77e",
};

 let firebaseApp:any = null;
 firebaseApp =initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
// if (firebase.apps.length > 0) {
//  firebaseApp = firebase.app();
// } else {
//    firebaseApp = firebase.initializeApp(firebaseConfig);
// }
// firebaseApp = initializeApp(firebaseConfig);
 const auth = getAuth(firebaseApp);
// Initialize Firebase

export {firebaseApp, db, auth};
