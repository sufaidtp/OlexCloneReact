import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYtEukMxs05IIUQhMD3UZlIe35ICJI9Ac",
  authDomain: "olx-clone-d14a9.firebaseapp.com",
  projectId: "olx-clone-d14a9",
  storageBucket: "olx-clone-d14a9.firebasestorage.app",
  messagingSenderId: "518803127290",
  appId: "1:518803127290:web:a01d4269dfa54cff698243"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);