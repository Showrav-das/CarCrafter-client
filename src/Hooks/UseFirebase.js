import React from 'react';
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,updateProfile} from "firebase/auth";
import firebaseAuthentication from '../Pages/Login/Firebase/Firebase.init';


firebaseAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    
    const auth = getAuth();

    const registerFirebase = (email,password,name,history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email,name);
                updateProfile(auth.currentUser, {
                    displayName: name }).then(() => {
                    
                  }).catch((error) => {
                      authError(error.message);
                  });
                  history.replace('/');
                
            })
            .catch((error) => {
                setAuthError(error.message);

                // ..
            })
            .finally(() =>setLoading(false))
            ;
    }


    const logInUser = (email, password,location,history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from || '/home';
                history.replace(destination);

            })
            .catch((error) => {
                setAuthError(error.message);
                
            })
            .finally(() =>setLoading(false));

    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);   
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    },[])

    // admin check
    useEffect(() => {
        fetch(`https://car-rental-server-site-production.up.railway.app/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.admin);
                setAdmin(data.admin);
       }) 
    },[user.email])
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
           
        })
        .finally(() =>setLoading(false));
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://car-rental-server-site-production.up.railway.app/users', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    console.log(user);

    return {
        user, registerFirebase, logOut,logInUser,loading,authError,admin
    }
};

export default UseFirebase;