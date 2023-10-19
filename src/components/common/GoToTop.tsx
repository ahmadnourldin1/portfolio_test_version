import { useEffect, useState } from "react";
import ErrowUp from "../icons/ErrowUp";
import styled from "styled-components";
import { mobile } from "../../styles/media";

const ButtonConatiner = styled.div`
  position: fixed;
  display: none;
  bottom: 3rem;
  right: 3rem;
  background-color: transparent;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  ${mobile(`
    width: 3rem;
    height: 3rem;
    bottom: 2rem;
  right: 2rem;
  `)}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    bottom: 4rem;
    ${mobile(`
    bottom: 3rem;
    `)}
  }
  svg {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY === 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      });
    };
  }, []);
  return (
    <ButtonConatiner
      style={{ display: isVisible ? "block" : "none" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ErrowUp />
    </ButtonConatiner>
  );
}

export default GoToTop;
