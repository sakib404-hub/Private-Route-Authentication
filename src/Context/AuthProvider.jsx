import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {
        //setting the observer  | Set The Observer
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('Inside the Observer : ', currentUser)
                setUser(currentUser);
                setLoading(false);
            }
            else {
                console.log('No User Logged in!');
                setUser(null);
            }
        })
        //clearing the observer | UnMount the observer
        return () => {
            unSubscribe();
        }
    }, [])

    // For Managing the user 
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log('Inside The Observer : if', user);
    //     }
    //     else {
    //         console.log('Inside The Observer: if', user);
    //     }
    // })

    const authInfo = {
        createUser,
        signIn,
        user,
        signOutUser,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;