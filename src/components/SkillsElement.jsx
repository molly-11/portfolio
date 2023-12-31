import { useState } from "react";
import "../assets/styles/Skills.css";
import CreateSkillCard from "./SkillCards";

function CreateSkillsPart() {
  const skills  = [
    { id: 1, name: "HTML", url: "./images/html5.svg" },
    { id: 2, name: "CSS", url: "./images/css3.svg" },
    { id: 3, name: "Javascript", url: "./images/javascript.svg" },
    { id: 4, name: "React", url: "./images/react.svg" },
    { id: 5, name: "Sass", url: "./images/sass.svg" },
    { id: 6, name: "Bootstrap", url: "./images/bootstrap.svg" },
    { id: 7, name: "Material UI", url: "./images/materialui.svg" },
    { id: 8, name: "Vite", url: "./images/vite.svg" },
    { id: 9, name: "Github", url: "./images/github.svg" },
    { id: 10, name: "Firebase", url: "./images/firebase.svg" },
    { id: 11, name: "Node JS", url: "./images/node.svg" },
    { id: 12, name: "Express JS", url: "./images/express.svg" },
    { id: 13, name: "Java", url: "./images/java.svg" },
    { id: 14, name: "MySQL", url: "./images/mysql.svg" },
  ];

  return (
    <div className="skillsDiv">
      <div className="skillsDiv2">
      <h3><span className="greenline">My S</span>kills</h3>
      <div className="skillscontainer">
        <CreateSkillCard skills={skills} />
      </div>
      </div>
      
    </div>
  );
}

export default CreateSkillsPart;
