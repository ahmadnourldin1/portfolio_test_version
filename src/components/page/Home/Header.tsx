import { HeaderContainer } from "./common";
import Boxses from "../../icons/Boxses";

function Header() {
  return (
    <HeaderContainer>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="buttonConatiner">
        <button>Let's begin</button>
      </div>
      <div className="bigIcon">
        <Boxses />
      </div>
    </HeaderContainer>
  );
}

export default Header;
