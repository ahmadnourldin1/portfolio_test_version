import { TechnologiesContainer } from "./common";

function Technologies() {
  return (
    <TechnologiesContainer id="technology">
      <h1>Technologies</h1>
      <div className="main">
        <div className="slice">
          <div className="text">
            <h3>Html</h3>
            <h5>Advanced</h5>
          </div>
          <div className="bar">
            <div style={{ width: "80%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>CSS, Sass & Bootstrap</h3>
            <h5>Advanced</h5>
          </div>
          <div className="bar">
            <div style={{ width: "80%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>JavaScript, TypeScript, JQuery</h3>
            <h5>Advanced</h5>
          </div>
          <div className="bar">
            <div style={{ width: "80%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>UI design in Figma</h3>
            <h5>Regular</h5>
          </div>
          <div className="bar">
            <div style={{ width: "50%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>Angular</h3>
            <h5>Beginner</h5>
          </div>
          <div className="bar">
            <div style={{ width: "20%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>React</h3>
            <h5>Beginner</h5>
          </div>
          <div className="bar">
            <div style={{ width: "20%" }} className="filler"></div>
          </div>
        </div>
        <div className="slice">
          <div className="text">
            <h3>React Native</h3>
            <h5>Beginner</h5>
          </div>
          <div className="bar">
            <div style={{ width: "20%" }} className="filler"></div>
          </div>
        </div>
      </div>
    </TechnologiesContainer>
  );
}

export default Technologies;
