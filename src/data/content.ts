export type ProjectStatus = 'open' | 'progress' | 'done'

export interface Project {
  name: string
  slug: string
  location: string
  meta: string
  status: ProjectStatus
  statusLabel: string
  image?: string
  description: string
  timeline: string
  address: Address
}
export interface Address {
  street: string,
  city: string,
  state: string
}
export const projects: Project[] = [
  {
    name: 'Northcrest',
    slug: 'northcrest',
    location: 'Marysville WA',
    meta: '12',
    status: 'progress',
    statusLabel: 'In construction',
    image: '/NorthCrest.png',
    description:
      'Northcrest is a 12 unit duplex community across 6 homes. Situated within an established Marysville residential corridor. targeting move-up buyers and small families drawn to the area’s schools and easy access to I-5. Site work and vertical construction are underway, following the same entitlement-to-close playbook the Helix Homes partners have run on prior Snohomish County projects.',
    timeline: 'Oct 2026',
    address: {
      street: '12527 51 st Ave NE',
      city: ' Marysville',
      state: 'WA'
    }
  },
  {
    name: 'Densmore',
    slug: 'densmore',
    location: 'Marysville WA',
    meta: '24',
    status: 'open',
    statusLabel: 'Open for investment',
    image: '/Densmore.png',
    description:
      'The Densmore project is a 1.25 acher lot zoned for mixed use. Currerntly under contract with enitelments work in progress. The vision for this residential project is 24 town homes. Phase 1 schedule to begin in H2 of 2027',
    timeline: '[Estimated completion TBD]',
    address: {
      street: '3724 Densmore Rd.',
      city: ' Marysville',
      state: 'WA'
    }
  },
]

export interface Partner {
  name: string
  initials: string
  role: string
  bioShort: string
  bioFull: string
  photo?: string
}

export const partners: Partner[] = [
  {
    name: 'Micah Smith',
    initials: 'MS',
    role: 'Partner',
    bioShort: 'Micah is a technology leader with a track record of building and scaling startups, including a successful company exit and over $1 million raised in seed funding. He brings that same goal-oriented, execution-driven startup culture to Helix Homes.',
    bioFull: 'Micah is a technology leader with a track record of building and scaling startups, including a successful company exit and over $1 million raised in seed funding. He brings that same goal-oriented, execution-driven startup culture to Helix Homes — applying rigorous operating discipline to sourcing, underwriting, and delivering every project on time and on budget.',
    photo: '/MicahHead.jpg',
  },
  {
    name: 'James Funston',
    initials: 'JF',
    role: 'Partner',
    bioShort: "James is a Washington-licensed real estate professional and general contractor who has led residential development in Snohomish County since 1998. Through his company Uniti LLC, he has been responsible for the construction of 47 housing units, with an active pipeline of duplex and townhome projects underway.",
    bioFull: "James Funston is a Washington-licensed real estate professional (licensed since 1986) with roots in Snohomish County, where he continues to live and work. He built his early career in residential sales with Century 21, John L. Scott, RE/MAX, Prudential, Coldwell Banker, and Skyline Properties, completing hundreds of listings and sales while gaining hands-on exposure to land acquisition, entitlement, and builder operations through his work with local developers. In 1998, he earned his Washington State general contractor's license and launched his first building company, delivering major subdivisions like Cedar Grove (41 lots) and Brighton Park East (48 lots) in Marysville. He later broadened his expertise into mortgage finance as a Licensed Mortgage Originator with PrimeLending in 2008, adding deep knowledge of underwriting and capital flow to his development skill set.\n\nIn 2013, James founded Uniti LLC, his current general contracting company, and began forming project-specific LLCs to support scalable, investor-ready development operations. Over his career, James has been responsible for the construction of 47 housing units, delivering single-family homes and a growing pipeline of duplex and townhome projects throughout Snohomish County, including active developments in Marysville and Lake Stevens and the Densmore Road infill project. With end-to-end oversight of feasibility, entitlement, design, financing, and construction management, James combines disciplined budgeting and repeatable construction methods to produce investor-grade documentation and stable, resilient returns for partners.",
    photo: '/JamesHead.png',
  },
]

export const spineNodes = [
  { id: 'hero', label: 'Intro', top: 0 },
  { id: 'portfolio', label: 'Portfolio', top: 24 },
  { id: 'partners', label: 'Partners', top: 52 },
  { id: 'invest', label: 'Invest', top: 78 },
  { id: 'contact', label: 'Contact', top: 100 },
]
