import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='fixed w-full top-0 right-0 left-0 z-50' >
        <div className='' >
        <div className='flex items-center justify-between'>
            <Link to="/" className='font-bold text-lg '>
                <img src={logo} alt="Logo" />
            </Link>
            <Link to="/component" className='text-blue-500 bg-red-700' >Component</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar