
import React, { useContext } from 'react';


export const AuthContext = React.createContext()


export const UserAuth = () => {
  return useContext(AuthContext)
}
