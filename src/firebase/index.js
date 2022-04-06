import "firebase/firestore";
import { FirebaseConfig } from "./config";
import firebase from "firebase/app";
import "firebase/storage";

firebase.initializeApp(FirebaseConfig);

export const getFirestore = () => firebase.firestore();

export const getStorage = () => firebase.storage();
