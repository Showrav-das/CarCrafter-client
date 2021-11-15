import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confid";


const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthentication;