import { useState } from "react";
import CreateProjectCard from "./ProjectCards";
import "../assets/styles/ProjectCards.css";



function CreateProjectElement() {
  const projects = [
    {
      id: 1,
      name: "Web shop",
      desc: "Frontend of a made up webshop, created with React, using react hooks: useState, useEffect, useContext. Context provider makes the shopping cart data update easier.  Responsive hamburger menu created with styled-components. Style created with CSS, aims to get a minimalist user friendly design.",
      img: "./images/webshop.JPG",
      tech: ["REACT","JS", "Vite", "CSS"],
      github: "https://github.com/molly-11/webshop-w-react",
      demo: "https://selmeczi-edit-webshop-w-react.vercel.app/",
    },
    {
      id: 2,
      name: "Weather App",
      desc: "App created with React, fetching data from https://www.weatherapi.com/. Style created with Material UI and CSS. The app is providing current and hourly weather data of today and 3 days forecast of the requested city",
      img: "./images/weather.JPG",
      tech: ["REACT", "MATERIAL UI", "CSS"],
      github: "https://github.com/molly-11/weather_app_react",
      demo: "",
    },

    {
      id: 3,
      name: "Webpage of an artist",
      desc: "More details coming soon",
      img: "./images/art.JPG",
      tech: ["React", "Firebase", "Vite"],
      github: "",
      demo: "",
    },
  ];

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
