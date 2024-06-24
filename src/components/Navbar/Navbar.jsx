import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-no-background.svg'
import CartMenu from './../Cart/CartMenu'
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (sidebarOpen == false) {
      document.body.style = "overflow:hidden"
    } else {
      document.body.style = "overflow:auto"
    }
  };

  return (
    <div>
      <nav className='bg-dark-bg fixed top-0 left-0 w-full z-10 text-text-yellow grid grid-cols-3 gap-4 items-center'>

        <ul className='flex flex-wrap list-none text-m lg:hidden sm:hidden md:hidden'>
          <Link to='/'>
            <li className='navlink navlink-home py-2 px-xl hover:text-hover-white'>Home</li>
          </Link>

          <Link to='/shop'>
            <li className='navlink navlink-shop py-2 px-l hover:text-hover-white'>Shop</li>
          </Link>
          <Link to='/ourstory'>
            <li className='navlink navlink-story py-2 px-l hover:text-hover-white'>Our Story</li>
          </Link>
          <Link to='/faqs'>

            <li className='navlink navlink-faqs py-2 px-l hover:text-hover-white'>FAQs</li>
          </Link>
          <Link to='/howtouse'>
            <li className='navlink navlink-how-to-use py-2 px-xl hover:text-hover-white'>How to Use</li>
          </Link>
        </ul>
        <ul className='hidden flex-col ms-xl flex-wrap list-none lg:flex md:flex sm:flex' onClick={toggleSidebar}>
          <div className='sidebar-1 mb-1 w-6 h-1 rounded-xl bg-text-yellow'></div>
          <div className='sidebar-2 mb-1 w-6 h-1 rounded-xl bg-text-yellow'></div>
          <div className='sidebar-3 mb-1 w-6 h-1 rounded-xl bg-text-yellow'></div>
        </ul>



        <div className='logo flex justify-center'>
          <img src={logo} className='w-16 h-16' alt="logo" />
        </div>

        <div className='flex justify-end'>
          <div className='search pe-xl'><Search /></div>
          {/* <div className='account hover:text-hover-white pe-xl'><Account /></div> */}
          <div className='cart pe-xl'>
            <CartMenu />
          </div>
        </div>
      </nav>
      {/* <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${sidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div> */}

      <div className={`fixed top-0 left-0 h-full bg-white text-text-dark md:w-10/12 w-6/12 p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-30 sm:w-10/12`}>
        <div className='flex justify-between items-center mb-4'>
          <img src={logo} className='w-32 h-32' alt="logo" />
          <button onClick={toggleSidebar} className='text-2xl'>&#10005;</button> {/* Close icon */}
        </div>
        <ul className='flex flex-col list-none'>
          <Link to='/'>
            <li className='navlink navlink-home py-2'>Home</li>
          </Link>

          <Link to='/shop'>
            <li className='navlink navlink-shop py-2'>Shop</li>
          </Link>
          <Link to='/ourstory'>
            <li className='navlink navlink-story py-2'>Our Story</li>
          </Link>
          <Link to='/faqs'>

            <li className='navlink navlink-faqs py-2'>FAQs</li>
          </Link>
          <Link to='/howtouse'>
            <li className='navlink navlink-how-to-use py-2'>How to Use</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar