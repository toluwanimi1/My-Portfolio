import React from 'react'
import Calimg from '../Assest/Calculator.png';
import Portimg from '../Assest/portfolio.png';
const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen bg-[#1b082c] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-800'>Projects</p>
          <p className='py-6'>My relevant Projects</p>
        </div>
          {/* Contrainer */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid item */}
            <div style={{backgroundImage: `url(${Calimg})`}} className='shadow-lg shadow-[#2c0b48] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover effect*/} 
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              React Calculator
              </span>
              <div className='pt-8 text-center'>
                <a href="https://toluwanimi1.github.io/ReactCalculator/" target="_blank">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg rounded-md'>Demo</button>
                </a>
                <a href="https://github.com/toluwanimi1/ReactCalculator" target="_blank">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg rounded-md' >Code</button>
                </a>

              </div>
             </div>
            </div>
            <div style={{backgroundImage: `url(${Portimg})`}} className='shadow-lg shadow-[#2c0b48] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*Hover effect*/} 
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              React Portolio
              </span>
              <div className='pt-8 text-center'>
                <a href="/" target="_blank">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg rounded-md'>Demo</button>
                </a>
                <a href="/" target="_blank">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg rounded-md'>Code</button>
                </a>

              </div>
             </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Projects
