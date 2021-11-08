import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContextProvider';
import { SearchContextProvider } from './contexts/SearchContextProvider';
import { CountryContextProvider } from './contexts/CountryContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <CountryContextProvider>
          <App />
        </CountryContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
