import { Link } from "react-router-dom";
import NavList from "./NavList";
import "../assets/styles/Navbar.css"
import Burger from "./Burger";

function Navbar() {
  return (
    <>
      <nav id="home">
        <img className="logoDiv" src="src/assets/images/logo.svg" />
        <Burger/>
        
      </nav>
    </>
  );
}

export default Navbar;
