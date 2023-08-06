
import "../assets/styles/Navbar.css"
import Burger from "./Burger";

function Navbar() {
  return (
    <>
      <nav id="home">
        <img className="logoDiv" src="./images/logo.svg" />
        <Burger/>
        
      </nav>
    </>
  );
}

export default Navbar;
