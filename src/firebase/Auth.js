import { getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();
export function UserSignIn(email, password){
    return signInWithEmailAndPassword (auth, email, password)
}

export function AuthListener(callback){
    return onAuthStateChanged(auth, callback)
}

export function SignOut() {
    return signOut(auth)
}