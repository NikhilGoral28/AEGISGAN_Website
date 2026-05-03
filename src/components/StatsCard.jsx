import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

export default function StatsCard({ stats }) {
  const data = {
    labels: ['Normal', 'Attack'],
    datasets: [
      {
        data: [stats.total - stats.attacks, stats.attacks],
        backgroundColor: ['#4ade80', '#f87171'],
        hoverBackgroundColor: ['#86efac', '#fca5a5'],
      },
    ],
  };

  return (
    <div className="card-glass p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Analysis Overview</h2>
      <div className="flex items-center">
        <Pie data={data} options={{ plugins: { legend: { display: false } } }} />
        <div className="ml-6">
          <p>Total Logs: {stats.total}</p>
          <p>Attack Logs: {stats.attacks}</p>
          <p>Avg Confidence: {(stats.avgConfidence * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}
