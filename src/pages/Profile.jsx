// src/pages/Profile.jsx
import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { User } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const {
    user,
    updateEmail,
    updateProfilePicture,
    updatePassword
  } = useContext(AuthContext);

  const [email, setEmail]         = useState(user.email || '');
  const [oldPass, setOldPass]     = useState('');
  const [newPass, setNewPass]     = useState('');
  const [confirmPass, setConfirm] = useState('');
  const fileInputRef = useRef();

  // 1. Change Email
  const handleEmailSubmit = e => {
    e.preventDefault();
    updateEmail(email);
    alert('Email updated');
  };

  // 2. Change Profile Picture
  const handlePicChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateProfilePicture(reader.result);
      alert('Profile picture updated');
    };
    reader.readAsDataURL(file);
  };

  // 3. Change Password
  const handlePasswordSubmit = e => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      alert("Passwords don't match");
      return;
    }
    updatePassword(oldPass, newPass);
    setOldPass('');
    setNewPass('');
    setConfirm('');
    alert('Password change requested');
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      {/* Profile Picture */}
      <div
        className="profile-picture-section"
        onClick={() => fileInputRef.current.click()}
      >
        <div className="profile-picture-wrapper">
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
          ) : (
            <User className="profile-placeholder-icon" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePicChange}
          style={{ display: 'none' }}
        />
        <p>Click on the image to change</p>
      </div>

      {/* Change Email */}
      <form className="profile-form" onSubmit={handleEmailSubmit}>
        <h3>Change Email</h3>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="profile-btn">
          Update Email
        </button>
      </form>

      {/* Change Password */}
      <form className="profile-form" onSubmit={handlePasswordSubmit}>
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={oldPass}
          onChange={e => setOldPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={e => setNewPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={e => setConfirm(e.target.value)}
          required
        />
        <button type="submit" className="profile-btn">
          Update Password
        </button>
      </form>
    </div>
  );
}
