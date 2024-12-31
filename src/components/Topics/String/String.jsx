import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { StringData } from '../../../assets/asset'

const String = () => {
  return (
    <ReusableTopic 
      title="String"
      description="Mastering string problems sharpens your ability to work with textual data and efficiently manipulate characters. Solve a variety of string challenges to enhance your problem-solving skills and boost your coding proficiency."
      data={StringData}
    />
  )
}

export default String