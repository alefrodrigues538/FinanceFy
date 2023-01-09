import * as React from "react";
import { View, Button } from "react-native";

import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Faça a configuração inicial do Firebase aqui

const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = async () => {
    const auth = getAuth()
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (error) {
        console.error(error);
    }
};

const ButtonSignInWithGoogle = () => (
    <View>
        <Button title="Sign in with Google" onPress={handleGoogleSignIn} />
    </View>
);

export default ButtonSignInWithGoogle;