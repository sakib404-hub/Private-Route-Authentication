import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbCJAsmsNs5hro_DAsqpki60zMuDkTCjI",
  authDomain: "private-route-77e26.firebaseapp.com",
  projectId: "private-route-77e26",
  storageBucket: "private-route-77e26.firebasestorage.app",
  messagingSenderId: "142298762267",
  appId: "1:142298762267:web:5dc8fa57a34dcd60007cbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
