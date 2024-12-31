import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { MatrixData } from '../../../assets/asset'

const Matrix = () => {
  return (
    <ReusableTopic
      title="Matrix"
      description="Mastering matrix theory equips you to tackle a variety of complex problems and take on additional challenges. Explore and solve numerous matrix theory questions to enhance your programming skills."
      data={MatrixData}
    />
  )
}

export default Matrix