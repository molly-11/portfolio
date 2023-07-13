import { useState } from "react";
import CreateProjectCard from "./ProjectCards";
import "../assets/styles/ProjectCards.css";

import CreateFooter from "./Footer";

function CreateProjectElement() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Weather App",
      desc: "App created with React, fetching data from https://www.weatherapi.com/. Styling with Material UI and CSS.",
      img: "src/assets/images/weather.JPG",
      tech: ["REACT", "MATERIAL UI", "CSS"],
      github: "",
      demo: "http://localhost:5174/",
    },
    {
      id: 2,
      name: "Web shop",
      desc: "App created with React, fetching data from https://www.weatherapi.com/. Styling with Material UI and CSS.",
      img: "src/assets/images/weather.JPG",
      tech: ["REACT", "Bootstrap", "Vite"],
      github: "",
      demo: "http://localhost:5174/",
    },
    {
      id: 3,
      name: "To do list",
      desc: "App created with React, fetching data from https://www.weatherapi.com/. Styling with Material UI and CSS.",
      img: "src/assets/images/weather.JPG",
      tech: ["Vanilla JS", "SCSS", "Vite"],
      github: "",
      demo: "http://localhost:5174/",
    },
  ]);

  return (
    <>
      <div id="projectsDiv">
        <h3>My Projects</h3>
        <div id="projectscontainer">
          <CreateProjectCard projects={projects} />
        </div>
      </div>
      
    </>
  );
}

export default CreateProjectElement;
