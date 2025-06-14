// Include the Firebase SDK scripts here. You can use CDN links or download them.
// For example, if you are using individual SDK scripts:
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>

// TODO: Replace with your actual Firebase project configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBvar4TdRjJjFrMZcGavYZXb5Y8vVHwy34",
    authDomain: "apollowebsite-29163.firebaseapp.com",
    projectId: "apollowebsite-29163",
    storageBucket: "apollowebsite-29163.firebasestorage.app",
    messagingSenderId: "207941907137",
    appId: "1:207941907137:web:776146c19d13ae46cd1a40",
    measurementId: "G-DJ4G0H2CMT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Firebase services available
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// You can also make them available on the window object if needed
// window.auth = auth;
// window.db = db;
// window.storage = storage;

console.log("Firebase initialized successfully with placeholder config.");
// Note: For this to work, you must include the Firebase SDKs in your HTML files
// BEFORE this script. For example:
/*
  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>

  <!-- Add SDKs for Firebase products that you want to use -->
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>

  <script src="frontend/scripts/firebase-config.js"></script>
*/