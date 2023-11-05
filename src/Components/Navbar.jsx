import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Assest/logo.png'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1b082c] text-[#ffffff]'>
    <div> <img src={Logo} alt="Logo image" style={{width: '70px'}}></img></div>    
    {/*menu */}    
    <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        {/*Hameburger*/}
        <div className='hidden'> <FaBars /></div>

        {/* Mobile menu*/}
        <div>
        <ul className='absolute top left-0 w-full h-screen'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar

