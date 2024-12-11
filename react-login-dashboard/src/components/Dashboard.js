import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'right' }}>
        <span>Welcome, {user}!</span>
        <button 
          onClick={handleLogout} 
          style={{ marginLeft: '20px', padding: '5px 10px' }}
        >
          Logout
        </button>
      </div>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
