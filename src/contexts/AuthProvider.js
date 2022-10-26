import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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

    // sign in with google
    const googleProviderLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    // sign in with github
    const githubProviderLogin = provider => {
        return signInWithPopup(auth, provider)
    }





    // All auth info
    const authInfo = {
        user,
        userSignIn,
        UserSignUP,
        googleProviderLogin,
        githubProviderLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
