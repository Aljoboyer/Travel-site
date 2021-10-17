import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';
const InitializationFirebaseApp = () => {
    return initializeApp(firebaseConfig)
}

export default InitializationFirebaseApp;