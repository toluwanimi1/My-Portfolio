import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1b082c]'>
      {/* Containor */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#ffffff]'>Hello, my name is </p>
      <h1 className='text4xl sm:text-7xl font-bold text-[#bb97ff]'>Toluwanimi Amudipe</h1>
      <h2 className='text4xl sm:text-7xl font-bold text-[#bb97ff]'>I am a Software Engineer </h2>
      <p>with substantial full-stack development experience and a passion for crafting dynamic and innovative web solutions </p>
      </div>
    </div>
  )
}

export default Home
