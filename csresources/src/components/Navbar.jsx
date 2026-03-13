import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { PiCertificate, PiTerminalWindow } from "react-icons/pi"
import { TbLocation } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { LuBot, LuContact } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdDeveloperBoard, MdOutlineLocalLibrary } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }, 300);
  }
  return (
    <Menu>
      <a className="menu-item" onClick={() => scrollTo('home')}>
        <GoHome className="menu-icon" size={35} />
        Home
      </a>
      <a className="menu-item" onClick={() => scrollTo('courses')}>
        <PiCertificate className="menu-icon" size={35} />
        Courses & Certificates
      </a>
      <a className="menu-item" onClick={() => scrollTo('roadmaps')}>
        <TbLocation className="menu-icon" size={35} />
        Roadmaps
      </a>
      <a className="menu-item" onClick={() => scrollTo('coding_practice')}>
        <PiTerminalWindow className="menu-icon" size={35}/>
        Coding Practice
      </a>
      <a className="menu-item" onClick={() => scrollTo('course_tools')}> 
        <SiGoogleclassroom className="menu-icon" size={30} />
        Course Specific Tools
      </a>
      <a className='menu-item' onClick={() => scrollTo('ai')}>
        <LuBot className="menu-icon" size={35} />
        AI Tools
      </a>
      <a className='menu-item' onClick={() => scrollTo('libraries')}>
        <MdOutlineLocalLibrary className="menu-icon" size={35} />
        Libraries & Frameworks
      </a>
      <a className='menu-item' onClick={() => scrollTo('devtools')}>
        <MdDeveloperBoard className="menu-icon" size={35} />
        API Dev & Testing Tools
      </a>
      <a className="menu-item" onClick={() => scrollTo('other')}> 
        <VscTools className='menu-icon' size={30}/>
        Other Tools
      </a>
      <a className='menu-item' onClick={() => scrollTo('contact')}>
        <RiContactsBook2Line className='menu-icon' size={30} />
        Questions & Suggestions
      </a>
      
      
    </Menu>
  );
};

export default Navbar;
