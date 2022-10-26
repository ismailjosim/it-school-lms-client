import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);


    // Create User With Email & password
    const UserSignUP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // user login with email and password
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }




    // All auth info
    const authInfo = {
        user,
        userSignIn,
        UserSignUP
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
