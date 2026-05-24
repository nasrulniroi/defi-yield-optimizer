"use client"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default function Chart({ data, labels, label, color = '#818cf8' }: { data: number[]; labels: string[]; label: string; color?: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">{label}</h3>
      <Line data={{ labels, datasets: [{ label, data, borderColor: color, backgroundColor: color + '20', fill: true, tension: 0.4, pointRadius: 0 }] }}
        options={{ responsive: true, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#2d2d4a' } }, y: { grid: { color: '#2d2d4a' } } } }} />
    </div>
  )
}