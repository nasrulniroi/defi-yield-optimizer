"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Analytics</h1><p className="text-[var(--muted)] mt-1">Historical yield performance analytics</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Best APY" value="42.3%" icon="🏆" /><StatsCard label="Avg Daily Yield" value="$243" icon="📊" /><StatsCard label="Compounds" value="1,247" icon="🔄" /><StatsCard label="Gas Saved" value="$1,230" icon="⛽" />
      </div>
      <Chart data={chartData} labels={labels} label="Historical APY" />
      <DataTable columns={JSON.stringify(['Date', 'APY', 'Yield', 'Gas Cost'])} data={JSON.stringify([["2024-01-15","18.5%","$412","$12"],["2024-01-14","19.2%","$428","$15"],["2024-01-13","17.8%","$398","$11"],["2024-01-12","20.1%","$456","$18"],["2024-01-11","18.9%","$420","$14"]])} />
    </div>
  )
}