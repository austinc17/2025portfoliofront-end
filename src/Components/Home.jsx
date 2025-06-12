import React, { useState } from 'react'
import '../Components/home.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { color, motion } from "framer-motion";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>




const maintext= "Austin Chiwambo"
const secondtext= "Full-stack Developer"

function Home() {
  
  
    return (
        
         <section id='home' className='aboutme'>
         
         
         <img src='/pfp.png' width={'750px'} height={'750px'}></img>
         
         
         <div className='textcontent'>
         <h1>
        {maintext.split("").map((char, index) => (
          <motion.span
            key={index}
             initial={{ y: 0 }}
            className="letter"
            animate={{ color: ["#b2ec9f", "#39ff14", "#b2ec9f"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut",}}
            
            onMouseEnter={(e) => {
               const el = e.target;
               if (!el.classList.contains("bouncing")) {
                    el.classList.add("bouncing");
                    setTimeout(() => {
                         el.classList.remove("bouncing");
                         }, 600); 
                         }
                         }}
           
            
            
           
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <h2>
           {secondtext.split("").map((char, index) => (
          <motion.span
            key={index}
             initial={{ y: 0 }}
            className="letter"
            
            onMouseEnter={(e) => {
               const el = e.target;
               if (!el.classList.contains("bouncing")) {
                    el.classList.add("bouncing");
                    setTimeout(() => {
                         el.classList.remove("bouncing");
                         }, 600); // Match your animation duration
                         }
                         }}
           
            
            
           
          >
            {char}
          </motion.span>
        ))}
      </h2>

         
         
         <p>I am an incoming third-year Computer Science student with a strong passion for full-stack development and a drive to build intuitive, impactful applications. Through hands-on experience across academic projects and competitive hackathons hosted by companies like Microsoft, I have cultivated a broad skill set in technologies including React.js, Node.js, Python (Flask), and PyTorch. Notably, I co-developed two award-winning AI education tools during Microsoft hackathons — one of which used an Azure-powered chatbot to assist neurodiverse learners, earning second place for its innovation and real-world applicability. In my most recent personal project, I built an AI artwork generator using a GAN model I trained from scratch, integrating it into a React/Flask full-stack application with user interactivity and image download features. I bring not only technical proficiency but also a passion for clean, maintainable code, UI/UX detail, and collaborative problem-solving. With a growing portfolio of full-stack builds — from chat platforms to movie app clones — and a deepening interest in AI integration, I am excited to contribute to innovative development teams and continue expanding my impact as a developer.</p>
         <a href="/cvsoftwareengineering28.pdf" download className="download-btn">Download My CV</a>

        

         </div>
         
         </section>
     
    )
  }
  
  export default Home