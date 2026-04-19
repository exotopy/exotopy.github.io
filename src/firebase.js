// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKBpCsbyt6EkzGISk46r8n1omB410nXdw",
  authDomain: "jesseli-fd9e3.firebaseapp.com",
  projectId: "jesseli-fd9e3",
  storageBucket: "jesseli-fd9e3.firebasestorage.app",
  messagingSenderId: "852143280038",
  appId: "1:852143280038:web:f1db3a9d8d558fdd55c967",
  measurementId: "G-5SQG8FCJSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
