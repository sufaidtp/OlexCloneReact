import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDMnovKAU9YyDiSy4RKBpv7SQmICAOFZ_I",
  authDomain: "olx-clone-a9518.firebaseapp.com",
  projectId: "olx-clone-a9518",
  storageBucket: "olx-clone-a9518.appspot.com",
  messagingSenderId: "647970707429",
  appId: "1:647970707429:web:63a87460251ac93aff010c"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);