import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Assest/logo.png';
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b082c] text-[#ffffff]'>
    <div> <img src={Logo} alt="Logo image" style={{width: '70px'}}></img>
    </div>    
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        
        {/*Hameburger*/}
        <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ?<FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu*/}
       
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1b082c] flex  flex-col justify-center items-center'}>
                <li className=' py-6 text-4xl'>Home</li>
                <li className=' py-6 text-4xl'>About</li>
                <li className=' py-6 text-4xl'>Experience</li>
                <li className=' py-6 text-4xl'>Projects</li>
                <li className=' py-6 text-4xl'>Contact</li>
            </ul>

          
        
      
    </div>
  )
}

export default Navbar

