import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#1b082c] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-800'>
                    About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Toluwanimi. It's good to have you here. take a look around</p>
                </div>
                <div>
                <p>Motivated by a strong desire to create impactful software, I'm dedicated to leveraging my broad experience in full-stack development. 
                While I don't have a specific specialization, my skills encompass both frontend and backend technologies.
                On the frontend, I excel in designing intuitive user interfaces, prioritizing user experience and engagement. 
                Simultaneously, my backend expertise involves architecting robust and scalable systems, ensuring security and performance.
                I thrive in dynamic environments, fostering collaboration and innovation within cross-functional teams. 
                Eager to contribute meaningfully, I look forward to exploring new technologies and domains that align with 
                my passion for making a positive impact on society through top-notch software development.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About 