import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyArsC8qnZN6W1C8cwvPg0T90kJ3Xv5DV6I",
    authDomain: "financefy-9d40e.firebaseapp.com",
    databaseURL: "https://financefy-9d40e-default-rtdb.firebaseio.com",
    projectId: "financefy-9d40e",
    storageBucket: "financefy-9d40e.appspot.com",
    messagingSenderId: "1068478270586",
    appId: "1:1068478270586:web:e0d700e041cbc8e659bfc3",
    measurementId: "G-P3BDDZX035"
};

const app = initializeApp(firebaseConfig)

export default app;