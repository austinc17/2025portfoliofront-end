import React, { useState } from 'react'
import '../Components/edu.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import WorkItem from './Work-Item';
import CourseItem from './Course-item';


function EduExp() {
  
    
  
    return (
        <section id="experienceandedu">
        <div className="experience-section">
          <div className="box">
          
            <div className='educont'>
            <h1>Education</h1>
            <ul className='edulist'>
                <li><CourseItem
            role="Degree:"
            description="Bsc Hons Computer Science"

            /></li>
                <li><CourseItem
            role="University:"
            description="Richmond The American International University London"

            /></li>
                <li><CourseItem
            role="Expected graduatiion date:"
            description="December 2026"

            /></li>
                <li><CourseItem
            role="Cumulative GPA:"
            description="2.8"

            /></li>
            </ul>
            <ul className='cw'><strong>Relevant Coursework</strong>
            <li><CourseItem
            role="Web Development"
            description="Gained profficiency in HTML, CSS and javascript in addition to understanding backend development"

            /></li>
            <li><CourseItem
            role="System Architecture"
            description="Gained experience in Unbuntu and linux virtual machines making use of the terminal to search and create directories etc whilst also learning C"

            /></li>
            <li><CourseItem
            role="Artificial Intelligence"
            description="Developed anunderstanding of GAN's and binary classification models for training and ploting data using pytorch"

            /></li>
            <li><CourseItem
            role="Programming for Applications"
            description="Paired my understanding of object-oriented programming with the python Kivy library to learn how to make apps and games"
            /></li>
            <li><CourseItem
            role="Systems Analysis and design"
            description="Gained knowledge of the software development life cycle and the variety of development methodologies and how requirements are defined in addition to learning about critical path"
            /></li>
            <li>
            <CourseItem
            role="Data-structures and algorithms"
            description="Gained knowledge on core algorithms such as linked lists, trees and sorting algorithms in addition to learning about big O notation in addition to space and time complexities "
            /></li>
            </ul>

            </div>
           
            
          </div>
          <div className="box">
            <h1>Experience</h1>

            <WorkItem
            role="Hackathon Participant"
            company="Microsoft"
            location="London"
            date="2024"
            description="Developed an AI tool to help teachers build personalized plans for neurodiverse students using HTML, CSS and python flask."

            />
            <WorkItem
            role="Hackathon Participant"
            company="Microsoft"
            location="London"
            date="2024"
            description="Developed an AI tool to teach children how to code using HTML, CSS and python flask."

            />
            <WorkItem
            role=" Embrace program Participant"
            company="Microsoft"
            location="London"
            date=" Feb-May 2024"
            description="Recieved mentorship on CV tailoring and Linkedin profile optimization in addition to gaining knowledge on software engineering at microsoft."

            

            />
            <WorkItem
            role="Hackathon Participant"
            company="IBM"
            location="London"
            date="2024"
            description="Gained insight on the development methodologies used at IBM as well as insight on their quantum computing operations. I ultimately finished second place in the hackathon"

            />
            <WorkItem
            role="Software Developer Intern"
            company="GE Aerospace"
            location="Remote"
            date="2023"
            description="Completed a Vue.js UI development simulation for the Frontend Development Team, showcasing proficiency in the Vue SFC Playground by building dynamic components, implementing interactive features like a compute button, and drafting technical requirements that aligned engineering solutions with business needs."

            />
            <WorkItem
            role="virtual software engineering intern"
            company="CommonWealth Bank"
            location="London"
            date="2024"
            description="Completed a job simulation with the Commonwealth Bank Software Engineering Program, where I developed a responsive web page using HTML and CSS, explored financial cybersecurity principles, and proposed secure web hosting practices to support scalable, threat-resistant infrastructure."

            />
            <WorkItem
            role="virtual software engineering intern"
            company="JP.Morgan"
            location="London"
            date="2024"
            description="Completed an engineering simulation with JPMorgan Chase & Co.'s credit-card rewards team, where I used Java and Object-Oriented Programming to implement a new class for reward conversions, wrote JUnit tests to validate cash-to-miles functionality, and practiced Git workflows by forking, cloning, committing, and pushing changes to a shared repository."

            />
          </div>
        </div>
      </section>
      
        
      
    )
  }
  
  export default EduExp