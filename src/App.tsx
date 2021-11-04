import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Country from './Country';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:cioc' element={<Country />} />
      </Routes>
    </Router>
  );
};

export default App;
