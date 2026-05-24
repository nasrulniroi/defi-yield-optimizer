"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Dashboard</h1><p className="text-[var(--muted)] mt-1">Auto-compound yields across 40+ protocols</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total TVL" value="$12.4M" change={5.2} icon="💰" /><StatsCard label="Avg APY" value="18.7%" change={2.1} icon="📈" /><StatsCard label="Active Vaults" value="24" icon="🏦" /><StatsCard label="Harvested" value="$892K" icon="🌾" />
      </div>
      <Chart data={chartData} labels={labels} label="Portfolio Growth" />
      <DataTable columns={JSON.stringify(['Vault', 'Protocol', 'APY', 'TVL', 'Status'])} data={JSON.stringify([["ETH-USDC Vault","Uniswap V3","24.5%","$2.1M","Active"],["stETH","Lido","8.2%","$5.4M","Active"],["USDC","Aave V3","5.1%","$3.2M","Active"],["CRV","Convex","42.3%","$1.8M","Active"],["GLP","GMX","28.7%","$950K","Active"]])} />
    </div>
  )
}