import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Yield Optimizer', description: 'DeFi Analytics Platform' }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className="min-h-screen">
      <nav className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-50"><div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center font-bold">D</div><span className="font-semibold">Yield Optimizer</span></div>
        <div className="flex gap-6"><a href="/" className="text-sm text-[var(--muted)] hover:text-white">Dashboard</a><a href="/analytics" className="text-sm text-[var(--muted)] hover:text-white">Analytics</a><a href="/settings" className="text-sm text-[var(--muted)] hover:text-white">Settings</a></div>
      </div></nav>
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </body></html>
  )
}