import React from 'react'
import Header from '../components/Header/Header'
import WhyUs from '../components/Why Us/WhyUs'
import Topics from '../components/Topics/Topics'

const Home = () => {
  return (
    <div className='flex flex-col gap-24'>
        <Header />
        <WhyUs />
        <Topics />
    </div>
  )
}

export default Home