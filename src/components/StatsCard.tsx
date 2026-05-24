export default function StatsCard({ label, value, change, icon }: { label: string; value: string; change?: number; icon?: string }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-[var(--muted)]">{label}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {change !== undefined && (
        <div className={`text-sm mt-1 ${change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {change >= 0 ? '+' : ''}{change.toFixed(2)}%
        </div>
      )}
    </div>
  )
}