import React from 'react'
import Header from '../components/Header/Header'
import WhyUs from '../components/Why Us/WhyUs'
import Topics from '../components/Topics/Topics'
import TipsTricks from '../components/Tips Tricks/TipsTricks'
import Challenge from '../components/Challenges/Challenge'

const Home = () => {
  return (
    <div className='flex flex-col gap-24'>
        <Header />
        <WhyUs />
        <Topics />
        <Challenge />
        <TipsTricks />
    </div>
  )
}

export default Home