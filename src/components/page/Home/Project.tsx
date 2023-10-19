import GoogleImage from "../../images/image 1.png";
import { ProjectContainer } from "./common";

function Project() {
  return (
    <ProjectContainer id="project">
      <h1>Projects</h1>
      <div className="cardsConatiner">
        <div className="card">
          <img src={GoogleImage} alt="ImageNotFound" />
          <h2>PROJECT 1</h2>
          <div className="line">
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttonContainer">
            <button>Look it up</button>
          </div>
        </div>
        <div className="card">
          <img src={GoogleImage} alt="ImageNotFound" />
          <h2>PROJECT 1</h2>
          <div className="line">
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttonContainer">
            <button>Look it up</button>
          </div>
        </div>
        <div className="card">
          <img src={GoogleImage} alt="ImageNotFound" />
          <h2>PROJECT 1</h2>
          <div className="line">
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttonContainer">
            <button>Look it up</button>
          </div>
        </div>
        <div className="card">
          <img src={GoogleImage} alt="ImageNotFound" />
          <h2>PROJECT 1</h2>
          <div className="line">
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttonContainer">
            <button>Look it up</button>
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
}

export default Project;
