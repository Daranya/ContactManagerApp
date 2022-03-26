import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN8KMFvwYTYvbzGNDhnYdlJ--28aSvR3Q",
  authDomain: "contactsmanager-be8c8.firebaseapp.com",
  projectId: "contactsmanager-be8c8",
  storageBucket: "contactsmanager-be8c8.appspot.com",
  messagingSenderId: "386111249357",
  appId: "1:386111249357:web:07031bed181e9e86170284",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
