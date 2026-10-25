// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4vQAC4-9A1BiQfChjpkx5cPN4B0aLUhI",
  authDomain: "pagina-de-vendas-acusa.firebaseapp.com",
  projectId: "pagina-de-vendas-acusa",
  storageBucket: "pagina-de-vendas-acusa.firebasestorage.app",
  messagingSenderId: "609007404881",
  appId: "1:609007404881:web:3d2d77d25383bdce9c7570",
  measurementId: "G-H01FE54276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Analytics only works in the browser
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics, db };
