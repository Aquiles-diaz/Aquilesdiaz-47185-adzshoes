// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTnJn42elaH8nlk1gUSzUMWljCkEtrFF0",
  authDomain: "ecommerce-shoes-976f4.firebaseapp.com",
  projectId: "ecommerce-shoes-976f4",
  storageBucket: "ecommerce-shoes-976f4.appspot.com",
  messagingSenderId: "564400782135",
  appId: "1:564400782135:web:8a2916815bb21a76cd38b2",
  measurementId: "G-SMN63PFVCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);