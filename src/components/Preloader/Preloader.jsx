import React from 'react'
import {AnimatePresence, motion, useInView} from 'framer-motion'

const preLoaderText = "Crafting Your Masterpiece"

const Preloader = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref,{once:true})
  return (
    <div className='flex space-x-1 justify-center flex-wrap px-16'>
      <AnimatePresence>
        {preLoaderText.split('').map((char,i)=>{
          return <motion.span
          ref={ref}
            key={i}
            initial={{opacity:0,x:-18}}
            animate={
              isInView? {opacity:1,x:0} :{}
            }
            exit="hidden"
            transition={{
              duration:0.5,
              delay: i * 0.1
            }}
            className="text-xl md:text-4xl lg:text-6xl font-semibold text-center break-words"
          >
            {char === '' ? <span>&nbsp;</span> : char}
          </motion.span>
        })}
      </AnimatePresence>
    </div>
  )
}

export default Preloader