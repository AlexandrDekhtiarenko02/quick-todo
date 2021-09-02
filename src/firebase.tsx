import firebase from "firebase"
import 'firebase/firestore'
import { APIKEY, APP_ID, AUTHDOMAIN, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from "./base";
export const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
}
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

