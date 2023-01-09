import React from 'react'

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
    }
}

export default Auth