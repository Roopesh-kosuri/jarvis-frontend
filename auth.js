import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
const googleProvider = new GoogleAuthProvider();

window.googleLogin = function() {
  signInWithPopup(auth, googleProvider).then(() => {
    window.location.href = "index.html"; 
  }).catch(e => alert("Google Auth Failed: " + e.message));
};

window.emailLogin = function() {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("pass").value;
  if(!email || !pass) return alert("Fill in all fields");

  signInWithEmailAndPassword(auth, email, pass).then(() => {
    window.location.href = "index.html"; 
  }).catch(e => alert("Access Denied: " + e.message));
};

window.emailSignup = function() {
  const name  = document.getElementById("name").value;
  const email = document.getElementById("email2").value;
  const pass  = document.getElementById("pass2").value;
  if(!name || !email || !pass) return alert("Fill in all fields");

  createUserWithEmailAndPassword(auth, email, pass).then((userCred) => {
    updateProfile(userCred.user, { displayName: name }).then(() => {
      window.location.href = "index.html"; 
    });
  }).catch(e => alert("Registration Failed: " + e.message));
};
