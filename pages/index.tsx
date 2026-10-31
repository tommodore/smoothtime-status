import Head from 'next/head'
import { MonitorTarget } from '@/types/config'
import { maintenances, pageConfig } from '@/uptime.config'
import OverallStatus from '@/components/OverallStatus'
import MonitorList from '@/components/MonitorList'
import MonitorDetail from '@/components/MonitorDetail'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import UsageCard, { UsageStats } from '@/components/UsageCard'
import { useTranslation } from 'react-i18next'
import { CompactedMonitorStateWrapper, getFromStore } from '@/worker/src/store'

export const runtime = 'experimental-edge'

export default function Home({
  compactedStateStr,
  monitors,
  usage,
}: {
  compactedStateStr: string
  monitors: MonitorTarget[]
  usage: UsageStats | null
}) {
  const { t } = useTranslation('common')
  const state = new CompactedMonitorStateWrapper(compactedStateStr).uncompact()

  // Show single monitor detail when hash is present
  const monitorId = typeof window !== 'undefined' ? window.location.hash.substring(1) : ''
  if (monitorId) {
    const monitor = monitors.find((m) => m.id === monitorId)
    if (!monitor) return <div className="st-wrap" style={{ padding: 40, textAlign: 'center' }}>Monitor not found</div>
    return <MonitorDetail monitor={monitor} state={state} />
  }

  return (
    <>
      <Head>
        <title>smoothtime Status</title>
        <meta name="theme-color" content="#0a0a0b" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <Header />
      <main className="st-main">
        <div className="st-wrap">
          <section className="st-card st-overall">
            <OverallStatus state={state} monitors={monitors} maintenances={maintenances} />
          </section>
          <MonitorList monitors={monitors} state={state} />
          <UsageCard stats={usage} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const { workerConfig } = await import('@/uptime.config')
  const compactedStateStr = await getFromStore(process.env as any, 'state')

  const monitors = workerConfig.monitors.map((monitor) => ({
    id: monitor.id,
    name: monitor.name,
    tooltip: monitor?.tooltip,
    statusPageLink: monitor?.statusPageLink,
    hideLatencyChart: monitor?.hideLatencyChart,
  }))

  // All regions run in one container, so any region's health port serves the same /stats.
  let usage: UsageStats | null = null
  try {
    const res = await fetch('http://eu-west.smoothtime.io:8080/stats', { signal: AbortSignal.timeout(3000) })
    if (res.ok) {
      const j: any = await res.json()
      if (j && typeof j.unique_clients_today === 'number') usage = j as UsageStats
    }
  } catch {}

  return { props: { compactedStateStr, monitors, usage } }
}
