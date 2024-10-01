import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import profile from '../Assest/profile.jpg';
import pdf from '../Assest/Toluwanimi Resume 2024.pdf';
import {FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#1b082c]'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full'>
     
      <img 
        src={profile} 
        alt="Profile" 
        className='h-[143px] w-[143px] sm:h-[175px] sm:w-[175px] rounded-full mb-6 sm:mb-0 sm:mr-8' 
      />

      
      <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-[#bb97ff]'>
          Toluwanimi Amudipe
        </h1>
        <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-[#8e6eca]'>
          Software Engineer
        </h2>
        <p className='text-sm sm:text-lg md:text-xl text-white py-4 max-w-[700px]'>
          with substantial full-stack development experience and a passion for crafting dynamic and innovative web solutions
        </p>
        <div className='grid grid-cols-4 gap-2 sm:gap-4'>
        <a className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Button 1 <FaGithub size={30}/></a>
        <a className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Button 2</a>
        <a className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Button 3</a>
          </div>
       {/*
        
        <div>
          <Link 
            to='Projects' 
            smooth={true} 
            offset={-50} 
            duration={500}
          >
            <button className='text-white group border-2 px-6 py-3 m-2 flex items-center hover:bg-[#bb97ff] hover:border-[#bb97ff]'>
              View Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default Home
