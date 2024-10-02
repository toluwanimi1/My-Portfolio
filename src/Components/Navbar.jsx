import React, {useState,} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Assest/logo.png';
import {Link} from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b082c] text-[#ffffff] z-10'>
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
       
        <ul className={`transition-all duration-500 ease-in-out ${!nav ? 'h-0' : 'h-[25vh]'} absolute top-0 left-0 w-full bg-[#1b082c] flex flex-col justify-center items-center overflow-hidden z-10`}>
  <li className='py-2 text-xl hover:text-[#bb97ff]'>
    <Link onClick={handleClick} to='Home' smooth={true} offset={50} duration={500}>
      Home
    </Link>
  </li>
  <li className='py-2 text-xl hover:text-[#bb97ff]'>
    <Link onClick={handleClick} to='About' smooth={true} offset={50} duration={500}>
      About
    </Link>
  </li>
  <li className='py-2 text-xl hover:text-[#bb97ff]'>
    <Link onClick={handleClick} to='Experience' smooth={true} offset={50} duration={500}>
      Experience
    </Link>
  </li>
  <li className='py-2 text-xl hover:text-[#bb97ff]'>
    <Link onClick={handleClick} to='Projects' smooth={true} offset={50} duration={500}>
      Projects
    </Link>
  </li>
  <li className='py-2 text-xl hover:text-[#bb97ff]'>
    <Link onClick={handleClick} to='Contact' smooth={true} offset={50} duration={500}>
      Contact
    </Link>
  </li>
</ul>  

    </div>
  )
}
export default Navbar

