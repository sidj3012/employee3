import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;