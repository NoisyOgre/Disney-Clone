import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmxAKaW9T3eBStE_9JVlimJ3BmlGK2900",
  authDomain: "disney-clone-30806.firebaseapp.com",
  projectId: "disney-clone-30806",
  storageBucket: "disney-clone-30806.appspot.com",
  messagingSenderId: "705319353578",
  appId: "1:705319353578:web:293b67755a89e50cd36b93"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;