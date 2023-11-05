import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'
import {CgProfile,AiFillSetting} from './../Requires'

export const Navbar = () => {
  const [SearchValue, setSearchValue] = useState('')
  const [ProfileOption, setProfileOption] = useState(false)
  const auth = useAuth()
  return (
    <div className='flex justify-between px-2 py-3 bg-orange-500 fixed top-0 w-full'>

      <div id="logo">
        <p>LOGO</p>
      </div>

      <div id="SearchBar">
        <input type="text" placeholder='Search for Models' onChange={(e)=>setSearchValue(e.target.value)}/>
        <button><Link to={`/search/${SearchValue}`}>Search</Link></button>
      </div>

      <div id="account" className='flex items-center gap-3'>
        { auth.IsLoggedIn ? 
          <div>
          <button onClick={()=>setProfileOption(!ProfileOption)}><CgProfile size={19}/></button>
          {
            ProfileOption && 
              <ul className='absolute border-2 bg-white px-4 right-4'>
              <li>Account</li>
              <li><button onClick={()=>auth.setIsLoggedIn(false)}>Signout</button></li>
              </ul>
          }
          </div> 
          :
          <div>
            <Link to='/login'><button className='border-black border-[1px] px-2 rounded-xl hover:bg-white '>Sign In</button></Link>
          </div>
           } 
      </div>
    </div>
  )
}
