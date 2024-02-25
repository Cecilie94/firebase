import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6CPtLfPS4TNP-zoQKSPdN1JkYpybXIbQ",
  authDomain: "fir-3e800.firebaseapp.com",
  projectId: "fir-3e800",
  storageBucket: "fir-3e800.appspot.com",
  messagingSenderId: "271968500928",
  appId: "1:271968500928:web:cb16bb7409ae6379d64125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
