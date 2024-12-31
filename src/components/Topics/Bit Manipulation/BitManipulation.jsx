import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { BitManipulationData } from '../../../assets/asset'

const BitManipulation = () => {
  return (
    <ReusableTopic 
      title="Bit Manipulation"
      description="Mastering bit manipulation unlocks the ability to solve problems involving binary operations, optimization, and low-level computation. Dive into various bitwise challenges to strengthen your logical thinking and elevate your programming efficiency."
      data={BitManipulationData}
    />
  )
}

export default BitManipulation