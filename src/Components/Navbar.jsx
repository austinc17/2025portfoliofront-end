import React, { useState } from 'react'
import '../Components/navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";



function Navbar() {
  
    const[isOpen, setIsOpen]= useState(false);
  
    
      const toggleNav =() => {
        setIsOpen(!isOpen);
    }
  
    return (
      <div className='navbarclass'>
      <button type="button" onClick={toggleNav} className="menubtn"> {isOpen ? <RxCross2 size={50} className="glow-icon" /> : <FiAlignJustify size={50} className="glow-icon" />}</button>

       

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
      <li><a href="#experienceandedu" onClick={() => setIsOpen(false)}>Experience and education</a></li>
      <li><a href="#myskills" onClick={() => setIsOpen(false)}>My skills</a></li>
      <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
      <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      <li><a href="#badges" onClick={() => setIsOpen(false)}>Badges and certifications</a></li>
      </ul>

     
      
          
      </div>
    )
  }
  
  export default Navbar