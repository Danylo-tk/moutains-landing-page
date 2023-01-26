import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: calc(10 / 16 * 100%);
    }

    *{
        margin: 0;
        padding: 0;
        color: #fff;
    }
`;

export default GlobalStyle;
