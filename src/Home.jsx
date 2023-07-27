import CreateFooter from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import CreateProjectElement from "./components/ProjectsElement";
import CreateSkillsPart from "./components/SkillsElement";


function Home(){

  return(<>
  <Navbar/>
  <LandingPage/>
  <CreateSkillsPart/>
  <CreateProjectElement/>
  <CreateFooter /></>)
}

export default Home;