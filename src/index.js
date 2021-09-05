import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users/Users';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Users />
  </ThemeProvider>,
  document.getElementById('root')
);
