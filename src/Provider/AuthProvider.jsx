import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase_config'
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

// Provider
const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)


    // create User
    const signUpWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with Email and password
    const SignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // signOut
    const LogOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // signInWithGoogle
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // signInWithGithub
    const signInWithGithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    // on authstate change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [])

    const userInfo = {
        user,
        loading,
        signUpWithEmailPassword,
        SignIn,
        LogOut,
        signInWithGoogle,
        signInWithGithub

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;