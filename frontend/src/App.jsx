import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Agent from './pages/Agent';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} /> {/* Use wildcard to allow nested routes */}
        <Route path="/agent/*" element={<Agent />} />
      </Routes>
    </Router>
  );
}

export default App;