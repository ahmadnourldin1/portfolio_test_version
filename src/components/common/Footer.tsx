import styled from "styled-components";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Figma from "../icons/Figma";
import { mobile } from "../../styles/media";

const FooterContainer = styled.div`
  width: 100%;
  margin: 15rem 0 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .centerContainer {
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    .contact {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10rem;
      ${mobile(`
        gap:1rem;
      `)}
      .part {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        span {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          font-weight: ${({ theme }) => theme.fontWeights.bold};
          ${mobile(`
            font-size: 1rem
          `)}
        }
      }
    }
  }
  .links {
    display: flex;
    gap: 3.5rem;
    justify-content: space-between;
    align-items: center;
    ${mobile(`
      gap:1rem;
    `)}
    svg {
      width: 3rem;
      height: 3rem;
      ${mobile(`
          width: 1.5rem;
          height: 1.5rem;
      `)}
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="centerContainer">
        <div className="contact">
          <div className="part">
            <span>Call me:</span>
            <span>123-456-789</span>
          </div>
          <div className="part">
            <span>Email:</span>
            <span>xxx@xyz.com</span>
          </div>
        </div>
        <div className="links">
          <Github />
          <Linkedin />
          <Figma />
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
