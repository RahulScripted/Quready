import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { BacktrackingData } from "../../../assets/asset"

const Backtracking = () => {
  return (
    <ReusableTopic 
      title="Backtracking"
      description="Unlock the power of backtracking to solve complex problems by exploring all possible solutions systematically. Backtracking trains your mind to think creatively and adaptively while pruning unnecessary paths, making your problem-solving approach both exhaustive and efficient. Dive into backtracking challenges to elevate your logical reasoning and coding artistry."
      data={BacktrackingData}
    />
  )
}

export default Backtracking