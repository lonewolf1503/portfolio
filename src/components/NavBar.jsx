import React from 'react';
import Image from 'next/image';
import {FaBars,FaTimes} from 'react-icons';
import Logo from "../assets/logo1.png";
const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
    <Image src={Logo} alt="Logo Image" style={{width:'100px'}}/>
    </div>
    <div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar