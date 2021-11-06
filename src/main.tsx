import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeStore } from './contexts/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStore>
      <App />
    </ThemeStore>
  </React.StrictMode>,
  document.getElementById('root')
);
