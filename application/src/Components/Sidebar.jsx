import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {  //Importing Icons from Requires
  PiEngineThin,TbApi,SiReadthedocs,GiPayMoney,GiHelp,VscRunAll,AiFillSetting
} from './../Requires'

export const Sidebar = () => {
  const loc = useLocation()
  return (
    <div className="bg-gray-200 text-gray-400 text-xl px-2 h-full">
      <ul className="p-4">
        <li><Link to='/' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/' ? 'text-black' : 'none'} hover:text-black`}><VscRunAll/><p>Trainer</p></Link></li>
        <li><Link to='/models' className={`flex items-center gap-2 pb-5 ${loc.pathname === '/models' ? 'text-black' : 'none'} hover:text-black`}><PiEngineThin/><p>Models</p></Link></li>
        <li><Link to='/api' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/api' ? 'text-black' : 'none'} hover:text-black`}><TbApi/><p>API's</p></Link></li>
        <li><Link to='/docs' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/docs' ? 'text-black' : 'none'} hover:text-black`}><SiReadthedocs/><p>Docs</p></Link></li>
        <li><Link to='/contribute' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/contribute' ? 'text-black' : 'none'} hover:text-black`}><GiPayMoney/><p>Contibute</p></Link></li>
        <li><Link to='/help' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/help' ? 'text-black' : 'none'} hover:text-black`}><GiHelp/><p>Help</p></Link></li>
      </ul>
      <ul className='p-4'>
        <li><Link to='/settings' className={`flex items-center gap-2 pb-5 ${loc.pathname == '/settings' ? 'text-black' : 'none'} hover:text-black`}><AiFillSetting size={24}/>Settings</Link></li>
      </ul>
    </div>
  )
}
