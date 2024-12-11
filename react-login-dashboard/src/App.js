import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null); // State to store the logged-in user

  return (
    <Router>
      <div>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {/* Dashboard Route */}
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
