import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Registration from '../pages/Registration/Registration';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
