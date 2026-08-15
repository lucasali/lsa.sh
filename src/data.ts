export interface Project {
  name: string
  description: string
  year: string
  url: string
}

export interface Experience {
  role: string
  company: string
  period: string
  url?: string
}

export interface ContactLink {
  label: string
  url: string
}

export const intro = {
  name: 'Lucas Ali',
  byline: 'Software Engineer — Brazil',
  bio: 'I build things for the web.', // TODO: replace with your own bio
}

// TODO: replace with real projects
export const projects: Project[] = [
  {
    name: 'project-one',
    description: 'Short one-line description of what it does.',
    year: '2025',
    url: 'https://github.com/lucasali',
  },
  {
    name: 'project-two',
    description: 'Short one-line description of what it does.',
    year: '2024',
    url: 'https://github.com/lucasali',
  },
]

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Construct IN',
    period: '2025 — now',
    url: 'https://constructin.com.br',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Storm Group / TV Globo',
    period: '2024 — 2025',
  },
  {
    role: 'Front-End Developer',
    company: 'WeClever, Sonda, Qualitor, Construct IN',
    period: '2019 — 2024',
  },
]

export const contacts: ContactLink[] = [
  { label: 'github', url: 'https://github.com/lucasali' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/lucasali' }, // TODO: confirm handle
  { label: 'x', url: 'https://x.com/lucasali' }, // TODO: confirm handle
  { label: 'email', url: 'mailto:lucassbardelottoali@gmail.com' },
]
