import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebases';
import { getStorage } from "firebase/storage";

const InitializationFirebaseApp = () => {
   return initializeApp(firebaseConfig)

}
export default InitializationFirebaseApp;