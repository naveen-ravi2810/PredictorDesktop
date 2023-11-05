import React from 'react'
import {
    Models,
    Train,
    Api,
    Contribute,
    Docs,
    Help,
    Settings,
    Login
  } from './../Pages'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
       <Route path="/">
        <Route path="/" Component={Train}/>
        <Route path="/models" Component={Models}/>
        <Route path="/api" Component={Api}/>
        <Route path="/contribute" Component={Contribute}/>
        <Route path='/help' Component={Help}/>
        <Route path="/docs" Component={Docs}/>
        <Route path="/settings" Component={Settings}/>
        <Route path="/login" Component={Login}/>
       </Route>
    </Routes>
  )
}
