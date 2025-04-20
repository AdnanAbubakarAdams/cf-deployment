// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';

import CatFacts from './CatFacts';
import Homepage from './Homepage';
import Navbar from './Navbar';


function App() {

  return (
    <div className='main-div'>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/Homepage' element={<Homepage/>} />
        <Route path="/catfacts" element={<CatFacts/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

