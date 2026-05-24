"use client"
export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">DeFi Yield Optimizer</h1>
        <p className="text-[var(--muted)] mt-1">Automated yield farming strategy engine monitoring 40+ protocols across 8 chains</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card"><span className="text-sm text-[var(--muted)]">Total TVL</span><div className="text-2xl font-bold mt-1">$12.4M</div></div>
        <div className="card"><span className="text-sm text-[var(--muted)]">Avg APY</span><div className="text-2xl font-bold mt-1">18.7%</div></div>
        <div className="card"><span className="text-sm text-[var(--muted)]">Active Vaults</span><div className="text-2xl font-bold mt-1">24</div></div>
        <div className="card"><span className="text-sm text-[var(--muted)]">Harvested</span><div className="text-2xl font-bold mt-1">$892K</div></div>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Top Vaults</h3>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[var(--border)]"><th className="text-left py-3 px-4 text-[var(--muted)]">Vault</th><th className="text-left py-3 px-4 text-[var(--muted)]">APY</th><th className="text-left py-3 px-4 text-[var(--muted)]">TVL</th></tr></thead>
          <tbody>
            <tr className="border-b border-[var(--border)]"><td className="py-3 px-4">ETH-USDC Vault</td><td className="py-3 px-4">24.5%</td><td className="py-3 px-4">$2.1M</td></tr>
            <tr className="border-b border-[var(--border)]"><td className="py-3 px-4">stETH</td><td className="py-3 px-4">8.2%</td><td className="py-3 px-4">$5.4M</td></tr>
            <tr className="border-b border-[var(--border)]"><td className="py-3 px-4">USDC</td><td className="py-3 px-4">5.1%</td><td className="py-3 px-4">$3.2M</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
