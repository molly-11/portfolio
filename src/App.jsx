import { useState } from "react";

import "./assets/styles/App.css";
import "./components/LandingPage";
import "./assets/styles/Footer.css";
import CreateLandingPage from "./components/LandingPage";
import CreateSkillsPart from "./components/SkillsElement";
import CreateProjectElement from "./components/ProjectsElement";
import CreateFooter from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
