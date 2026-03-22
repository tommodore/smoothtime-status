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
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
