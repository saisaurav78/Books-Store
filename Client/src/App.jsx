import React from 'react';
import Navbar from './components/Navbar';
import Add from './pages/Add';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </>
  );
};

export default App;
