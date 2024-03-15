import React, { useState } from 'react'
import { navItems } from '../constants'
const Navbar = () => {
  const [menuicon,setMenuIcon]=useState(false);

  const toggleN=()=>{
    setMenuIcon(!menuicon);
  }
  return (
    <div>
      <nav className="sticky  top-0 z-50 py-3 backdrop-blur-lg border-b  border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
               {/* <h1 className='h-10 w-10 mr-2 bg-red-500'>Journalis</h1>  */}
               <span className=" text-4xl tracking-tight">Journalism Unveiled</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item,index)=>(
                <li className='text-xl' key={index}>
                    <a href='item.href'>{item.label}</a>
                </li>
        ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href='#' className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Sign Up</a>
                </div>
                {/* <div className="lg:hidden md:flex flex-col justify-end">
                  <button onClick={toggleN}>
                    {menuicon?<X/>:Menu}
                    </button>
                </div> */}
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
