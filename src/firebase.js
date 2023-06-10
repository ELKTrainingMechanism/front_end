import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCNrgubiuR3fJkOHBoIw3fxFht_HRhNft0",
  // authDomain: "test-stuff-16ede.firebaseapp.com",
  // projectId: "test-stuff-16ede",
  // storageBucket: "test-stuff-16ede.appspot.com",
  // messagingSenderId: "497385719408",
  // appId: "1:497385719408:web:b1d57a7572ae5e6fd056b5"
  apiKey: "AIzaSyDaGG3jS57YXhBq0Cj3AGPmBzJ5jft-h5Q",
  authDomain: "elktrainingmechanism-e32d6.firebaseapp.com",
  projectId: "elktrainingmechanism-e32d6",
  storageBucket: "elktrainingmechanism-e32d6.appspot.com",
  messagingSenderId: "809866813629",
  appId: "1:809866813629:web:7de1c953a822506ce857d4",
  measurementId: "G-HVR7VVD49Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;