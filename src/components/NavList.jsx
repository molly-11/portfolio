import { Link } from "react-router-dom";
import "../assets/styles/LandingPage.css";
import { styled } from "styled-components";


const StyledNavList= styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
flex-wrap: nowrap;
margin-right: 20px;
gap: 20px;

@media only screen and (max-width: 600px) {
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: fixed;
    top: 20px;
    right: 0;
    padding: 30px;
    gap: 20px;
    transition: transform 0.3s ease-in-out;
}

`;

function NavList(props) {
  const open = props.open;
  const styles = {
    open: {
      display: open ? "flex" : "none",
      opacity: open ? "1" : "0",
      transform: open ? "translateX(0)" : "translateX(100%)",
    }
  };
  return (
    <>
      <StyledNavList id="navList" open={open}>
        <Link to={"/about"}>ABOUT</Link>

        <a href="#projectsDiv">PROJECTS</a>

        <Link to={"/contact"}>CONTACT</Link>
      </StyledNavList>

    </>
  );
}

export default NavList;
