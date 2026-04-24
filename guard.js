import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// ⚠️ PASTE YOUR FIREBASE CONFIG HERE (Same one you used in auth.js) ⚠️
const firebaseConfig = {
  apiKey: "AIzaSyCR4EA-cDojJtYkTAQSAvtTh4_3pEsYm0o",
  authDomain: "jarvis-auth-7c928.firebaseapp.com",
  projectId: "jarvis-auth-7c928",
  storageBucket: "jarvis-auth-7c928.firebasestorage.app",
  messagingSenderId: "536076036655",
  appId: "1:536076036655:web:488063abc93731445574da",
  measurementId: "G-DLVJWMFWRS"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// The Bouncer: Checks if the user is verified
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If no user is logged in, kick them to the login screen!
    window.location.href = "login.html";
  } else {
    console.log("Operator verified. Access granted.");
  }
});
