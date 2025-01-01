import React from 'react'
import asset from '../../assets/asset'
import {Link} from 'react-router-dom'
import { easeInOut, motion } from 'framer-motion'

const Navbar = () => {
  // Animation variants for the logo
  const logoVariants = {
    initial: { opacity: 0, y : -50, scale: 0.8 },
    animate: { opacity: 1,y : 0, scale: 1 },
  };

  // Animation variants for the contact link
  const contactVariants = {
    initial: { opacity: 0, y : -50 },
    animate: { opacity: 1, y : 0 },
    whileHover: { scale: 1.1 },
  };

  return (
    <motion.div className='flex items-center justify-between mb-8'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
    >
        
        {/* Logo Image */}
        <Link to='/'>
          <motion.img 
            src={asset.logo} 
            alt="logo" 
            className='w-20'
            variants={logoVariants}
            initial="initial"
            animate="animate"
            transition={{duration:0.6,ease:easeInOut}}
          />
        </Link>

        {/* Contact */}
        <Link to='/contact' className='text-xl cursor-pointer'>
          <motion.span
            variants={contactVariants}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            transition={{duration:0.4,ease:"easeOut"}}
          >
            Contact
          </motion.span>
        </Link>
    </motion.div>
  )
}

export default Navbar