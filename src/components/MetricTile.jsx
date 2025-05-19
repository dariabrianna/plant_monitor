import React from 'react';
import './MetricTile.css';
import { Thermometer, Droplet, Sun, Wind, CloudSnow, Gauge } from 'lucide-react';

const iconMap = {
  temperature: <Thermometer />,
  moisture:    <Droplet />,
  light:       <Sun />,
  humidity:    <Wind />,
  airQuality:  <CloudSnow />,
  waterLevel:  <Gauge />,
};

export default function MetricTile({ type, label, value }) {
  return (
    <div className="metric-tile">
      <div className="icon">{iconMap[type]}</div>
      <div className="info">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
}
