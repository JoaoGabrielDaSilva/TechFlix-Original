import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    input {
        border: 0;
        background: 0;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        background: #2d2b2b;
    }
`;