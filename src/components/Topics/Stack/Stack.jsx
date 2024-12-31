import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { StackData } from '../../../assets/asset'


const Stack = () => {
  return (
    <ReusableTopic 
      title="Stack"
      description="Gaining proficiency in stacks enables you to tackle problems requiring sequential operations, reversal processes, and efficient tracking of states. Explore and solve a range of stack-centric problems to deepen your understanding and enhance your coding abilities."
      data={StackData}
    />
  )
}

export default Stack