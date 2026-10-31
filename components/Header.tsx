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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width={22} height={22} fill="#2dd4bf" aria-hidden="true">
            <rect width="960" height="960" y="-960" rx="200" fill="#0a0a0b" />
            <path d="M480-160q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-520h80q0 117 81.5 198.5T480-240q117 0 198.5-81.5T760-520q0-117-81.5-198.5T480-800h-6l62 62-56 56-160-160 160-160 56 56-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-520q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-160Zm-40-120v-240h200v80H520v160h-80Z" transform="translate(0, 40)" />
          </svg>
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
    </header>
  )
}
