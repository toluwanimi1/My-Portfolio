import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../Assest/logo.png';
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b082c] text-[#ffffff]'>
    <div> <img src={Logo} alt="Logo image" style={{width: '70px'}}></img>
    </div>    
    {/*menu */}    
            <ul className='hidden md:flex'>
                <li>
                <Link to='Home' smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to='About' smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to='Experience' smooth={true} offset={50} duration={500}>
                Experience
                </Link>
                </li>
                <li>
                <Link to='Projects' smooth={true} offset={50} duration={500}>
                Projects
                </Link>
                </li>
                <li>
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
                <li className=' py-6 text-4xl'>
                <Link onClick={handleClick} to='Home' smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li className=' py-6 text-4xl'>
                <Link onClick={handleClick} to='About' smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li className=' py-6 text-4xl'>
                <Link onClick={handleClick} to='Experience' smooth={true} offset={50} duration={500}>
                Experience
                </Link>
                </li>
                <li className=' py-6 text-4xl'>
                <Link onClick={handleClick} to='Projects' smooth={true} offset={50} duration={500}>
                Projects
                </Link>
                </li>
                <li className=' py-6 text-4xl'>
                <Link onClick={handleClick} to='Contact' smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

          
        
      
    </div>
  )
}

export default Navbar

