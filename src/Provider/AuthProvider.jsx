import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();

    console.log(user, loading);


    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        // navigate("/");
        return signOut(auth);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const updateUserProfile = (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
    }
    const forgotPass = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }
    

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      loading,
      setLoading,
      updateUser,
      signInWithGoogle,
      forgotPass,
      updateUserProfile,
    };
    return (<AuthContext value={authData}>{children}</AuthContext>);
};

export default AuthProvider;