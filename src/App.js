import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import SelectProfile from './components/SelectProfile';

import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from './components/Footer';
import NetflixApiState from './api/NetflixApiState';
import Data from './components/Data';
import Preview from './components/Preview';

function App() {

  let location = useLocation();

  

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  let isDefaultRoute = location.pathname === '/';

  return (
    <NetflixApiState>


      <div className="App">
        {isDefaultRoute ? null : <Navbar />}
        <Routes>

          <Route exact path='/' element={<SelectProfile />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/data' element={<Data />} />
          <Route exact path='/preview' element={<Preview />} />
          

        </Routes>

        {isDefaultRoute ? null : <Footer />}


      </div>
    </NetflixApiState>

  );
}

export default App;
