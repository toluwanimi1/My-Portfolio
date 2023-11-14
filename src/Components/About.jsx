import React from 'react'

const About = () => {
  return (
    <div name='about'className='w-full h-screen bg-[#1b082c] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-col-2 gap-8'>
                <div className='sm:text-right ph-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-800'>About</p>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-col-2 gap-8'>
                <p>Hi</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About 