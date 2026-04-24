// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// ⚠️ YOUR FIREBASE KEYS GO HERE ⚠️
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Override the dummy functions in your HTML
window.googleLogin = function() {
  signInWithPopup(auth, googleProvider).then(() => {
    window.location.href = "index.html"; // Change to your chat page
  }).catch(e => alert("Google Auth Failed: " + e.message));
};

window.emailLogin = function() {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("pass").value;
  if(!email || !pass) return alert("Fill in all fields");

  signInWithEmailAndPassword(auth, email, pass).then(() => {
    window.location.href = "index.html"; // Change to your chat page
  }).catch(e => alert("Access Denied: " + e.message));
};

window.emailSignup = function() {
  const name  = document.getElementById("name").value;
  const email = document.getElementById("email2").value;
  const pass  = document.getElementById("pass2").value;
  if(!name || !email || !pass) return alert("Fill in all fields");

  createUserWithEmailAndPassword(auth, email, pass).then((userCred) => {
    updateProfile(userCred.user, { displayName: name }).then(() => {
      window.location.href = "index.html"; // Change to your chat page
    });
  }).catch(e => alert("Registration Failed: " + e.message));
};
