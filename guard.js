import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR4EA-cDojJtYkTAQSAvtTh4_3pEsYm0o", // <-- PASTE YOUR REAL API KEY HERE
  authDomain: "jarvis-auth-7c928.firebaseapp.com",
  projectId: "jarvis-auth-7c928",
  storageBucket: "jarvis-auth-7c928.firebasestorage.app",
  messagingSenderId: "536076036655",
  appId: "1:536076036655:web:488063abc93731445574da",
  measurementId: "G-DLVJWMFWRS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    console.log("Operator verified. Access granted.");
  }
});
