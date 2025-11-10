//   measurementId: "G-9VZT0N3BGZ"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJCWtVuOk9Yxnt9P2W08Yryph9MsH_KQM",
  authDomain: "farmer-buyer-app.firebaseapp.com",
  projectId: "farmer-buyer-app",
  storageBucket: "farmer-buyer-app.firebasestorage.app",
  messagingSenderId: "181302312529",
  appId: "1:181302312529:web:50fda68676e3cecc514270",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
