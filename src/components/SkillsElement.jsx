import { useState } from "react";
import "../assets/styles/Skills.css";
import CreateSkillCard from "./SkillCards";

function CreateSkillsPart() {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", url: "src/assets/images/html5.svg" },
    { id: 2, name: "CSS", url: "src/assets/images/css3.svg" },
    { id: 3, name: "Javascript", url: "src/assets/images/javascript.svg" },
    { id: 4, name: "React", url: "src/assets/images/react.svg" },
    { id: 5, name: "Sass", url: "src/assets/images/sass.svg" },
    { id: 6, name: "Bootstrap", url: "src/assets/images/bootstrap.svg" },
    { id: 7, name: "Material UI", url: "src/assets/images/materialui.svg" },
    { id: 8, name: "Vite", url: "src/assets/images/vite.svg" },
    { id: 9, name: "VS Code", url: "src/assets/images/vscode.svg" },
    { id: 10, name: "Mongo DB", url: "src/assets/images/mongodb.svg" },
  ]);

  return (
    <div id="skillsDiv">
      <div id="skillsDiv2">
      <h3><span className="greenline">My S</span>kills</h3>
      <div id="skillscontainer">
        <CreateSkillCard skills={skills} />
      </div>
      </div>
      
    </div>
  );
}

export default CreateSkillsPart;
