import styled from "styled-components";
import Logo from "../icons/Logo";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Figma from "../icons/Figma";
import { Link } from "react-router-dom";
import { mobile } from "../../styles/media";
import { HashLink } from "react-router-hash-link";
import Menu from "../icons/Menu";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Close from "../icons/Close";
import { useState } from "react";

const NavbarContainer = styled.div`
  width: 100%;
  height: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  .centerContainer {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 3rem;
      height: 3rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .logoText {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.XLarge};
    }
  }
  .centerMain {
    transition: all 0.4s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem 0 10rem;
    ${mobile(`
      height:100%;
      max-width:15rem;
      justify-content: start;
      position:fixed;
      top:0;
      left:-100%;
      background-color:#1E2C48;
      flex-direction:column;
      padding:2rem 0 0 0;
      z-index:99;
    `)}
    .closeButton {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: right;
      padding-right: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        transform: rotate(45deg);
        cursor: pointer;
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }
    .centerLinks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6rem;
      ${mobile(`
        flex-direction:column;
        gap:3rem; 
        justify-content: start;
        padding-top: 2rem;
      `)}
      a {
        ${mobile(`
        text-align: left;
        width: 100%;
        height:100%;
        padding-left: 4rem;
        `)}
        span {
          color: ${({ theme }) => theme.colors.white};
          font-size: ${({ theme }) => theme.fontSizes.XLarge};
          ${mobile(`
            font-size: 1.4rem;
          `)}
        }
      }
    }
    .socialMediaLinks {
      ${mobile(`
        gap:1rem; 
        justify-content: start;
        padding:3rem 0 0 4rem;
      `)}
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  .menuIcons {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: none;
    ${mobile(`
    display:block;
  `)}
    svg {
      width: 100%;
      height: 100%;
      path {
        stroke: ${({ theme }) => theme.colors.white} !important;
      }
    }
  }
`;

function Navbar() {
  const { isMobile } = useBreakpoint();
  const [leftStyle, setLeftStyle] = useState("-100%");
  return (
    <NavbarContainer>
      <div className="centerContainer">
        <div className="logo">
          <Link to="/" className="icon">
            <Logo />
          </Link>
          <Link to="/" className="logoText">
            Portfolio
          </Link>
        </div>
        <div className="centerMain" style={{ left: leftStyle }}>
          {isMobile && (
            <div className="closeButton">
              <div onClick={() => setLeftStyle("-100%")}>
                <Close />
              </div>
            </div>
          )}
          <div className="centerLinks">
            <HashLink smooth to="/#project">
              <span>Projects</span>
            </HashLink>
            <HashLink smooth to="/#technology">
              <span>Technologies</span>
            </HashLink>
            <HashLink smooth to="/#about">
              <span>About me</span>
            </HashLink>
          </div>
          <div className="socialMediaLinks">
            <Github />
            <Linkedin />
            <Figma />
          </div>
        </div>
        <div className="menuIcons" onClick={() => setLeftStyle("0%")}>
          <Menu />
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
