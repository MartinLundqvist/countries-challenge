import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Home from './components/pages/Home';
import Country from './components/pages/Country';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    // <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        {/* <Grid> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:cca3' element={<Country />} />
        </Routes>
        {/* </Grid> */}
      </Router>
      <Footer />
    </ThemeProvider>
    // </React.Fragment>
  );
};

export default App;
