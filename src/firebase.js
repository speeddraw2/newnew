import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDvOBZYIWHZo-1hI1RdwV8nncj465Ydw4M",
  authDomain: "merr-bf5d6.firebaseapp.com",
  projectId: "merr-bf5d6",
  storageBucket: "merr-bf5d6.appspot.com",
  messagingSenderId: "898443974844",
  appId: "1:898443974844:web:ee726dee617d6e370d98b9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);