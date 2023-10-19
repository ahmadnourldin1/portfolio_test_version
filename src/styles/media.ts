import { css } from "styled-components";

export const mobile = (styles: string) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

export const desktop = (styles: string) => css`
  @media (min-width: 769px) and (max-width: 1300px) {
    ${styles}
  }
`;

export const desktopLarge = (styles: string) => css`
  @media (min-width: 1301px) {
    ${styles}
  }
`;
