import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const ConfettiWrapper = ({isVisible}) => {
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const [windowHeight,setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleOnResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize',handleOnResize)
    return () => window.removeEventListener('resize',handleOnResize)
  },[])

  if(!isVisible) return null;
  return  <Confetti width={windowWidth} height={windowHeight} style={{position: 'fixed', top: 0, left: 0,zIndex: 9999, pointerEvents: 'none'}} />
}

export default ConfettiWrapper