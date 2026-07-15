export type ProjectStatus = 'open' | 'progress' | 'done'

export interface Project {
  name: string
  location: string
  meta: string
  status: ProjectStatus
  statusLabel: string
}

export const projects: Project[] = [
  {
    name: 'Founders Yard',
    location: 'Austin, TX',
    meta: '128 units',
    status: 'open',
    statusLabel: 'Open for investment',
  },
  {
    name: 'Cordage Lofts',
    location: 'Adaptive reuse · Waco, TX',
    meta: '64 units',
    status: 'progress',
    statusLabel: 'In construction',
  },
  {
    name: 'Aldergate Row',
    location: 'San Marcos, TX',
    meta: '36 units',
    status: 'done',
    statusLabel: 'Completed 2024',
  },
]

export interface Stat {
  figure: string
  label: string
}

export const stats: Stat[] = [
  { figure: '7', label: 'Projects delivered' },
  { figure: '412', label: 'Units developed' },
  { figure: '3', label: 'Markets active in' },
  { figure: '18.4%', label: 'Avg. realized IRR' },
]

export interface Partner {
  name: string
  initials: string
  role: string
  bio: string
}

export const partners: Partner[] = [
  {
    name: 'Micah Smith',
    initials: 'MS',
    role: 'Partner',
    bio: '[Bio placeholder — background, prior projects, and focus within Helix Homes.]',
  },
  {
    name: 'James Funston',
    initials: 'JF',
    role: 'Partner',
    bio: '[Bio placeholder — background, prior projects, and focus within Helix Homes.]',
  },
]

export const spineNodes = [
  { id: 'hero', label: 'Hero', top: 0 },
  { id: 'portfolio', label: 'Portfolio', top: 24 },
  { id: 'partners', label: 'Partners', top: 52 },
  { id: 'invest', label: 'Invest', top: 78 },
  { id: 'contact', label: 'Contact', top: 100 },
]
