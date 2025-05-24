import React, { useState } from 'react'
import '../Components/skill.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";





function Skills() {
     const [filter, setFilter] = useState('');

  const skills = [
    { name: 'React.js', icon: <FaReact />, type: 'language' },
    { name: 'GitHub', icon: <FaGithub />, type: 'tech' },
    { name: 'PyTorch', icon: <SiPytorch />, type: 'language' },
    { name: 'Python', icon: <FaPython />, type: 'language' },
    { name: 'HTML', icon: <FaHtml5 />, type: 'language' },
    { name: 'CSS', icon: <FaCss3 />, type: 'language' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, type: 'language' },
    { name: 'JavaScript', icon: <IoLogoJavascript />, type: 'language' },
    { name: 'Node.js', icon: <FaNode />, type: 'language' },
    { name: 'Flask', icon: <SiFlask />, type: 'language' },
    { name: 'Java', icon: <FaJava />, type: 'language' },
    { name: 'Ubuntu', icon: <FaUbuntu />, type: 'tech' },
    { name: 'Linux', icon: <FaLinux />, type: 'tech' },
    { name: 'Bash/terminal', icon: <IoTerminal />, type: 'tech' },
    { name: 'AI', icon: <FaRobot />, type: 'tech' }
  ];

  
  
    return (
        <section id='myskills'>
        <h1>My Skills</h1>
        <div className="skill-filters">
        <button onClick={() => setFilter('all')}> Click to see All My Skills</button>
        <button onClick={() => setFilter('language')}> Click to see the Languages I know</button>
        <button onClick={() => setFilter('tech')}>Click to see the Technologies I know</button>
        </div>
        
        {filter && (
            <div className="skills">
            {skills
            .filter(skill => filter === 'all' || skill.type === filter)
            .map((skill, index) => (
                <span className="skill-badge" key={index}>
                {skill.icon} {skill.name}
                </span>
                ))}
                </div>
                )}

        
       
       
       
       
       
       
       
       
       
       
       
       

       

        </section>
      
      
    )
  }
  
  export default Skills