"use client"
import { Line } from 'react-chartjs-2'
import { Chart as C, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js'
C.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)
export default function Chart({ data, labels, label }: { data: number[]; labels: string[]; label: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">{label}</h3>
      <Line
        data={{ labels, datasets: [{ data, borderColor: '#818cf8', backgroundColor: '#818cf820', fill: true, tension: 0.4, pointRadius: 0 }] }}
        options={{ responsive: true, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#2d2d4a' } }, y: { grid: { color: '#2d2d4a' } } } }}
      />
    </div>
  )
}
