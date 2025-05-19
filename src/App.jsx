// src/App.jsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Intro from './pages/Intro';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import SmartAlerts from './pages/SmartAlerts';
import HealthAnalysis from './pages/HealthAnalysis';

import { AuthContext } from './contexts/AuthContext';
import './App.css';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />

      <main className="app-main">
        <Routes>
          {/* Landing page: Intro or redirect to dashboard */}
          <Route
            path="/"
            element={
              user
                ? <Navigate to="/dashboard" replace />
                : <Intro />
            }
          />

          {/* Public routes: Sign In/Sign Up (doar când nu eşti logat) */}
          <Route
            path="/signin"
            element={
              !user
                ? <SignIn />
                : <Navigate to="/dashboard" replace />
            }
          />
          <Route
            path="/signup"
            element={
              !user
                ? <SignUp />
                : <Navigate to="/dashboard" replace />
            }
          />

          {/* Protected routes (doar când eşti logat) */}
          <Route
            path="/dashboard"
            element={
              user
                ? <Dashboard />
                : <Navigate to="/signin" replace />
            }
          />
          <Route
            path="/alerts"
            element={
              user
                ? <SmartAlerts />
                : <Navigate to="/signin" replace />
            }
          />
          <Route
            path="/analysis"
            element={
              user
                ? <HealthAnalysis />
                : <Navigate to="/signin" replace />
            }
          />
          <Route
            path="/profile"
            element={
              user
                ? <Profile />
                : <Navigate to="/signin" replace />
            }
          />

          {/* Fallback: dacă nu există ruta */}
          <Route
            path="*"
            element={
              user
                ? <Navigate to="/dashboard" replace />
                : <Navigate to="/" replace />
            }
          />
        </Routes>
      </main>
    </>
  );
}
