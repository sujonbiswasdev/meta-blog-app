import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Search from './Search'
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen,setisMenuOpen]=useState(false);
    const toggleMobileMenu=()=>{
        setisMenuOpen(!isMenuOpen);
    }

    // TODO
    const [isDarkMode,setisDarkMode]= useState(false);
    const toggleDarkMode=()=>setisDarkMode(!isDarkMode)
  return (
    <nav className='bg-white shadow-md'>
        {/* desktop menu and mobile menu */}
        <div className='container mx-auto px-4 py-3 max-w-7xl flex justify-between items-center gap-4'>
            {/* logo */}
            <div>
                <a href="/">
                <img src="/mostofa.png" alt="logo" className='h-14' />
                </a>
            </div>
            {/* menu items */}
            <ul className='md:flex hidden space-x-8 text-gray-700 font-medium'>
                <li>
                    <NavLink to={'/'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Home</NavLink>
                </li>

                 <li>
                    <NavLink to={'/blogs'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Blogs</NavLink>
                </li>
                 <li>
                    <NavLink to={'/about'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>About</NavLink>
                </li>
                 <li>
                    <NavLink to={'/contact'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Contact</NavLink>
                </li>
            </ul>
            {/* search and color toggle */}
            <div className='md:flex hidden items-center space-x-4'>
                <div>
                    <Search/>
                </div>
                {/* color swichcer */}
                <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode?'justify-end':'justify-start'}`}>
                   <button onClick={toggleDarkMode} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300'>
                     {
                        isDarkMode?<FaMoon className='text-gray-500 ' />:<FaSun className='text-yellow-500' />
                    }
                   </button>
                </div>

            </div>

            {/* mobile menu bar */}
            <div className='md:hidden block'>
                <button onClick={toggleMobileMenu}>
                    {
                        isMenuOpen?<IoMdCloseCircle /> :<FaBarsStaggered/>
                    }
                </button>
            </div>
        </div>
        {/* mobile menu item */}
      
            {
                isMenuOpen && <div className='md:hidden bg-white shadow-md'>
                    <ul className='flex flex-col items-center space-y-4 text-gray-700 py-4'>
                         <li onClick={toggleMobileMenu}>
                    <NavLink to={'/'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Home</NavLink>
                </li>

                 <li onClick={toggleMobileMenu}>
                    <NavLink to={'/blogs'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Blogs</NavLink>
                </li>
                 <li onClick={toggleMobileMenu}>
                    <NavLink to={'/about'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>About</NavLink>
                </li>
                 <li onClick={toggleMobileMenu}>
                    <NavLink to={'/contact'} className={({ isActive }) =>isActive? "text-purple-700 hover:text-purple-500":""}>Contact</NavLink>
                </li>
             <Search/>
                    </ul>
                   
                </div>
            }
            
      
    </nav>
  )
}

export default Navbar