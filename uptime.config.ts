import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Smoothtime Network Status",
  links: [
    { link: 'https://github.com/tommodore/smoothtime', label: 'GitHub' },
    { link: 'https://smoothtime.io', label: 'Website', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'eu_west',
      name: 'Europe West',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::2]:8080/health',
      tooltip: 'Nuremberg Node - Europe West Region',
    },
    {
      id: 'eu_central',
      name: 'Europe Central',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::3]:8080/health',
      tooltip: 'Nuremberg Node - Europe Central Region',
    },
    {
      id: 'eu_east',
      name: 'Europe East',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::4]:8080/health',
      tooltip: 'Nuremberg Node - Europe East Region',
    },
    {
      id: 'us_east',
      name: 'US Eastern',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::5]:8080/health',
      tooltip: 'Nuremberg Node - US Eastern Region',
    },
    {
      id: 'us_central',
      name: 'US Central',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::6]:8080/health',
      tooltip: 'Nuremberg Node - US Central Region',
    },
    {
      id: 'us_mountain',
      name: 'US Mountain',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::7]:8080/health',
      tooltip: 'Nuremberg Node - US Mountain Region',
    },
    {
      id: 'us_pacific',
      name: 'US Pacific',
      method: 'GET',
      target: 'http://[2a01:4f8:c2c:a4a5::8]:8080/health',
      tooltip: 'Nuremberg Node - US Pacific Region',
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
