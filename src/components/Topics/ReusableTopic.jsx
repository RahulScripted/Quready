import React, {  useEffect, useState } from 'react'
import ConfettiWrapper from '../Confetti/ConfettiWrapper'
import Solution from '../Solution/Solution';
import { useNavigate } from 'react-router-dom';

const ReusableTopic = ({title,description,data}) => {
  // For storing
    const storedData = JSON.parse(localStorage.getItem(`checkedItems_${title}`)) || [];
  
    // Hooks 
    const navigate = useNavigate()
    const [checkedItems,setCheckedItems] = useState(storedData)
    const [selectSolution,setSelectSolution] = useState(null);
  
    useEffect(() => {
      localStorage.setItem(`checkedItems_${title}`,JSON.stringify(checkedItems))
    },[checkedItems,title])
  
    const handleCheckBoxChange = (id) => {
      setCheckedItems((prev) => (
        prev.includes(id) ? 
        prev.filter((itemId) => itemId !== id) : // for uncheck
        [...prev,id] // for check
      ));
    }
  
    // Is All Solved?
    const isAllSolved = checkedItems.length === data.length

    // Called when someone click on view
    const handleViewSolution = (item) => {
      navigate('/solution', {state: {solutionData: item}})
    }

  return (
    <div className='w-full flex flex-col gap-10 px-4'>
      
      {selectSolution ? 
        (
          <Solution data={selectSolution} /> 
        ) : 
        <>
          {/* Confetti */}
          <ConfettiWrapper isVisible={isAllSolved}/>
          
          {/* Top Part */}
          <div className='w-full flex flex-col-reverse items-center justify-center md:flex-row md:justify-between gap-5'>

            {/* Left Part */}
            <div className='w-full md:w-[70%] flex flex-col gap-2'>
              <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>
                <b>Topic : </b>
                {title}
              </h1>
              <p className='text-sm'>{description}</p>
            </div>

            {/* Right Part */}
            <div className='w-[175px] h-[175px] border-[3px] border-indigo-500 rounded-full flex items-center justify-center'>
              <div className='w-[95%] h-[95%] border border-indigo-400 rounded-full flex flex-col items-center justify-center'>
                <p className='text-xl sm:text-2xl md:text-4xl font-bold'><span className='text-indigo-400'>{checkedItems.length}</span> / {data.length}</p>
                <p className='text-sm text-gray-700'>Problems solved</p>
              </div>
            </div>
          </div>

          {/* Bottom Part */}
          <div className='w-full flex flex-col gap-6'>
            <div className='overflow-x-auto flex-grow'>
              <table className='table-auto min-w-full border-collapse text-sm md:text-base text-white'>

                {/* Table's Head Part */}
                <thead>
                  <tr className='bg-indigo-500 text-[1rem] md:text-xl'>
                    <th className='border-[4px] border-white px-4 py-2'>Lists</th>
                    <th className='border-[4px] border-white px-4 py-2 text-left'>Questions</th>
                    <th className='border-[4px] border-white px-4 py-2'>Level</th>
                    <th className='border-[4px] border-white px-4 py-2'>Solution</th>
                  </tr>
                </thead>

                {/* Table's Body Part */}
                <tbody>
                  {data.map((item,index) => (
                    <tr key={index} className='even:bg-gray-50'>
                      <td className='border-[4px] border-white px-4 py-2 text-center'>
                        <input 
                          type="checkbox" 
                          checked={checkedItems.includes(item.id)}
                          onChange={() => handleCheckBoxChange(item.id)}
                          className='w-3 h -3 md:w-5 md:h-5 cursor-pointer accent-green-600'
                        />
                      </td>
                      <td className='border border-white px-4 py-2 min-w-[300px] text-left'>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`text-black font-semibold text-sm md:text-[1.1rem] flex gap-2 items-center hover:text-gray-500 transition-all duration-150 ${checkedItems.includes(item.id) ? 'line-through text-gray-400' : ''}`}>
                            {item.name}
                            <img src={item.img} alt="share" className='w-3 h-3 object-cover' />
                        </a>
                      </td>
                      <td 
                        className={`font-semibold border-[4px] border-white text-sm md:text-[1.1rem] px-4 py-2 text-center ${item.level === 'Easy'? 'text-green-600' : item.level === 'Medium' ? 'text-yellow-500' : 'text-red-600'}`}
                      >
                        {item.level}
                      </td>
                      <td 
                        className='font-medium text-black border-[4px] border-white text-sm md:text-[1.1rem] px-4 py-2 text-center hover:text-violet-500 transition-all duration-150 cursor-pointer'
                        onClick={() => handleViewSolution(item)}
                      >
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default ReusableTopic