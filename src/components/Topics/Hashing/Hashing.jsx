import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { HashingData } from '../../../assets/asset'

const Hashing = () => {
  return (
    <ReusableTopic 
      title="Hashing"
      description="Mastering hashing equips you to tackle a variety of complex problems and take on additional challenges. Explore and solve numerous hashing questions to enhance your programming skills."
      data={HashingData}
    />
  )
}

export default Hashing