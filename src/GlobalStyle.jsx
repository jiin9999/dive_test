import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }  

  body { 
    font-family: "Pretendard GOV Variable", -apple-system, BlinkMacSystemFont, 
    system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", 
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 500;
  }

  // 헤더의 컨테이너도 겸하고 있습니다.
  .page-container {
    max-width: 768px;
    margin: 0 auto;
  }
  
`;

export default GlobalStyle;
