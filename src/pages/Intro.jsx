import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro-page">
      <h1>Welcome to Plant Health Monitoring</h1>
      <p>
        Tired of guessing when your plants need water or care?  
        Our system connects you to your garden from anywhere—  
        real-time soil moisture, temperature, humidity, light and more,  
        with smart alerts and easy remote controls.
      </p>
      <div className="intro-actions">
        <Link to="/signin" className="intro-btn">
          Sign In
        </Link>
        <Link to="/signup" className="intro-btn outline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
