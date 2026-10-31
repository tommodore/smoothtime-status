export type UsageStats = {
  day_utc: string
  requests_per_region_since_start: Record<string, number>
  unique_clients_today: number
}

const LABELS: Record<string, string> = {
  'europe-west': 'Europe West', 'europe-central': 'Europe Central', 'europe-east': 'Europe East',
  'us-eastern': 'US Eastern', 'us-central': 'US Central', 'us-mountain': 'US Mountain', 'us-pacific': 'US Pacific',
  'australia-sydney': 'Australia Sydney', 'new-zealand': 'New Zealand', chile: 'Chile', argentina: 'Argentina',
}

export default function UsageCard({ stats }: { stats: UsageStats | null }) {
  if (!stats) {
    return (
      <section className="st-card st-usage">
        <h2>Usage</h2>
        <p className="st-usage-note">Usage stats are currently unavailable.</p>
      </section>
    )
  }
  const rows = Object.entries(stats.requests_per_region_since_start || {}).sort((a, b) => b[1] - a[1])
  const total = rows.reduce((s, [, n]) => s + n, 0)
  return (
    <section className="st-card st-usage">
      <h2>Usage</h2>
      <div className="st-usage-kpis">
        <div><span className="st-usage-num">{stats.unique_clients_today.toLocaleString('en-US')}</span><span>unique clients today ({stats.day_utc} UTC)</span></div>
        <div><span className="st-usage-num">{total.toLocaleString('en-US')}</span><span>requests since last server restart</span></div>
      </div>
      {rows.length > 0 && (
        <table className="st-usage-table">
          <tbody>
            {rows.map(([r, n]) => (
              <tr key={r}><td>{LABELS[r] || r}</td><td>{n.toLocaleString('en-US')}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
