export default function DataTable({ columns, data }: { columns: string[]; data: any[][] }) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-[var(--border)]">{columns.map((c, i) => <th key={i} className="text-left py-3 px-4 text-[var(--muted)] font-medium">{c}</th>)}</tr></thead>
        <tbody>{data.map((row, i) => <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface2)]">{row.map((cell, j) => <td key={j} className="py-3 px-4">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}