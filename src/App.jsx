import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Additional routes */}
        <Route path="/features" element={<div>Features Page (Coming Soon)</div>} />
        <Route path="/pricing" element={<div>Pricing Page (Coming Soon)</div>} />
        <Route path="/resources" element={<div>Resources Page (Coming Soon)</div>} />
        <Route path="/login" element={<div>Login Page (Coming Soon)</div>} />
        <Route path="/signup" element={<div>Signup Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;