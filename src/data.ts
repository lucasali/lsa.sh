export interface Project {
  name: string
  description: string
  year: string
  url: string
}

export interface ContactLink {
  label: string
  url: string
}

export const intro = {
  name: 'Lucas Sbardelotto Ali',
  byline: 'Software Engineer — Brazil',
}

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

export const contacts: ContactLink[] = [
  { label: 'github', url: 'https://github.com/lucasali' },
  { label: 'linkedin', url: 'https://www.linkedin.com/in/lucasali' },
  { label: 'x', url: 'https://x.com/lucasali' },
  { label: 'email', url: 'mailto:lucassbardelottoali@gmail.com' },
]
