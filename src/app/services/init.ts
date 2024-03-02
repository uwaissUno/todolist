// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLf9CgrgtGfb_3tmZAncZ8HbyhEyXynG8",
  authDomain: "fir-app-1a686.firebaseapp.com",
  projectId: "fir-app-1a686",
  storageBucket: "fir-app-1a686.appspot.com",
  messagingSenderId: "775806542362",
  appId: "1:775806542362:web:4e6df96949a1265fa8a7a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)