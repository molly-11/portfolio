import "../assets/styles/LandingPage.css";

function CreateLandingPage() {
  return (
    <>
      <nav className="navbar">
        <div className="logoDiv">
          <div>Logo</div>
          <div>
            <ul id="navList">
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="landingDiv">
        <img src="src\assets\images\profile.jpg" alt="Prolife image" />
        <div>
          <h3>Hello! I'm Edit.</h3>
          <p id="introP">I'm a front-end developer based in Budapest. I love combining the worlds of logic and creative design to make engaging and entertaining user experiences.</p></div>
      </div>
    </>
  );
}

export default CreateLandingPage;
