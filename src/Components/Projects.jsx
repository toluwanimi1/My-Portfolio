import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Project1 from '../Assest/project1.JPG';
import Project2 from '../Assest/project2.JPG';
const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen bg-[#1b082c] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-800'>PROJECTS</p>
          <p className='py-6 text-2xl'>My relevant projects</p>
        </div>
        </div>
          {/* Contrainer */}
          <div className='grid w-full grid-cols-1 place-items-start gap-12 sm:grid-cols-2 md:grid-cols-1 md:gap-24'>
  {/* Grid item */}
  <div className='mx-auto grid w-full max-w-6xl grid-cols-1 p-4 md:grid-cols-2 md:place-items-center md:gap-6 lg:gap-12'>
    <div className='relative aspect-[3/2] w-full max-w-lg'>
      <a className='group container rounded-md flex justify-center items-center mx-auto' href='https://toluwanimi1.github.io/My-Portfolio/'>
        <img src={Project1} className='rounded-xl' alt="Project 1" />
      </a>
    </div>
    <div className='flex flex-col justify-center px-4 py-2 text-lg sm:px-0'>
  <a className='inline-flex items-center justify-center text-white hover:underline mr-0 sm:mr-14' href='https://toluwanimi1.github.io/My-Portfolio/'>
    https://toluwanimi1.github.io/My-Portfolio <FaExternalLinkAlt className='ml-3'/>
  </a>
  <h2 className='text-3xl font-bold'>This Portfolio</h2>
  <p className='mt-1 max-w-[45ch] italic text-gray-400'>React, JavaScript, TailwindCSS, Github pages</p>
  <p className='mt-4 max-w-[45ch] text-lg'>A website designed and built to be responsive and easy to navigate to show my capabilities.</p>
</div>
  </div>


  <div className='mx-auto grid w-full max-w-6xl grid-cols-1 p-4 md:grid-cols-2 md:place-items-center md:gap-6 lg:gap-12'>
    <div className='relative aspect-[3/2] w-full max-w-lg'>
      <a className='group container rounded-md flex justify-center items-center mx-auto' href='https://toluwanimi1.github.io/RCJCWebsite/'>
        <img src={Project2} className='rounded-xl' alt="Project 1" />
      </a>
    </div>
    <div className='flex flex-col justify-center px-4 py-2 text-lg sm:px-0'>
  <a className='inline-flex items-center justify-center text-white hover:underline mr-0 sm:mr-14' href='https://toluwanimi1.github.io/RCJCWebsite/'>
  https://toluwanimi1.github.io/RCJCWebsite <FaExternalLinkAlt className='ml-3'/>
  </a>
  <h2 className='text-3xl font-bold'>The RCJC Church website</h2>
  <p className='mt-1 max-w-[45ch] italic text-gray-400'>React, JavaScript, TailwindCSS, Github pages</p>
  <p className='mt-4 max-w-[45ch] text-lg'>A website designed and built to be responsive and easy to navigate for a church is Essex. The site is still being built but here is the current demo</p>
</div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Projects
