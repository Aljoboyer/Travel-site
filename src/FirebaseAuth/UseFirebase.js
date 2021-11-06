import InitializationFirebaseApp from '../Firebasesetup/Firebaseinit';
import {updateProfile,sendPasswordResetEmail, getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from 'react';


InitializationFirebaseApp();

const UseFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user,setUser] = useState({});
    const [isloading, setIsLoading] = useState(true);
    const [userprofile,setUserprofile] = useState({});
    

    const auth = getAuth();
//google sign in
    const GoogleSignin = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleprovider)
        .then((result) => {
              const user = result.user;
              }).finally(() => setIsLoading(false))
    }
//Log out
    const LogOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).finally(() => setIsLoading(false))
    }
//Sign in with email and Password 
    const RegisteringUser = (email,password,name,url) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password,name,url)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            UpdatingUserinfo(name,url)
        })
        .finally(() => setIsLoading(false))
    }
    //user display name and photo url 
   const UpdatingUserinfo = (name,url) => {
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: url
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
   }
//Login with email and password 
     const LoginWithEmailandPassword =  (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user
          setUser(user)
        }).catch((error) => {

        })
        .finally(() => {
            setIsLoading(false)
        })
     }
//currently sign in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            const uid = user.uid;
            setUser(user)
            console.log(user,'from useeffect')
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
    },[])
    //reset Password 
    const ResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {

            });
    }

  
    return{
        GoogleSignin,
        user,
        RegisteringUser,
        LoginWithEmailandPassword,
        LogOut,
        isloading,
        ResetPassword,
        UpdatingUserinfo,
        
    }

}

export default UseFirebase;