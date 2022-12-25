import { initializeApp } from "firebase/app";
import {getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCp9Sb0pPZvR0TliRPBuTNXvvoZLRE6vzM",
    authDomain: "few-insect-4217.firebaseapp.com",
    projectId: "few-insect-4217",
    storageBucket: "few-insect-4217.appspot.com",
    messagingSenderId: "336033403549",
    appId: "1:336033403549:web:e5220529fbce480f8bfa74",
    measurementId: "G-F98FN9K6DX"
  };

  const app= initializeApp(firebaseConfig);
  export const auth=getAuth(app)

  export function Logout(){
    return signOut(auth)
  }