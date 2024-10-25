
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXNVcp2r6a5UnG0APOeswM84CMZRhdoOM",
  authDomain: "ecommerce-a929f.firebaseapp.com",
  projectId: "ecommerce-a929f",
  storageBucket: "ecommerce-a929f.appspot.com",
  messagingSenderId: "673023945822",
  appId: "1:673023945822:web:fac6955284faa2bea618cf",
  measurementId: "G-ES5P18FS67"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firestore
const db = getFirestore(app);

// Exportar la instancia de Firestore
export { db };
