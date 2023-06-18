// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARmdo1txiL6MHhgXU0osbFyM9iGyXVDWY",
  authDomain: "el-nino-ab827.firebaseapp.com",
  projectId: "el-nino-ab827",
  storageBucket: "el-nino-ab827.appspot.com",
  messagingSenderId: "924359724055",
  appId: "1:924359724055:web:9d02834d4c58c60e61a052",
  measurementId: "G-NFFTWCJ70G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
