import React, { useState } from 'react'
import '../Components/Projects.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import ProjectCard from './Project-item';



function Project() {
  
    
  
    return (
        <section id='projects' >
        <h1>Projects</h1>
        <div className='projectslist'>
        <ProjectCard
        title="AI Artwork Generator"
        description="Integrated the GAN backend with a React frontend via REST API, flask and PyTorch, allowing users to generate and download new AI-generated artworks on demand."
        tech="React · Flask · PyTorch · CSS"
      />
      <ProjectCard
        title="Disney + clone"
        description="Developed a Disney Plus clone using React js and Tailwind CSS whilst implementing API calls to display latest and recommended movies and allowing users to search with genre filters"
        tech="React · Tailwind CSS"
      />
       <ProjectCard
        title="Full-stack chat app"
        description="Developed a full-stack chat application using React.js and Node.js to enhance user interaction and engagement. Integrated authentication and chat functionality, enabling seamless user login and registration. Maintained reliable chat history using the ChatEngine.io API and optimized backend operations with a REST server to ensure smooth performance."
        tech="React · CSS · Node.js · API's "
      />
      <ProjectCard
        title="Python football game"
        description="Developed a football game in Python using the Tkinter GUI library. Implemented real-time player movement and AI-controlled opponents using key event bindings and a timed animation loop. Integrated collision detection functions to determine interactions between the thrown football and AI players, triggering randomized outcomes (catch or drop) upon collision. Successful catches increment the score, while a countdown timer manages the one-minute game duration, ensuring time-bound gameplay and responsiveness."
        tech="Python · Tkinter"
      /> 
        </div>
       

        </section>
        
      
    )
  }
  
  export default Project