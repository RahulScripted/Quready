import React from 'react'
import { motion } from 'framer-motion'
import asset from '../../assets/asset'

const Header = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div 
      className='flex flex-col-reverse items-center justify-center gap-10 md:gap-28 md:flex-row md:items-center md:justify-between'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

      {/* Left Part */}
      <motion.div 
        className='flex flex-col'
        variants={textVariants}
      >

        {/* Title */}
        <motion.h1 
          className='text-2xl md:text-4xl font-bold'
          variants={textVariants}
        >
            Essential Interview Questions You Should Master to Excel in Your Interview
        </motion.h1>

        {/* Paragraph */}
        <motion.p 
          className='text-sm mt-5'
          variants={textVariants}
        >
          Our web application provides a comprehensive collection of the top <b>Data Structures and Algorithms (DSA)</b> questions designed to help you master the core concepts and excel in coding interviews. Whether you're a beginner or preparing for advanced-level interviews, our platform offers a wide range of problems covering key topics such as arrays, linked lists, stacks, queues, trees, graphs, dynamic programming, and more. Each question is carefully selected to challenge your problem-solving skills and improve your understanding of algorithmic techniques.
        </motion.p>
      </motion.div>

      {/* Right Part */}
      <motion.img 
        className='w-[350px]' 
        src={asset.header} 
        alt="header" 
        variants={imageVariants}
      />
    </motion.div>
  )
}

export default Header