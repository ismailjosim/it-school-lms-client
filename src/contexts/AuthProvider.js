import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



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


    // user sign out function
    const userLogOut = () => {
        return signOut(auth)
    }

    // Monitor User changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        }
    }, [])


    // Update Profile
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }



    // All auth info
    const authInfo = {
        user,
        userSignIn,
        UserSignUP,
        googleProviderLogin,
        githubProviderLogin,
        userLogOut,
        updateUserProfile,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
