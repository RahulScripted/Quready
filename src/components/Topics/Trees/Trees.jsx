import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { TreesData } from '../../../assets/asset'

const Trees = () => {
  return (
    <ReusableTopic 
      title="Trees"
      description="Tree data structures are the backbone of many real-world systems, from file directories to decision-making algorithms. Dive deep into solving tree-based challenges to sharpen your skills in traversals, manipulations, and hierarchical data representation. By mastering these, you'll enhance your ability to design scalable solutions and tackle complex problems with ease."
      data={TreesData}
    />
  )
}

export default Trees