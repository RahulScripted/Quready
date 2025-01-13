import React from 'react'
import { ChallengeData } from '../../assets/asset';
import { ArrowBigLeftDash, ArrowBigRightDash, Clock} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
  const navigate = useNavigate()
  
  const handleStartChallenge = (ChallengeId) => {
    const selectedChallenge = ChallengeData.find((data) => data.id === ChallengeId);
    navigate(`test/${ChallengeId}`, {state : selectedChallenge})
  };

  return (
    <div className='p-2 md:p-6'>
        <div className='text-center mb-8'>

            {/* Title */}
            <div className='flex items-center justify-center space-x-4'>
                <ArrowBigRightDash className='w-6 h-6 md:w-8 md:h-8 text-indigo-600' />

                <h1 className='font-bold text-3xl md:text-5xl mb-2 bg-gradient-to-b from-black to-gray-400  bg-clip-text text-transparent md:h-[55px]'>Coding Challenges</h1>

                <ArrowBigLeftDash className='w-6 h-6 md:w-8 md:h-8 text-indigo-600' />
            </div>

            {/* Description */}
            <p className='text-gray-600 text-xs sm:text-[1rem]'>Push your coding limits by participating in timed coding challenges.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {ChallengeData.map((data) => (
                <div key={data.id} className='bg-white rounded-lg border border-violet-400 shadow-lg overflow-hidden'>
                    <div className='p-6'>

                        {/* Title */}
                        <h2 className='text-xl font-bold mb-2'>{data.title}</h2>

                        {/* Description */}
                        <p className='text-gray-600 mb-4'>{data.description}</p>

                        {/* Time Limit */}
                        <div className='flex items-center mt-2 text-gray-600'>
                            <Clock className='w-6 h-6 mr-2' />
                            <span>Time limit : {data.timeLimit}min</span>
                        </div>

                        {/* Start Button */}
                        <div className='mt-5'>
                            <button className='w-full py-2 px-4 bg-violet-600 rounded-md hover:bg-violet-400 transition-all duration-150 text-white' onClick={() => handleStartChallenge(data.id)}>Start Challenge</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Challenge