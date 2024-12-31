import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { QueueData } from '../../../assets/asset'

const Queue = () => {
  return (
    <ReusableTopic 
      title="Queue"
      description="Mastering queues allows you to efficiently address problems involving orderly processing, task scheduling, and resource management. Engage with a variety of queue-based challenges to expand your knowledge and refine your programming skills."
      data={QueueData}
    />
  )
}

export default Queue