import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }  

  .page-container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
