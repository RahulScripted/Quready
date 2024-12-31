import React from 'react'
import { whyChooseData } from '../../assets/asset'

const WhyUs = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>

        {/* Top Part */}
        <h1 className='text-2xl text-center md:text-5xl font-bold md:font-semibold'> 
            <span className='bg-gradient-to-b from-black to-gray-400 text-transparent bg-clip-text'>Why choose Us?</span> 
            🤔
        </h1>

        {/* Bottom Part */}
        <div className='flex flex-wrap items-center justify-center gap-10'>
            {whyChooseData.map((item,index) => (
                <div key={index} className='w-[250px] min-h-[225px] border border-double shadow-md flex flex-col items-center justify-center px-5 rounded-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl Custom group'>
                    
                    {/* Image Section */}
                    <div className='w-[80px] h-[80px] border-[3px] border-indigo-500 rounded-full object-cover flex items-center justify-center p-5 mb-5 group-hover:border-white group-hover:bg-gray-900'>
                        <img src={item.image} alt="image" className='w-full' />
                    </div>


                    {/* Title Section */}
                    <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>

                    {/* Paragraph Section */}
                    <p className='text-sm text-center group-hover:text-white'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyUs