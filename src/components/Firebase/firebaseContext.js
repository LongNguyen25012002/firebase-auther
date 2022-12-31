import { createContext, useContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInWithRedirect,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const FirebaseContext = createContext();

const AuthContextProvider = ({ children, value = 'a' }) => {


    const [userCurrent, setUserCurrent] = useState({});
    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        // signInWithRedirect(auth,provider);
        signInWithPopup(auth,provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,userCurrent => {
            console.log(userCurrent);
            setUserCurrent(userCurrent);
        })
        return () => {
            unsubscribe();
        }
    },[]);

    const logOut = () => {
        signOut(auth);
    };

    return (
        <FirebaseContext.Provider
            value={{ value, userCurrent, setUserCurrent, googleSingIn, logOut }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

const UseAuthContext = () => {
    return useContext(FirebaseContext);
};

export { AuthContextProvider, UseAuthContext };
