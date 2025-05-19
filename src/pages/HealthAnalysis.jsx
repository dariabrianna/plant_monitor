import './HealthAnalysis.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { time: '08:00', moisture: 60, temperature: 28 },
  { time: '10:00', moisture: 65, temperature: 29 },
  { time: '12:00', moisture: 67, temperature: 30 },
  // ...
];

export default function HealthAnalysis() {
  return (
    <div className="analysis-page">
      <h2>Health Analysis</h2>
      <p>
        Graficele de mai jos te ajută să urmărești evoluția umidității și temperaturii în timp.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="moisture" stroke="#38a169" />
          <Line type="monotone" dataKey="temperature" stroke="#276749" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
