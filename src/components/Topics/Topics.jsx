import React from 'react'
import {useNavigate} from 'react-router-dom'
import { TopicsData } from '../../assets/asset'

const Topics = () => {
  const topicRoutes = {
    math: '/topics/math',
    pattern: '/topics/pattern',
    array: '/topics/array',
    string: '/topics/string',
    sorting: '/topics/sorting',
    searching: '/topics/searching',
    matrix: '/topics/matrix',
    hashing: '/topics/hashing',
    twoPointers: '/topics/two_Pointers',
    prefixSum: '/topics/prefix_Sum',
    backtracking: '/topics/backtracking',
    linkedList: '/topics/linkedList',
    trees: '/topics/trees',
    heap: '/topics/heap',
    stack: '/topics/stack',
    queue: '/topics/queue',
    slidingWindow: '/topics/sliding_window',
    bitManipulation: '/topics/bit_manipulation',
    dynamicProgramming: '/topics/dynamic_programming',
    greedy: '/topics/greedy',
    graphs: '/topics/graphs',
    tries: '/topics/tries',
  };

  const navigate = useNavigate();
  const handleNavigation = (route) =>{
    console.log(route);
    navigate(topicRoutes[route]);
  }

  return (
    <div className='flex flex-col gap-10 items-center justify-center w-full'>

        {/* Heading */}
        <h2 className='bg-gradient-to-b from-black to-gray-400 text-transparent bg-clip-text text-2xl text-center md:text-5xl font-bold md:font-semibold'>Question Topics</h2>

        {/* Topics */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-x-10 gap-y-4'>
            {TopicsData.map((item,index)=>{
                const difficultyLevel = 
                item.Difficulty === 'Easy' ? 'bg-green-500 border-green-500':
                item.Difficulty === 'Medium' ? 'bg-yellow-300 border-yellow-300':
                item.Difficulty === 'Hard' ? 'bg-red-500 border-red-500' : '';

                return (
                    <div key={index} className={`px-3 py-2 border-[2px] text-center rounded-md cursor-pointer ${difficultyLevel} font-semibold hover:bg-transparent transition-all duration-200`} onClick={()=> handleNavigation(item.key)}>
                        <h3>{item.name}</h3>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Topics