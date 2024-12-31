import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { GreedyData } from '../../../assets/asset'

const Greedy = () => {
  return (
    <ReusableTopic 
      title="Greedy"
      description="Mastering the greedy approach enables you to tackle optimization problems by making locally optimal choices that lead to globally optimal solutions. Practice a variety of greedy algorithm challenges to enhance your decision-making skills and programming expertise."
      data={GreedyData}
    />
  )
}

export default Greedy