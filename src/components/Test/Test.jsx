import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import 'chart.js/auto'
import { Clock, Brain, Target, Award } from 'lucide-react';
import { Pie } from 'react-chartjs-2';

const Test = () => {
  const location = useLocation();
  const challenge = location.state;

  const navigate = useNavigate();

  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const [answer,setAnswer] = useState({});
  const [timeLeft,setTimeLeft] = useState(30 * 60)
  const [startTime] = useState(Date.now())
  const [isSubmitted,SetIsSubmitted] = useState(false)
  const [result,setResult] = useState(null)
  const [loading,setLoading] = useState(false)

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
    let correctAnswer = 0;

    challenge.Questions.forEach((question,idx) => {
      if(answer[idx] === question.correct - 1){
        correctAnswer++;
      }
    })
    
    const accuracy = (correctAnswer / challenge.Questions.length) * 100;

    return {
      timeTaken,
      timeLeft,
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

  const handleSubmit = async() => {
    setLoading(true);
    const results = calculateResult();
    setTimeout(() => {
      setResult(results);
      SetIsSubmitted(true);
      setLoading(false)
    },[2000])
  }

  // Loading animation
  const LoadingOverlay = () => (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='loader border-4 border-t-violet-600 rounded-full w-16 h-16 animate-spin'></div>
    </div>
  );


  const ResultView = ({result}) => {
    if(!result){
      return <div>Loading result...</div>
    }

    const Stat = [
      {
        icon: Clock,
        label: "Time Taken",
        value: formatTime(result?.timeTaken || 0)
      },
      {
        icon: Brain,
        label: "Questions",
        value: `${result?.correctAnswer || 0}/${result?.totalQuestions || 0}`
      },
      {
        icon: Target,
        label: "Accuracy",
        value: `${result?.accuracy?.toFixed(1) || 0}%`
      },
      {
        icon: Award,
        label: "Time Left",
        value: formatTime(result?.timeLeft || 0)
      }
    ];

    const pieData = {
      labels: ["Solved", "Unsolved"],
      datasets: [
        {
          label : "Questions",
          data: [result?.correctAnswer || 0, result?.totalQuestions - (result?.correctAnswer || 0)] ,
          backgroundColor: ["#4CAF50", "#F44336"],
          borderWidth: 1
        }
      ]
    }

    
    const pieOption = {
      responsive: true,
      plugins:{
        legend: {
          display: true,
          position: "bottom"
        },
      },
      animation: {
        duration: 0
      }
    }
    
    return (
      <div className='p-6 bg-white rounded-lg '>
        <h2 className='text-3xl font-bold mb-6 text-center'>Quiz Result</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 mb-8 gap-4'>
          {Stat.map((val,index) => (
            <div key={index} className='bg-violet-50 p-4 rounded-lg hover:scale-105 duration-150 transition-all cursor-pointer'>
              <div className='flex items-center gap-2 mb-2'>
                <val.icon className="w-5 h-5 md:w-7 md:h-7 text-violet-600" />
                <span className='text-sm md:text-[1rem] text-gray-600'>{val.label}</span>
              </div>
              <div className='text-xl font-semibold text-violet-900 text-center'>{val.value}</div>
            </div>
          ))}
        </div>
        
        {/* Chart */}
        <div className='flex items-center justify-center mb-8'>
          <div className='w-full max-w-xs'>
            <Pie data={pieData} options={pieOption} />
          </div>
        </div>

        {/* Back button */}
        <div className='flex items-center justify-center'>
          <button className='px-4 py-2 bg-violet-500 hover:bg-violet-600 transition-colors duration-150 text-white rounded-lg' onClick={() => navigate('/')}>Back to test</button>
        </div>
      </div>
    )
  }


  if(loading){
    return <LoadingOverlay />
  }

  if(isSubmitted){
    return <ResultView result={result} />
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
            <div key={i} className='flex items-center space-x-3'>
              <input 
                type="radio" 
                name={`question-${currentQuestionIndex}`}
                id={`option-${currentQuestionIndex}-${i}`}
                checked={answer[currentQuestionIndex] === i}
                onChange={() => handleOptionSelect(currentQuestionIndex,i)}
                className='w-4 h-4'
              />
              <label htmlFor={`option-${currentQuestionIndex}-${i}`} className={`text-gray-700 font-semibold cursor-pointer hover:text-green-600 transition-all duration-150 ${answer[currentQuestionIndex] === i ? 'text-green-600' : ''}`}>
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