import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Add additional routes as your application grows */}
        <Route path="/lectures" element={<div>Lectures Page (Coming Soon)</div>} />
        <Route path="/tutorials" element={<div>Tutorials Page (Coming Soon)</div>} />
        <Route path="/labs" element={<div>Labs Page (Coming Soon)</div>} />
        <Route path="/dashboard" element={<div>Dashboard Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;