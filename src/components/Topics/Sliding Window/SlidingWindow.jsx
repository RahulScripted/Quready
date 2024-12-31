import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { slidingWindowData } from '../../../assets/asset'

const SlidingWindow = () => {
  return (
    <ReusableTopic 
      title="Sliding Window"
      description="Mastering sliding window techniques equips you to solve problems involving dynamic ranges, optimized subarray operations, and real-time data processing. Practice and explore diverse sliding window challenges to enhance your problem-solving skills and programming efficiency."
      data={slidingWindowData}
    />
  )
}

export default SlidingWindow