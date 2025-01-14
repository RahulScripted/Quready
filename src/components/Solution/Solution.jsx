import { div } from 'framer-motion/client';
import React, { useState } from 'react'

const Solution = ({data}) => {
  if (!data) {
    return <p className='text-red-500 font-semibold'>No data provided for this solution.</p>;
  }

  const [selectLanguage,setSelectLanguage] = useState('cpp')
  const hasSolution = data?.solution
  const selectedCode = hasSolution ? data.solution.code[selectLanguage] : null

  return (
    <div>
        <h2 className='text-xl font-medium mb-2'><b>Question:</b> {data.name}</h2>
        {hasSolution ?
            <p className='text-sm'>{data.solution.description}</p>
            :
            <p className='text-sm'>No solution available</p>
        }

        {/* If solution have */}
        <div className='bg-gray-200 mt-10 rounded-lg'>
            {hasSolution && (
                <select value={selectLanguage} className='p-3 outline-none' onChange={(e) => setSelectLanguage(e.target.value)}>
                    <option value="cpp">C++</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select>
            )}

            {/* If code have */}
            {selectedCode ? (
                <pre>
                    <code>{selectedCode}</code>
                </pre>
            ) : hasSolution? (
                <p>No solution available in {selectLanguage}</p>
            ) : null}
        </div>
    </div>
  )
}

export default Solution