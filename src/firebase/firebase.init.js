/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDzmjp4fBVqmSut4AuPXf-twURmLaLgQWk",
  authDomain: "glaazex-vite.firebaseapp.com",
  projectId: "glaazex-vite",
  storageBucket: "glaazex-vite.appspot.com",
  messagingSenderId: "736567272365",
  appId: "1:736567272365:web:cf05bb14d4e8ca34827724"
  // apiKey: import.meta.env.VITE_REACT_APP_apiKey,
  // authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  // projectId: import.meta.env.VITE_REACT_APP_projectId,
  // storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  // messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  // appId: import.meta.env.VITE_REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;