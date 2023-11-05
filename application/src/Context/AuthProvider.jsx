import React, { createContext, useState } from 'react'
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [IsLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <AuthContext.Provider value={{ IsLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
