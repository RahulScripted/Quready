import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Test = () => {
  const location = useLocation();
  const challenge = location.state;

  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const [answer,setAnswer] = useState({});
  const [timeLeft,setTimeLeft] = useState(30 * 60)
  const [startTime] = useState(Date.now())
  const [isSubmitted,SetIsSubmitted] = useState(false)
  const [result,setResult] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if(prevTime < 0){
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      })
    },1000)
    return () => clearInterval(timer)
    },[])

  useEffect(() => {
    if(timeLeft < 0 && !isSubmitted){
      handleSubmit();
      alert("Time's up!!")
    }
  },[timeLeft,isSubmitted])

  if(!challenge && !challenge.Questions){
    return <div>No challenge found!</div>
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60);
    return `${minutes} : ${remainingSeconds.toString().padStart(2,'0')}`
  }

  const calculateResult = () => {
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const correctAnswer = 0;

    challenge.Questions.forEach((question,idx) => {
      if(answer[idx] === question.correct){
         correctAnswer++;
      }
    })
    
    const accuracy = (correctAnswer / challenge.Questions.length) / 100;

    return {
      timeTaken,
      correctAnswer,
      totalQuestions: challenge.Questions.length,
      accuracy,
    }
  }

  const handleOptionSelect = (questionIndex,selectedOption) => {
    setAnswer(prev => ({
      ...prev,
      [questionIndex] : selectedOption
    }))
  }

  const handlePrevious = () => {
    setCurrentQuestionIndex(prev => Math.max(0,prev - 1))
  }

  const handleNext = () => {
    setCurrentQuestionIndex(prev => Math.min(challenge.Questions.length - 1,prev + 1))
  }

  const handleSubmit = () => {
    const results = calculateResult();
    setResult(results);
    SetIsSubmitted(true)
  }


  const ResultView = ({result}) => {
    if(!result){
      return <div>Loading result...</div>
    }
    return (
      <div className='p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Quiz Result</h2>

        <div className='space-y-4'>
          <div className='bg-violet-200 p-4 rounded-lg'>
            <h3 className='font-semibold mb-2'>Time Information</h3>
            <p>Time taken : {formatTime(result.timeTaken)}</p>
            <p>Time remaining : {formatTime(result.timeLeft)}</p>
          </div>

          <div className='bg-violet-200 p-4 rounded-lg'>
          <h3 className='font-semibold mb-2'>Performance</h3>
            <p>Correct Answer : {result.correctAnswer} out of {result.totalQuestions}</p>
            <p>Accuracy : {result.accuracy.toFixed(1)}%</p>
          </div>

          <div className='bg-violet-200 rounded-lg'>
            <h3 className='font-semibold mb-2'>Question Analysis</h3>
            {challenge.Questions.map((question,index) => (
              <div key={index} className='mb-4 border-b pb-2 last:border-b-0'>
                <p className='font-medium'>Q{index + 1} : {question.question}</p>
                <p className='text-sm text-gray-600'>
                  Your answer: {
                    answer[index] !== undefined 
                      ? question.options[answer[index] - 1]
                      : 'Not answered'
                  }
                </p>
                <p className={`text-sm ${answer[index] === question.correctAnswer ? 'text-gray-600' : 'text-red-600'}`}>
                  Correct answer : {question.options[question.correct - 1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }


  if(isSubmitted){
    return <ResultView />
  }

  const currentQuestion = challenge.Questions[currentQuestionIndex]

  return (
    <div className='p-4'>
      <div className='fixed top-4 right-4 bg-violet-500 text-white px-4 py-2 rounded-full shadow-md'>
        Time left : {formatTime(timeLeft)}
      </div>

      <h1 className='text-3xl font-bold mb-2'>{challenge.title}</h1>

      <p className='text-gray-600 text-xs sm:text-[1rem]'>
        {challenge.description}
      </p>

      <div className='mt-4 mb-2 text-sm  text-gray-600'>
        Question {currentQuestionIndex + 1} of {challenge.Questions.length}
      </div>

      {/* Options */}
      <div className='bg-white p-6 rounded-lg mb-4 shadow-md border border-violet-400'>

        {/* Question Name */}
        <h2 className='text-lg font-semibold mb-4'>
          {`Q${currentQuestionIndex + 1}: ${currentQuestion.question}`}
        </h2>

        {/* Options */}
        <div className='space-y-3'>
          {currentQuestion.options.map((option,i) => (
            <div key={i + 1} className='flex items-center space-x-3'>
              <input 
                type="radio" 
                name={`question-${currentQuestionIndex}`}
                id={`option-${currentQuestionIndex}-${i}`}
                checked={answer[currentQuestionIndex] === i}
                onChange={() => handleOptionSelect(currentQuestionIndex,i)}
                className='w-4 h-4'
              />
              <label htmlFor={`option-${currentQuestionIndex}-${1}`} className='text-gray-700 cursor-pointer'>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <button 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded ${
            currentQuestionIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-violet-600 hover:bg-violet-400 text-white'
          }`}
        >
          Previous  
        </button>

        {currentQuestionIndex === challenge.Questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded'
          >Submit</button>
        ) : (
          <button 
            onClick={handleNext}
            className='px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded'
          >Next</button>
        )}
      </div>
    </div>
  )
}

export default Test