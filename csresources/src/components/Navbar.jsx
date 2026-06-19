import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { PiCertificate, PiTerminalWindow } from "react-icons/pi"
import { TbLocation } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { LuBot, LuContact } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdDeveloperBoard, MdOutlineLocalLibrary, MdExpandMore, MdExpand } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }, 300);
  }
  return (
    <Menu>
      <Link className="menu-item" to="/Develops">
        Develops
      </Link>
      <Link className="menu-item resources-toggle" to = "/Resources" onClick={() => setIsOpen(prev => !prev)}>
        <MdExpandMore className="menu-icon" size={35} />
        Resources
      </Link>
      {isOpen && 
      <div className = {`resources-submenu ${isOpen ? 'open' : ''}`}>
        <a className="menu-item sub" onClick={() => scrollTo('courses')}>
          <PiCertificate className="menu-icon" size={35} />
          Courses & Certificates
        </a> 
        <a className="menu-item sub" onClick={() => scrollTo('roadmaps')}>
          <TbLocation className="menu-icon" size={35} />
          Roadmaps
        </a>
        <a className="menu-item sub" onClick={() => scrollTo('coding_practice')}>
          <PiTerminalWindow className="menu-icon" size={35}/>
          Coding Practice
        </a>
        <a className="menu-item sub" onClick={() => scrollTo('course_tools')}> 
          <SiGoogleclassroom className="menu-icon" size={30} />
          Course Specific Tools
        </a>
        <a className='menu-item sub' onClick={() => scrollTo('ai')}>
          <LuBot className="menu-icon" size={35} />
          AI Tools
        </a>
        <a className='menu-item sub' onClick={() => scrollTo('libraries')}>
          <MdOutlineLocalLibrary className="menu-icon" size={35} />
          Libraries & Frameworks
        </a>
        <a className='menu-item sub' onClick={() => scrollTo('devtools')}>
          <MdDeveloperBoard className="menu-icon" size={35} />
          API Dev & Testing Tools
        </a>
        <a className="menu-item sub" onClick={() => scrollTo('other')}> 
          <VscTools className='menu-icon' size={30}/>
          Other Tools
        </a>
      </div>
      }
      
      <a className='menu-item' onClick={() => scrollTo('contact')}>
        <RiContactsBook2Line className='menu-icon' size={30} />
        Contact
      </a>
      
      
    </Menu>
  )
}

export default Navbar;
