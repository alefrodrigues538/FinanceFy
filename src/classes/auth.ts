import firebase from '../config/firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import "firebase/auth"

class Auth {
    email: string;
    password: string;
    phone: string;

    constructor(email: string, password: string, phone: string) {
        this.email = email,
            this.password = password,
            this.phone = phone
    }

    static async signInWithEmailAndPassword(email: string, password: string) {

    }

    static async signInWithGoogle() {

        const auth = getAuth()
        const googleProvider = new GoogleAuthProvider();

        try {

            const result = await signInWithPopup(auth, googleProvider);

            console.log(result);


            return result;
        } catch (error) {

            return error;

        }
    }
}

export default Auth