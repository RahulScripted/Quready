import React from 'react'
import { whyChooseData } from '../../assets/asset'
import { motion, useInView } from 'framer-motion'
import { Tangent, TrophyIcon, } from 'lucide-react'
import { useRef } from 'react'

const WhyUs = () => {
  const topRef = useRef(null)
  const bottomRef = useRef(null)

  const isTopView = useInView(topRef,{ threshold: 0.2, once: true })
  const isBottomView = useInView(bottomRef,{ threshold: 0.2, once: true })

  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div  className='flex flex-col items-center justify-center gap-10' >

        {/* Top Part */}
        <motion.div 
            className='flex items-center justify-center space-x-4'
            ref={topRef}
            initial="hidden"
            animate={isTopView ? "visible" : "hidden"}
            variants={itemVariants}
        >
            <TrophyIcon className='w-6 h-6 md:w-8 md:h-8 text-indigo-600' />
            <h1 className='text-2xl text-center md:text-5xl font-bold md:font-semibold bg-gradient-to-b from-black to-gray-400 text-transparent bg-clip-text h-auto md:h-[55px]'>Why choose Us </h1>
            <Tangent className='w-6 h-6 md:w-8 md:h-8 text-indigo-600' />
        </motion.div>

        {/* Bottom Part */}
        <motion.div 
            ref={bottomRef}
            className="flex flex-wrap items-center justify-center gap-10"
            initial="hidden"
            animate={isBottomView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
        >
            {whyChooseData.map((item,index) => (
                <motion.div 
                    key={index} 
                    className='w-[250px] min-h-[225px] border border-double shadow-md flex flex-col items-center justify-center px-5 rounded-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl Custom group'
                    variants={itemVariants}
                >
                    
                    {/* Image Section */}
                    <div className='w-[80px] h-[80px] border-[3px] border-indigo-500 rounded-full object-cover flex items-center justify-center p-5 mb-5 group-hover:border-white group-hover:bg-gray-900'>
                        <img src={item.image} alt="image" className='w-full' />
                    </div>


                    {/* Title Section */}
                    <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>

                    {/* Paragraph Section */}
                    <p className='text-sm text-center group-hover:text-white'>{item.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default WhyUs