import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='fixed w-full top-0 right-0 left-0 z-50' >
        <div className='' >
        <div className='flex items-center justify-between'>
            <Link to="/" className='font-bold text-lg ' >Home</Link>
            <Link to="/component" >Com</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar