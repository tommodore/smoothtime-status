import Link from 'next/link'
import { pageConfig } from '@/uptime.config'
import { useTranslation } from 'react-i18next'

export default function Header({ style }: { style?: React.CSSProperties }) {
  const { t } = useTranslation('common')
  const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]
  return (
    <header className="st-header" style={style}>
      <div className="st-wrap st-header-inner">
        <Link className="st-logo" href="/">
          <img src="/favicon.svg" width={24} height={24} alt="" />
          <span>smoothtime</span>
          <span className="st-chip">Status</span>
        </Link>
        <nav className="st-nav">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.link}
              target={l.link.startsWith('/') ? undefined : '_blank'}
              rel={l.link.startsWith('/') ? undefined : 'noopener'}
              className={l.highlight ? 'st-nav-hl' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="st-lcars" aria-hidden="true"><span className="elbow"></span><span className="s1"></span><span className="s2"></span><span className="s3"></span><span className="rail"></span><span className="s4"></span></div>
    </header>
  )
}
