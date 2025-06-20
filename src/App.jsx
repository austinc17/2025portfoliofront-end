import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import EduExp from './Components/EduExp'
import Project from './Components/Projects'
import Skills from './Components/Skills'
import Contactme from './Components/Contactme'
import Badges from './Components/Badges'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <EduExp/>
      <Project/>
      <Skills/>
      <Badges/>
      <Contactme/>

     

    </>
  )
}

export default App
