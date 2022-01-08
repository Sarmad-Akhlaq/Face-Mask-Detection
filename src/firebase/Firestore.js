import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAz1UiqMidSfwIujPO8CM1ekFG03PiXTq8",
    authDomain: "face-mask-detection-5f140.firebaseapp.com",
    databaseURL: "https://face-mask-detection-5f140-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "face-mask-detection-5f140",
    storageBucket: "face-mask-detection-5f140.appspot.com",
    messagingSenderId: "451720765264",
    appId: "1:451720765264:web:46fbf69a9e2a7ff7451655"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

