import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
