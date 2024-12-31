import React from 'react'
import ReusableTopic from '../ReusableTopic'
import { TriesData } from '../../../assets/asset'

const Tries = () => {
  return (
    <ReusableTopic 
      title="Tries"
      description="Discover the magic of tries, the ultimate data structure for handling strings efficiently. Tries empower you to store, search, and manipulate prefixes with unparalleled speed, unlocking solutions to problems like autocomplete, spell checking, and pattern matching. By mastering trie challenges, you can sharpen your skills in structured data management and explore the elegance of algorithmic design."
      data={TriesData}
    />
  )
}

export default Tries