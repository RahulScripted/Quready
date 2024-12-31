import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { SearchingData } from '../../../assets/asset'

const Searching = () => {
  return (
    <ReusableTopic
      title="Searching"
      description="Mastering searching techniques sharpens your ability to retrieve and manage data efficiently. This fundamental skill is essential for solving a wide range of challenges, enhancing your problem-solving abilities, and boosting your coding proficiency. Whether working with textual or numerical data, effective searching enables you to access information quickly and accurately, laying the foundation for advanced data handling and algorithmic expertise."
      data={SearchingData}
    />
  )
}

export default Searching