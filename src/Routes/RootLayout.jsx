import React from 'react'
import MainNavigate from '../components/MainNavigate'
import { Outlet } from 'react-router-dom'

function RootLayout() {


  return (
    <div>
       <div className=" w-full h-100 flex flex-row overflow-hidden  ">
        <div className="  flex h-screen items-center p-4 ">
          <div className='fixed'>
        <MainNavigate />
        </div>
        </div>
        <div className="w-full">
          
          <Outlet />
        </div>
        </div>
    </div>
  )
}

export default RootLayout