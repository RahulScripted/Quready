import React, { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react'
import { TipsTricksData } from '../../assets/asset'
import { motion } from 'framer-motion'

const TipsTricks = () => {
  const [expandSection,setExpandSection] = useState(null)

  const toggleSection = (index) => {
    setExpandSection(expandSection === index ? null : index)
  } 

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8 py-6 w-full flex items-center justify-center gap-10 flex-col'>

        {/* Header Part */}
        <div className='flex items-center justify-center sm:justify-start space-x-4'>
            <BookOpen className='w-6 h-6 md:w-8 md:h-8 text-indigo-600' />
            <h1 className='text-xl sm:text-2xl md:text-5xl font-bold bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent'>Tips & Tricks</h1>
            <Lightbulb className='w-6 h-6 md:w-8 md:h-8  text-indigo-600' />
        </div>

        {/* Bottom Part */}
        <div className='w-full grid grid-cols-1'>
            {TipsTricksData.map((item,index)=>(
                <div key={index} className='border-t-[1.75px] border-b-[1.75px] border-transparent hover:border-indigo-500 transition-all duration-300'>
                    <button 
                        onClick={() => toggleSection(index)}
                        className='w-full px-4 sm:px-6 py-3 flex items-center justify-between'
                    >
                        <h2 className='text-base sm:text-lg font-semibold text-left'>{item.condition}</h2>

                        {expandSection === index ? (
                            <ChevronUp className='w-5 h-5 flex-shrink-0 text-indigo-600' />
                        ) : (
                            <ChevronDown className='w-5 h-5 flex-shrink-0 text-indigo-600' />
                        )}
                    </button>

                    {/* Show Content */}
                    <motion.div
                        initial="hidden"
                        animate={expandSection === index ? "visible" : "hidden"}
                        variants={sectionVariants}
                        className="px-4 sm:px-6 pb-3"
                    >
                    {expandSection === index && (
                        <div className='px-4 sm:px-6 pb-3 '>
                            <div className='mb-2'>
                                <ul className='list-disc pl-5 space-y-1'>
                                    {item.options.map((algo,idx) => (
                                        <li key={idx} className='text-[1.1rem] font-medium text-indigo-500'>{algo}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Example */}
                            <div className='text-xs sm:text-sm'>{item.examples}</div>
                        </div>
                    )}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TipsTricks