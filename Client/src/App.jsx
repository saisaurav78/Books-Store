import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Add from './pages/Add';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </>
  );
};

export default App;
