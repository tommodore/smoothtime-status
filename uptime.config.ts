import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Smoothtime Network Status",
  links: [
    { link: 'https://github.com/tommodore/smoothtime', label: 'GitHub' },
    { link: 'https://smoothtime.io', label: 'smoothtime.io', highlight: true },
  ],
  group: {
    'Europe': ['eu_west', 'eu_central', 'eu_east'],
    'United States': ['us_east', 'us_central', 'us_mountain', 'us_pacific'],
    'Southern Hemisphere': ['au_sydney', 'new_zealand', 'chile', 'argentina'],
  },
  customFooter:
    '<div class="st-footer"><span>© 2026 smoothtime · Status powered by <a href="https://github.com/lyc8503/UptimeFlare" target="_blank" rel="noopener">UptimeFlare</a></span><span><a href="https://smoothtime.io">smoothtime.io</a><a href="https://github.com/tommodore/smoothtime" target="_blank" rel="noopener">GitHub</a><a href="https://smoothtime.io/legal">Legal &amp; Privacy</a></span></div>',
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'eu_west',
      name: 'Europe West',
      method: 'GET',
      target: 'http://eu-west.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Europe West Region',
    },
    {
      id: 'eu_central',
      name: 'Europe Central',
      method: 'GET',
      target: 'http://eu-central.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Europe Central Region',
    },
    {
      id: 'eu_east',
      name: 'Europe East',
      method: 'GET',
      target: 'http://eu-east.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Europe East Region',
    },
    {
      id: 'us_east',
      name: 'US Eastern',
      method: 'GET',
      target: 'http://us-east.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - US Eastern Region',
    },
    {
      id: 'us_central',
      name: 'US Central',
      method: 'GET',
      target: 'http://us-central.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - US Central Region',
    },
    {
      id: 'us_mountain',
      name: 'US Mountain',
      method: 'GET',
      target: 'http://us-mountain.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - US Mountain Region',
    },
    {
      id: 'us_pacific',
      name: 'US Pacific',
      method: 'GET',
      target: 'http://us-pacific.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - US Pacific Region',
    },
    {
      id: 'au_sydney',
      name: 'Australia Sydney',
      method: 'GET',
      target: 'http://australia-sydney.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Australia Sydney Region',
    },
    {
      id: 'new_zealand',
      name: 'New Zealand',
      method: 'GET',
      target: 'http://new-zealand.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - New Zealand Region',
    },
    {
      id: 'chile',
      name: 'Chile',
      method: 'GET',
      target: 'http://chile.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Chile Region',
    },
    {
      id: 'argentina',
      name: 'Argentina',
      method: 'GET',
      target: 'http://argentina.smoothtime.io:8080/health',
      tooltip: 'Nuremberg Node - Argentina Region',
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
