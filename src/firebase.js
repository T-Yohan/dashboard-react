// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBCtO1BEBVwVYS7vtc_42vFjEvkHHjmog",
  authDomain: "dashboard-e8ce7.firebaseapp.com",
  projectId: "dashboard-e8ce7",
  storageBucket: "dashboard-e8ce7.appspot.com",
  messagingSenderId: "384305517086",
  appId: "1:384305517086:web:9ed7a4902523196a1f140f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize firestore
export const dbFirestore = getFirestore(app);
// Initialize storage
export const storage = getStorage(app);