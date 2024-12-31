import React from 'react'
import asset from '../../assets/asset'

const Header = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-center gap-10 md:gap-28 md:flex-row md:items-center md:justify-between'>

      {/* Left Part */}
      <div className='flex flex-col'>

        {/* Title */}
        <h1 className='text-2xl md:text-4xl font-bold'>Essential Interview Questions You Should Master to Excel in Your Interview</h1>

        {/* Paragraph */}
        <p className='text-sm mt-5'>Our web application provides a comprehensive collection of the top <b>Data Structures and Algorithms (DSA)</b> questions designed to help you master the core concepts and excel in coding interviews. Whether you're a beginner or preparing for advanced-level interviews, our platform offers a wide range of problems covering key topics such as arrays, linked lists, stacks, queues, trees, graphs, dynamic programming, and more. Each question is carefully selected to challenge your problem-solving skills and improve your understanding of algorithmic techniques.</p>
      </div>

      {/* Right Part */}
      <img className='w-[350px]' src={asset.header} alt="header" />
    </div>
  )
}

export default Header