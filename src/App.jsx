import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Navigation card routes */}
        <Route path="/lectures" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
            <h1 className="text-3xl font-bold mb-4">Lectures</h1>
            <p className="text-gray-600 mb-6">Access our comprehensive library of video lectures. This page is coming soon with full functionality.</p>
            <button onClick={() => window.history.back()} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Go back
            </button>
          </div>
        </div>} />
        <Route path="/tutorials" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
            <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
            <p className="text-gray-600 mb-6">Follow our step-by-step guided learning tutorials. This page is coming soon with full functionality.</p>
            <button onClick={() => window.history.back()} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Go back
            </button>
          </div>
        </div>} />
        <Route path="/labs" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
            <h1 className="text-3xl font-bold mb-4">Labs</h1>
            <p className="text-gray-600 mb-6">Practice in our hands-on programming environments. This page is coming soon with full functionality.</p>
            <button onClick={() => window.history.back()} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Go back
            </button>
          </div>
        </div>} />
        <Route path="/dashboard" element={<div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-600 mb-6">Track your learning progress and achievements. This page is coming soon with full functionality.</p>
            <button onClick={() => window.history.back()} className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Go back
            </button>
          </div>
        </div>} />
        
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