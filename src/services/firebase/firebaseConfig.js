import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Verifica que la configuración sea la correcta
const firebaseConfig = {
  apiKey: "AIzaSyBMMS8F6ofwYifO0YBfDqf2cKXYXN_k2rE",
  authDomain: "reactnavegalasrutas.firebaseapp.com",
  projectId: "reactnavegalasrutas",
  storageBucket: "reactnavegalasrutas.firebasestorage.app", // ¿Es correcto este valor?
  messagingSenderId: "350490883346",
  appId: "1:350490883346:web:9db6b38f86fd0329dc6fcb",
  measurementId: "G-24T0XKLMXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);