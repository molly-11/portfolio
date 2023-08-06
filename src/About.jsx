import CreateSkillCard from "./components/SkillCards";
import "./assets/styles/Skills.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function About() {
  const skills = [
    { id: 1, name: "HTML", url: "./images/html5.svg" },
    { id: 2, name: "CSS", url: "./images/css3.svg" },
    { id: 3, name: "Javascript", url: "./images/javascript.svg" },
    { id: 4, name: "React", url: "./images/react.svg" },
    { id: 5, name: "Sass", url: "./images/sass.svg" },
    { id: 6, name: "Bootstrap", url: "./images/bootstrap.svg" },
    { id: 7, name: "Material UI", url: "./images/materialui.svg" },
    { id: 8, name: "Vite", url: "./images/vite.svg" },
    { id: 9, name: "VS Code", url: "./images/vscode.svg" },
    { id: 10, name: "Firebase", url: "./images/firebase.svg" },
  ];

  const otherSkills = [
    { id: 11, name: "Java", url: "./images/java.svg" },
    { id: 12, name: "MySQL", url: "./images/mysql.svg" },
    { id: 13, name: "Android", url: "./images/android.svg" },
  ];
  const otherSkills2 = [
    { id: 21, name: "Jira", url: "./images/jira.svg" },
    { id: 22, name: "Micro Focus ALM", url: "./images/alm.png" },
    { id: 23, name: "SAP", url: "./images/sap.svg" },
  ];

  const languages = [
    { id: 31, name: "Hungarian", url: "./images/hu.svg" },
    { id: 32, name: "English", url: "./images/gb.svg" },
    { id: 33, name: "Finnish", url: "./images/fi.svg" },
    { id: 34, name: "German", url: "./images/de.svg" },
  ];

  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <>
      <div id="introduction">
        <nav><Link to={"/"}>HOME</Link></nav>
        <img src="./images/profile2.jpg" alt="" id="profileimg2" />

        <p id="introtext">
          I'm an enthusiastic and detail oriented junior front-end developer seeking
          for position where I can use my skills in coding, troubleshooting
          complex problems, and assisting in the timely completion of projects.
          I'm highly motivated to deliver engaging and outstanding user
          experience.
        </p>
      </div>
      <div className="skillsDiv">
        <div className="skillsDiv2">
          <h3>
            <span className="greenline">My S</span>kills
          </h3>
          <div className="skillscontainer">
            <CreateSkillCard skills={skills} />
          </div>
        </div>
      </div>
      <div className="skillsDiv">
        <h3>
          <span className="greenline">My O</span>ther Skills
        </h3>
        <div className="skillsDiv2 skills2">
          <div
            className="skillscontainer"
            onClick={() => setIsActive(!isActive)}
          >
            <CreateSkillCard skills={otherSkills} />
            <div>
              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </div>
          </div>
          {isActive && (
            <div className="accordion-content">
              I started code learning with Java in 2021 at Java Tech Programming
              course. During this course I acquired basic knowledge of Java JDK
              8, NetBeans, Android Studio, MySQL. I gained experience in
              algorithmic and object oriented programming. However I liked Java
              and OOP pretty much, I enjoy front-end development with Javascript
              much better as it provides more space for creativity.
            </div>
          )}
          <div
            className="skillscontainer"
            onClick={() => setIsActive2(!isActive2)}
          >
            <CreateSkillCard skills={otherSkills2} />
            <div>
              {isActive2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </div>
          </div>
          {isActive2 && (
            <div className="accordion-content">
              I have always been interested in business operating softwares and
              in my previous positions I became super user of SAP and Oracle ERP
              system. As an ERP tester I am also familiar with project tracking
              softwares like Jira and Micro Focus Application Lifecycle
              Management.
            </div>
          )}
          <div
            className="skillscontainer languages"
            onClick={() => setIsActive3(!isActive3)}
          >
            <CreateSkillCard skills={languages} />
            <div>
              {isActive3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              )}
            </div>
          </div>
          {isActive3 && (
            <div className="accordion-content ">
              Hungarian - mother tongue <br />
              English fluent - C1 <br />
              Finnish intermediate - B2 <br />
              German basic - A2 <br />
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default About;
