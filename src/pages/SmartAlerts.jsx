import './SmartAlerts.css';

export default function SmartAlerts() {
  return (
    <div className="alerts-page">
      <h2>Smart Alerts</h2>
      <p>
        Vei primi notificări când plantele au nevoie de apă, când umiditatea scade sub prag
        și când calitatea aerului nu este optimă.
      </p>
      {/* aici poți lista un preview de alerte */}
      <ul className="alerts-list">
        <li>10:00 — Soil moisture low (34%)</li>
        <li>11:30 — Air quality moderate (55 ppm)</li>
        <li>13:45 — Water tank below 20%</li>
      </ul>
    </div>
  );
}
