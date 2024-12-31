import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { SortingData } from '../../../assets/asset'

const Sorting = () => {
  return (
    <ReusableTopic 
      title="Sorting"
      description="Mastering sorting techniques sharpens your ability to organize and manage data effectively. Solve a variety of sorting challenges to enhance your problem-solving skills and boost your coding proficiency. Sorting words is a fundamental skill that plays a crucial role in processing textual data and improving overall data handling capabilities."
      data={SortingData}
    />
  )
}

export default Sorting