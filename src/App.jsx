import { useState } from 'react'

import './assets/styles/App.css'
import './components/LandingPage'
import CreateLandingPage from './components/LandingPage'
import CreateSkillsPart from './components/SkillsElement'

function App() {
 
  return (
    <>
      <CreateLandingPage/>
      <CreateSkillsPart/>
      
    </>
  )
}

export default App
