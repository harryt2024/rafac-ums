import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div>
      <div>
        <span>Welcome, {user}!</span>
      </div>

      <header><button onClick={handleLogout} class="header-button">Logout</button></header>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
