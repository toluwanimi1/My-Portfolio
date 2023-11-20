import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#1b082c]'>
      {/* Containor */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#ffffff]'>Hello, my name is </p>
      <h1 className='text4xl sm:text-7xl font-bold text-[#bb97ff]'>Toluwanimi Amudipe</h1>
      <h2 className='text4xl sm:text-7xl font-bold text-[#8e6eca]'>I am a Software Engineer </h2>
      <p className='text-white py-4 max-w-[700px]'>with substantial full-stack development experience and a passion for crafting dynamic and innovative web solutions </p>
      <div>
      <Link to='Projects' smooth={true} offset={50} duration={500}>              
      <button className='text-white group border-2 px-6 py-3 m-2 flex items-center hover:bg-[#bb97ff]'>View projects
      <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button></Link>
      </div>
      </div>
    </div>
  )
}

export default Home
