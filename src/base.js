import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhx1KS-ebUgo9BrN7cxnWAXoM1Ul_fF1Y",
  authDomain: "react-burger-fc3ea.firebaseapp.com",
  databaseURL: "https://react-burger-fc3ea-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
