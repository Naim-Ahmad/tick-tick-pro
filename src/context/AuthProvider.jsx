import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import axiosPublic from '../config/axios.config.js';
import auth from '../config/firebase.config.js';

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  const signUpWithEmail = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserInfo = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL
    })
  }

  const signInWithEmail = (email, password)=> {
    // console.log(email, password)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const loginWithGithub = () => {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        axiosPublic.post('/createToken', {email: currentUser.email})
        .then(res=> console.log(res.data))
        setUser(currentUser)
      }else{
        axiosPublic.delete('/deleteToken')
        .then(res=> console.log(res.data))
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    isLoading,
    signUpWithEmail,
    loginWithGoogle,
    updateUserInfo,
    loginWithGithub,
    signInWithEmail,
    logout
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

}