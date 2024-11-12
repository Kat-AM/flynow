// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAA4zvbTTJiepIScYsNFnm0Wmy1e4ZzbL0",
  authDomain: "flynow-6ebe2.firebaseapp.com",
  projectId: "flynow-6ebe2",
  storageBucket: "flynow-6ebe2.firebasestorage.app",
  messagingSenderId: "261119097663",
  appId: "1:261119097663:web:c25a5582e98690f906b18a",
  measurementId: "G-LM54L03HEC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inicializamos la autenticación

// Inicializar el proveedor de Google
const googleAuthProvider = new GoogleAuthProvider();

// Exportar la instancia de autenticación y el proveedor de Google
export { auth, googleAuthProvider };
