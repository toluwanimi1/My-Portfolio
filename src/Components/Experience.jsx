import React from 'react'
import Java from '../Assest/java.png';
import Angular from '../Assest/angular.png';
import Github from '../Assest/github.png';
import Html from '../Assest/html.png';
import Nodejs from '../Assest/node.png';
import Php from '../Assest/php.png';
import Python from '../Assest/python.png';
import Reacicon from '../Assest/react.png';
const Experience = () => {
  return (
    <div name='Experience' className=' bg-[#1b082c] text-white'>
      {/* Container */}
    <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
        <p className='text-4xl font-bold inline border-b-4 border-purple-800 text-white '>Experience</p>
        <p className='py-4 text-2xl'> These are technologies i'm familar with</p>
    </div>
    <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-3 text-center py-8'>
    <div>
      <img className='w=20 mx-auto' src={Github} alt='Github icon'/>
      <p>Github</p>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default Experience
