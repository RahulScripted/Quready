import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { GraphsData } from '../../../assets/asset'

const Graphs = () => {
  return (
    <ReusableTopic 
      title="Graphs"
      description="Mastering graph algorithms equips you to solve problems involving networks, connections, and complex relationships. Dive into a range of graph-based challenges to enhance your problem-solving abilities and strengthen your understanding of graph theory."
      data={GraphsData}
    />
  )
}

export default Graphs