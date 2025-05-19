// src/components/Header.jsx
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Header.css';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <header className="app-header">
      <h1 className="logo">Plant Health</h1>
      <nav className="nav-links">
        {user ? (
          <>
            {/* doar când eşti logat */}
            <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
              Monitor
            </NavLink>
            <NavLink to="/alerts" className={({isActive}) => isActive ? 'active' : ''}>
              Smart Alerts
            </NavLink>
            <NavLink to="/analysis" className={({isActive}) => isActive ? 'active' : ''}>
              Health Analysis
            </NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? 'active' : ''}>
              Profile
            </NavLink>
            <button onClick={handleLogout} className="nav-logout">
              Log Out
            </button>
          </>
        ) : (
          <>
            {/* doar când nu eşti logat */}
            <NavLink to="/signin" className={({isActive}) => isActive ? 'active' : ''}>
              Sign In
            </NavLink>
            <NavLink to="/signup" className={({isActive}) => isActive ? 'active' : ''}>
              Sign Up
            </NavLink>
          </>
        )}
      </nav>
    </header>
);
}
