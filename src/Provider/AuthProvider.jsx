import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});


    // // Registration
    // const createUser = (email, password, photo) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password, photo);
    // };
    
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log('error', error.message);
            })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            console.log(loggedUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        registerUser,
        user,
        logOut,
        loginUser,
        setUser,
        handleGoogleSignIn
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
