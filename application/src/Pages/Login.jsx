import React from 'react'
import { useAuth } from '../Hooks/useAuth'
export const Login = () => {
    const auth = useAuth()
  return (
    <div>
        <h1>Login</h1>
        <button onClick={()=>auth.setIsLoggedIn(!auth.IsLoggedIn)}>Ok</button>
    </div>
  )
}
