import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --main-color: #F9575a;
        --background: #F9F9F9;
        --black: #3c3c3c;
        --white: #ffffff;
    }
    body{
        margin: 0;
        width: 100vw;
        height: 100vh;
        padding: 0;
        box-sizing: border-box;

        background: #F9F9F9;
        -webkit-tap-highlight-color: transparent;

    }

    ::-webkit-scrollbar {
        display: none;
    }
    

`;
