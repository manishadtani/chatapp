import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie';
export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
const initialUserState = Cookies.get('jwt') || localStorage.getItem("chatty");

    //parse the user data and storing in state
    const [authUser, setAuthuser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined);
  return (
    <AuthContext.Provider value={[authUser, setAuthuser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext) 