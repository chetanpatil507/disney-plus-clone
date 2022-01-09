import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt0dcdGb2Y8NyBktrY9YQUry7QrlRDL80",
  authDomain: "disney-plus-clone-b5cfd.firebaseapp.com",
  projectId: "disney-plus-clone-b5cfd",
  storageBucket: "disney-plus-clone-b5cfd.appspot.com",
  messagingSenderId: "634627903289",
  appId: "1:634627903289:web:d3a0468369a346361ce2e8",
  measurementId: "G-H8V332TZR0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
