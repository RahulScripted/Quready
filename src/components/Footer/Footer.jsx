import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-1 md:gap-5 text-sm md:text-[1rem] mt-10'>
        <p>&copy; Copyrights 2025</p>
        <p className='md:border-l-[1.5px] border-gray-700 px-5 flex gap-1.5'>
          Made By 
          <a href="https://portfolio-git-main-rahul-goswamis-projects-c6755eb5.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-indigo-600 font-semibold'>Rahul Goswami</a>
        </p>
    </div>
  )
}

export default Footer