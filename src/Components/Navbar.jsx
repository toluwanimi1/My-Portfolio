import React, {useState,} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../Assest/logo.png';
import {Link} from 'react-scroll';
import pdf from '../Assest/Toluwanimi Resume 2024.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b082c] text-[#ffffff]'>
    <div> <Link to='Home' smooth={true} offset={50} duration={500}> <button><img src={Logo} alt="Logo image" style={{width: '70px'}}/> </button></Link>
    </div>    
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li className='hover:text-[#bb97ff]'>
                <Link to='Home' smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li className='hover:text-[#bb97ff]'>
                <Link to='About' smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li className='hover:text-[#bb97ff]'>
                <Link to='Experience' smooth={true} offset={50} duration={500}>
                Experience
                </Link>
                </li>
                <li className='hover:text-[#bb97ff]'>
                <Link to='Projects' smooth={true} offset={50} duration={500}>
                Projects
                </Link>
                </li>
                <li className='hover:text-[#bb97ff]'>
                <Link to='Contact' smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        
        {/*Hameburger*/}
        <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ?<FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu*/}
       
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1b082c] flex  flex-col justify-center items-center'}>
                <li className=' py-6 text-4xl hover:text-[#bb97ff]'>
                <Link onClick={handleClick} to='Home' smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#bb97ff]'>
                <Link onClick={handleClick} to='About' smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#bb97ff]'>
                <Link onClick={handleClick} to='Experience' smooth={true} offset={50} duration={500}>
                Experience
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#bb97ff]'>
                <Link onClick={handleClick} to='Projects' smooth={true} offset={50} duration={500}>
                Projects
                </Link>
                </li>
                <li className=' py-6 text-4xl hover:text-[#bb97ff]'>
                <Link onClick={handleClick} to='Contact' smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>  
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-purple-500'>
                <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/in/toluwanimi-amudipe-0a3837118/' target="_blank">
                Linkedin <FaLinkedin size={30}/>
                </a>
                </li>
                <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-purple-700'>
                <a className='flex justify-between items-center w-full text-white' href='https://github.com/toluwanimi1' target="_blank">
                Github <FaGithub size={30}/>
                </a>
                </li>
                <li className='rounded-sm w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-purple-900'>
                <a className='flex justify-between items-center w-full text-white' href={pdf} target="_blank">
                Resume <BsFillPersonLinesFill size={30}/>
                </a>
                </li>
                
              </ul>
            </div> 
    </div>
  )
}

export default Navbar

