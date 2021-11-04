import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/pages/Home';
import Country from './components/pages/Country';
import React from 'react';

// Let's first try with... no wrapper at all
// const Grid = styled.div`
//   display: grid;
//   grid-template-areas:
//     'border header border'
//     'border main border';
//   grid-template-columns: minmax(1rem, 5vw) auto minxmaxa(1rem, 5vw);
//   grid-template-rows: 1fr auto;
// `;

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        {/* <Grid> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:cioc' element={<Country />} />
        </Routes>
        {/* </Grid> */}
      </Router>
    </React.Fragment>
  );
};

export default App;
