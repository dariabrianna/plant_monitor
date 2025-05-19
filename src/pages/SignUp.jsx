import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Auth.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }
    login({ email, profilePicture: null });
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <label>Confirm Password</label>
        <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required/>
        <button type="submit" className="auth-btn">Sign Up</button>
        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
