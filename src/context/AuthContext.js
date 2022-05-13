
import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => setCurrentUser)
    }, [])
  return (
      <AuthContext.Provider value={{currentUser}}>
        {children}
      </AuthContext.Provider>
  )
}
