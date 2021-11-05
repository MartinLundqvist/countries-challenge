import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, lightTheme } from './contexts/themes';
// import GlobalStyle from './contexts/GlobalStyle';
import { ThemeStore } from './contexts/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStore>
      <App />
    </ThemeStore>
  </React.StrictMode>,
  document.getElementById('root')
);
