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

  // Show single monitor detail when hash is present
  const monitorId = typeof window !== 'undefined' ? window.location.hash.substring(1) : ''
  if (monitorId) {
    const monitor = monitors.find((m) => m.id === monitorId)
    if (!monitor) return <div className="text-center text-red-400">Monitor not found</div>
    return <MonitorDetail monitor={monitor} state={state} />
  }

  return (
    <>
      <Head>
        <title>smoothtime Status</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-[#09090b] text-white font-mono">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* === SMOOTHTIME LOGO === */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-bold tracking-[-0.04em] text-emerald-400">
                smoothtime
              </span>
              <span className="text-xs font-mono tracking-widest text-zinc-500 mt-4">STATUS</span>
            </div>
            <p className="text-emerald-400 text-xl mt-1">Live Smooth Time Monitoring</p>
          </div>

          {/* Overall Status */}
          <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-8 mb-10">
            <OverallStatus state={state} monitors={monitors} maintenances={maintenances} />
          </div>

          {/* Monitor List */}
          <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-8">
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
