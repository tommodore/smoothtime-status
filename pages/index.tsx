import Head from 'next/head'
import { MonitorTarget } from '@/types/config'
import { maintenances, pageConfig } from '@/uptime.config'
import OverallStatus from '@/components/OverallStatus'
import MonitorList from '@/components/MonitorList'
import Footer from '@/components/Footer'
import { useTranslation } from 'react-i18next'
import { CompactedMonitorStateWrapper, getFromStore } from '@/worker/src/store'

export const runtime = 'experimental-edge'

export default function Home({
  compactedStateStr,
  monitors,
}: {
  compactedStateStr: string
  monitors: MonitorTarget[]
}) {
  const { t } = useTranslation('common')
  const state = new CompactedMonitorStateWrapper(compactedStateStr).uncompact()

  return (
    <>
      <Head>
        <title>smoothtime Status</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-background text-white font-mono">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold tracking-tighter text-accent-400 mb-2">
              smoothtime
            </h1>
            <p className="text-xl text-emerald-400">Status • Live Smooth Time</p>
          </div>

          {/* Overall Status */}
          <div className="card p-8 mb-10">
            <OverallStatus state={state} monitors={monitors} maintenances={maintenances} />
          </div>

          {/* Monitor List */}
          <div className="card p-8">
            <MonitorList monitors={monitors} state={state} />
          </div>

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

  return { props: { compactedStateStr, monitors } }
}
