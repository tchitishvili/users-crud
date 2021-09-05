import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.bodyBackground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;