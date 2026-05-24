import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'DeFi Yield Optimizer', description: 'Automated yield farming strategy engine' }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className="min-h-screen">
      <nav className="border-b border-[var(--border)] bg-[var(--surface)]"><div className="max-w-7xl mx-auto px-4 py-3"><span className="font-semibold">DeFi Yield Optimizer</span></div></nav>
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </body></html>
  )
}
