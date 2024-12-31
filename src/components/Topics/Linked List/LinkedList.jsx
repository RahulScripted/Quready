import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { LinkedListData } from '../../../assets/asset'

const LinkedList = () => {
  return (
    <ReusableTopic 
      title="Linked List"
      description="Mastering linked list problems sharpens your ability to work with dynamic data structures and manage sequential data efficiently. By solving a variety of linked list challenges, you can enhance your problem-solving skills and boost your coding proficiency."
      data={LinkedListData}
    />
  )
}

export default LinkedList