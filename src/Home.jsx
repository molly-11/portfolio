import CreateFooter from "./components/Footer";
import CreateLandingPage from "./components/LandingPage";
import CreateProjectElement from "./components/ProjectsElement";
import CreateSkillsPart from "./components/SkillsElement";


function Home(){

  return(<>
  <CreateLandingPage/>
  <CreateSkillsPart/>
  <CreateProjectElement/>
  <CreateFooter /></>)
}

export default Home;