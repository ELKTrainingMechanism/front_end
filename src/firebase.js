import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNrgubiuR3fJkOHBoIw3fxFht_HRhNft0",
  authDomain: "test-stuff-16ede.firebaseapp.com",
  projectId: "test-stuff-16ede",
  storageBucket: "test-stuff-16ede.appspot.com",
  messagingSenderId: "497385719408",
  appId: "1:497385719408:web:b1d57a7572ae5e6fd056b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;