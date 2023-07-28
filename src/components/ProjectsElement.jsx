import { useState } from "react";
import CreateProjectCard from "./ProjectCards";
import "../assets/styles/ProjectCards.css";



function CreateProjectElement() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Web shop",
      desc: "Frontend of a webshop, created with React, using react hooks: useState, useEffect, useContext. Context provider makes the shopping cart data update easier.  Responsive hamburger menu created with styled-components. Style created with CSS, aims to get a minimalist user friendly design.",
      img: "src/assets/images/webshop.JPG",
      tech: ["REACT", "Vite", "CSS"],
      github: "",
      demo: "http://localhost:5174/",
    },
    {
      id: 2,
      name: "Weather App",
      desc: "App created with React, fetching data from https://www.weatherapi.com/. Style created with Material UI and CSS. The app is providing current and hourly weather data of today and 3 days forecast of the requested city",
      img: "src/assets/images/weather.JPG",
      tech: ["REACT", "MATERIAL UI", "CSS"],
      github: "",
      demo: "http://localhost:5174/",
    },

    {
      id: 3,
      name: "Webpage of an artist",
      desc: "More details coming soon",
      img: "src/assets/images/art.JPG",
      tech: ["React", "SCSS", "Vite"],
      github: "",
      demo: "",
    },
  ]);

  return (
    <>
      <div id="projectsDiv">
        <h3><span className="greenline">My P</span>rojects</h3>
        <div id="projectscontainer">
          <CreateProjectCard projects={projects} />
        </div>
      </div>
      
    </>
  );
}

export default CreateProjectElement;
