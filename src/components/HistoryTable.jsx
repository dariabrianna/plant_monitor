import React from 'react';
import './HistoryTable.css';

export default function HistoryTable({ title, data }) {
  return (
    <div className="history-table">
      <h2>{title} History</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.time}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
