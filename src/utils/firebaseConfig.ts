import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQc80KbX-u2HT1fuKz2nzlO8EghPFzPoQ",
  authDomain: "zoom-clone-3a9c9.firebaseapp.com",
  projectId: "zoom-clone-3a9c9",
  storageBucket: "zoom-clone-3a9c9.appspot.com",
  messagingSenderId: "712934085742",
  appId: "1:712934085742:web:ac944754229bb3b4af827f",
  measurementId: "G-FZ6NTJE1VM"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
