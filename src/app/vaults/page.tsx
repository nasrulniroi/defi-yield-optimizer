"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Vaults() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Vaults</h1><p className="text-[var(--muted)] mt-1">Auto-compound vault explorer</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Vaults" value="24" icon="🏦" /><StatsCard label="Total Deposits" value="$12.4M" icon="💰" /><StatsCard label="Auto-Compounds Today" value="156" icon="🔄" /><StatsCard label="Avg Compound Interval" value="4.2h" icon="⏱" />
      </div>
      <Chart data={chartData} labels={labels} label="Vault TVL" />
      <DataTable columns={JSON.stringify(['Vault', 'Strategy', 'APY', 'TVL', 'Last Compound'])} data={JSON.stringify([["ETH Maximizer","Uniswap + Convex","32.1%","$3.2M","2h ago"],["Stable Yield","Curve + Aave","12.5%","$5.1M","45m ago"],["Blue Chip","Lido + Rocket Pool","8.7%","$2.8M","1h ago"],["DeFi Index","Yearn","15.3%","$1.3M","30m ago"]])} />
    </div>
  )
}