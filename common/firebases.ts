import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase設定情報
const firebaseConfig = {
    apiKey: "AIzaSyCC1hW6x2Ca2oTkLz0FTmPp0o6CirDc9E",
    authDomain: "collecture-1fff3.firebaseapp.com",
    projectId: "collecture-1fff3",
    storageBucket: "collecture-1fff3.appspot.com",
    messagingSenderId: "435359969200",
    appId: "1:435359969200:web:a80ae05878d6a5051b7075",
    measurementId: "G-N66WB2G689"
  };

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
