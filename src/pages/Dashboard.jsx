import React, { useState } from 'react';
import './Dashboard.css';

import MetricTile from '../components/MetricTile';
import HistoryTable from '../components/HistoryTable';
import StatusCard from '../components/StatusCard';

export default function Dashboard() {
  const metrics = [
    { type: 'temperature', label: 'Temperature', value: '30°C' },
    { type: 'waterLevel',  label: 'Water Tank',  value: '99%'  },
    { type: 'airQuality',  label: 'Air Quality',  value: '20 ppm' },
    { type: 'light',       label: 'Light Intensity', value: '6962 lx' },
    { type: 'humidity',    label: 'Humidity',     value: '50%'  },
    { type: 'moisture',    label: 'Soil Moisture', value: '67%'  },
  ];

  // date de istoric de test
  const historyData = {
    temperature: [
      { time: '08:00', value: '28°C' },
      { time: '10:00', value: '29°C' },
      { time: '12:00', value: '30°C' },
    ],
    waterLevel: [
      { time: '08:00', value: '100%' },
      { time: '10:00', value: '99%' },
      { time: '12:00', value: '98%' },
    ],
    airQuality: [
      { time: '08:00', value: '18 ppm' },
      { time: '10:00', value: '19 ppm' },
      { time: '12:00', value: '20 ppm' },
    ],
    light: [
      { time: '08:00', value: '5000 lx' },
      { time: '10:00', value: '6000 lx' },
      { time: '12:00', value: '6962 lx' },
    ],
    humidity: [
      { time: '08:00', value: '45%' },
      { time: '10:00', value: '48%' },
      { time: '12:00', value: '50%' },
    ],
    moisture: [
      { time: '08:00', value: '60%' },
      { time: '10:00', value: '65%' },
      { time: '12:00', value: '67%' },
    ],
  };

  const [openHistory, setOpenHistory] = useState({});

  const toggleHistory = (type) => {
    setOpenHistory(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="dashboard">
      <h1>Plant Health Monitoring</h1>

      {/* ─── Zona de status + buton ─── */}
      <div className="action-section">
        <StatusCard status="Good" />
        <button className="action-btn">Water the plant</button>
      </div>

      {/* ─── Aici vine grid-ul de metrici ─── */}
      <div className="tiles-grid">
        {metrics.map(m => (
          <div key={m.type} className="metric-container">
            <MetricTile {...m} />
            <button
              className="history-toggle-btn"
              onClick={() => toggleHistory(m.type)}
            >
              {openHistory[m.type] ? 'Hide history' : 'Show history'}
            </button>
            {openHistory[m.type] && (
              <HistoryTable
                title={m.label}
                data={historyData[m.type] || []}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
