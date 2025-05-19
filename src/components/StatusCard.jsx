// src/components/StatusCard.jsx
import React from 'react';
import './StatusCard.css';
import { Heart } from 'lucide-react';

export default function StatusCard({ status }) {
  // Poți extinde pentru diferite stări: Good, Warning, Bad
  const colors = {
    Good:  { bg: '#dafde0', icon: '#38a169', text: '#276749' },
    Warning: { bg: '#fff6d5', icon: '#d69e2e', text: '#744210' },
    Bad:   { bg: '#ffe3e3', icon: '#e53e3e', text: '#742a2a' },
  }[status] || colors.Good;

  return (
    <div
      className="status-card"
      style={{ background: `linear-gradient(90deg, ${colors.bg} 0%, #ffffff 100%)` }}
    >
      <Heart
        className="status-icon"
        style={{ color: colors.icon }}
      />
      <span className="status-label">Plant Health:</span>
      <strong
        className="status-text"
        style={{ color: colors.text }}
      >
        {status}
      </strong>
    </div>
  );
}
