import React from 'react'
import asset from '../../assets/asset'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mb-8'>
        
        {/* Logo Image */}
        <Link to='/'>
          <img src={asset.logo} alt="logo" className='w-20' />
        </Link>

        {/* Contact */}
        <Link to='/contact' className='text-[1rem] cursor-pointer'>Contact</Link>
    </div>
  )
}

export default Navbar