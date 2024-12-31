import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { PrefixSumData } from '../../../assets/asset'

const PrefixSum = () => {
  return (
    <ReusableTopic 
      title="Prefix Sum"
      description="Mastering prefix sum problems strengthens your ability to preprocess and analyze data efficiently in sequences. By solving a variety of prefix sum challenges, you can enhance your problem-solving skills and boost your coding proficiency."
      data={PrefixSumData}
    />
  )
}

export default PrefixSum