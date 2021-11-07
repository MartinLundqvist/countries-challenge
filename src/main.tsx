import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeStore } from './contexts/themeContext';
import { SearchContextProvider } from './contexts/searchContext';
import { CountriesContextProvider } from './contexts/countriesContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStore>
      <SearchContextProvider>
        <CountriesContextProvider>
          <App />
        </CountriesContextProvider>
      </SearchContextProvider>
    </ThemeStore>
  </React.StrictMode>,
  document.getElementById('root')
);
