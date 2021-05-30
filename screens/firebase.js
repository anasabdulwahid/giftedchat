import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA7GZ92T-JBfvl0GzC5f_lYLf0HfOTs0_8",
  authDomain: "gifted-chat-f4ebb.firebaseapp.com",
  projectId: "gifted-chat-f4ebb",
  storageBucket: "gifted-chat-f4ebb.appspot.com",
  messagingSenderId: "809912059470",
  appId: "1:809912059470:web:012ac1e3fda1861516a51f",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };


