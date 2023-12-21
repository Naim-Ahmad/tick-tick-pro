import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
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
      setUser(currentUser)
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
    logout
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

}