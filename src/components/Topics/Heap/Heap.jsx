import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { HeapData } from '../../../assets/asset'

const Heap = () => {
  return (
    <ReusableTopic 
      title="Heap"
      description="Mastering heaps empowers you to efficiently solve problems involving priority, sorting, and optimized resource allocation. Dive into a variety of heap-related challenges to strengthen your understanding and elevate your programming expertise."
      data={HeapData}
    />
  )
}

export default Heap