import { useState } from 'react'

import './assets/styles/App.css'
import './components/LandingPage'
import "./assets/styles/Footer.css";
import CreateLandingPage from './components/LandingPage'
import CreateSkillsPart from './components/SkillsElement'
import CreateProjectElement from './components/ProjectsElement'
import CreateFooter from './components/Footer'


function App() {
 
  return (
    <>
      <CreateLandingPage/>
      <CreateSkillsPart/>
      <CreateProjectElement/>
      <CreateFooter />
    </>
  )
}

export default App
