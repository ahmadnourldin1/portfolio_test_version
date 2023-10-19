import styled from "styled-components";
import { mobile } from "../../../../styles/media";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 9rem;
  ${mobile(`
    gap:3rem;
  `)}
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    ${mobile(`
     font-size: 6vw;
    `)}
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    max-width: 43rem;
    padding: 1.5rem 0 1.5rem 4rem;
    ${mobile(`
    padding: 0rem;
    font-size:1.2rem;
  `)}
  }
  .buttonConatiner {
    padding: 2rem 0 0 6rem;
    ${mobile(`
    padding: 0rem;
  `)}
    button {
      width: 12rem;
      height: 3.5rem;
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: ${({ theme }) => theme.borderRadius.xxLarge};
      border: none;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.2rem;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      cursor: pointer;
    }
  }
  .bigIcon {
    position: absolute;
    right: 0;
    top: 10rem;
    width: 45rem;
    height: 45rem;
    z-index: -9;
    ${mobile(`
        width: 30rem;
        height: 30rem;
    `)}
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ProjectContainer = styled.div`
  margin-top: 10rem;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 0 5rem 0;
    ${mobile(`
     font-size: 9vw;
    `)}
  }
  .cardsConatiner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    ${mobile(`
        gap:2rem;
        grid-template-columns: 1fr;
        `)}
    .card {
      justify-self: center;
      width: 26rem;
      height: 34rem;
      border-radius: ${({ theme }) => theme.borderRadius.xLarge} 0px;
      background: #0f1624;
      box-shadow: 0px 0px 12px 0px #fff;
      padding: 1rem;
      ${mobile(`
        width: 17rem;
        height: 29rem;
      `)}
      img {
        width: 100%;
      }
      h2 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.8rem;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: 88.5%;
        text-align: center;
        padding: 1.3rem 0;
      }
      .line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 0 1rem 0;
        span {
          display: block;
          height: 0.16rem;
          width: 60%;
          background: ${({ theme }) => theme.colors.secondary};
          border-radius: ${({ theme }) => theme.borderRadius.xxLarge};
        }
      }
      p {
        color: ${({ theme }) => theme.colors.white};

        font-size: 1.2rem;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        ${mobile(`
            font-size: 1rem;
        `)}
      }
      .buttonContainer {
        width: 100%;
        padding-top: 2rem;
        button {
          cursor: pointer;
          border-radius: ${({ theme }) => theme.borderRadius.xxLarge};
          background: ${({ theme }) => theme.colors.secondary};
          width: 9rem;
          height: 3rem;
          border: none;
          color: ${({ theme }) => theme.colors.white};
          font-family: Poppins;
          font-size: 0.9rem;
          font-weight: ${({ theme }) => theme.fontWeights.bold};
        }
      }
    }
  }
`;

export const TechnologiesContainer = styled.div`
  margin-top: 9rem;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 0 5rem 0;
    ${mobile(`
     font-size: 10vw;
    `)}
  }
  .main {
    margin: 0 8rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    ${mobile(`
          margin:0;
          gap:2rem;
        `)}
    .slice {
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem 0 2rem;
        ${mobile(`
          padding:0;
        `)}
        h3 {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.7rem;
          font-weight: ${({ theme }) => theme.fontWeights.bold};
          ${mobile(`
          font-size:1.3rem;
          `)}
        }
        h5 {
          font-size: 1.1rem;
          color: ${({ theme }) => theme.colors.white};
          font-weight: ${({ theme }) => theme.fontWeights.bold};
          position: relative;
          top: 0.5rem;
          ${mobile(`
          font-size:1rem;
          top:0;
          `)}
        }
      }
      .bar {
        width: 100%;
        height: 1.4rem;
        background-color: ${({ theme }) => theme.colors.darkGray};
        border-radius: ${({ theme }) => theme.borderRadius.large};
        ${mobile(`
        height: 1.2rem;
        `)}
        .filler {
          width: 0;
          background: ${({ theme }) => theme.colors.secondary};
          height: 100%;
          border-radius: ${({ theme }) => theme.borderRadius.large};
        }
      }
    }
  }
`;
export const SkillsContainer = styled.div`
  margin-top: 9rem;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 0 5rem 0;
    ${mobile(`
     font-size: 8vw;
    `)}
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    list-style-type: disc;
    padding-left: 10rem;
    ${mobile(`
      grid-template-columns:1fr;
      padding-left: 1rem;
      gap: 1.5rem;
    `)}
    li {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.7rem;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      ${mobile(`
        font-size: 1.3rem;
      `)}
    }
  }
`;
export const AboutMeContainer = styled.div`
  margin-top: 10rem;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 0 5rem 0;
    ${mobile(`
     font-size: 11vw;
    `)}
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    padding-left: 1rem;
    ${mobile(`
      grid-template-columns:1fr;
    `)}
    .part {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      ${mobile(`
      align-items: start;
      height:17rem;
    `)}
      span {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.3rem;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        ${mobile(`
          position: relative;
          right:2.6rem;
          top:2rem;
          transform: rotate(-90deg)
        `)}
      }
      .ball {
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.borderRadius.round};
      }
      p {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.3rem;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        text-align: center;
        width: 100%;
        ${mobile(`
        padding: 0 0 0 2rem;
        max-height: 2rem;
        transform: translateY(-2rem); 
    `)}
      }
    }
    .line {
      content: "";
      position: absolute;
      width: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      height: 0.7rem;
      top: 2.7rem;
      ${mobile(`
      height:100%;
      width:0.7rem !important;
    `)}
    }
  }
`;
