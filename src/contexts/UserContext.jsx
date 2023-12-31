
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)


  // // for create a new user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //   // for login a user 
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser)
  }

// reset password 
const ResetPassword=(email)=>{
  return sendPasswordResetEmail(auth, email);
}

  const LogOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser)
       
      }
      setLoading(false)


    })
    return () => {
      unsubscribe();
    }

  }, [])
  const AuthInfo = { user, LogOut, createUser, signIn, loading, emailVerify,ResetPassword }



  return (
    <AuthContext.Provider value={AuthInfo}>

      {children}
    </AuthContext.Provider>
  )
}

export default UserContext