import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { PiCertificate, PiTerminalWindow } from "react-icons/pi"
import { TbLocation } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { LuBot, LuLibraryBig } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { MdDeveloperBoard, MdOutlineLocalLibrary } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {
  return (
    <Menu>
      <a className="menu-item" href="#">
        <GoHome className="menu-icon" size={35} />
        Home
      </a>
      <a className="menu-item" href="#courses">
        <PiCertificate className="menu-icon" size={35} />
        Courses & Certificates
      </a>
      <a className="menu-item" href="#roadmaps">
        <TbLocation className="menu-icon" size={35} />
        Roadmaps
      </a>
      <a className="menu-item" href="#coding_practice">
        <PiTerminalWindow className="menu-icon" size={35}/>
        Coding Practice
      </a>
      <a className="menu-item" href="#course_tools"> 
        <SiGoogleclassroom className="menu-icon" size={30} />
        Course Specific Tools
      </a>
      <a className='menu-item' href='#ai'>
        <LuBot className="menu-icon" size={35} />
        AI Tools
      </a>
      <a className='menu-item' href='#libraries'>
        <MdOutlineLocalLibrary className="menu-icon" size={35} />
        Libraries & Frameworks
      </a>
      <a className='menu-item' href="#devtools">
        <MdDeveloperBoard className="menu-icon" size={35} />
        API Dev & Testing Tools
      </a>
      <a className="menu-item" href="#other"> 
        <VscTools className='menu-icon' size={30}/>
        Other Tools
      </a>
      
      
    </Menu>
  );
};

export default Navbar;
