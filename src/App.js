import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React from 'react';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  exact element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
