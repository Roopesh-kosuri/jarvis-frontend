import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// ⚠️ PASTE YOUR FIREBASE CONFIG HERE (Same one you used in auth.js) ⚠️
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

// The Bouncer: Checks if the user is verified
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If no user is logged in, kick them to the login screen!
    window.location.href = "login.html";
  } else {
    console.log("Operator verified. Access granted.");
  }
});
