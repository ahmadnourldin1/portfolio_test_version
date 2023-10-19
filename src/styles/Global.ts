import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.colors.primary};
    }
    a{
        text-decoration: none;
        color: black;
    }
    ul,ol{
        list-style: none;
    }

`;
