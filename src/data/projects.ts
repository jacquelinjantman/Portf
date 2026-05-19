export type Project = {
  id: number
  mission: string
  title: string
  description: string
  tags: string[]
  demo: string
  code: string
}

export const projects: Project[] = [
  {
    id: 1,
    mission: 'MISSION 01',
    title: 'TOTEM FAMILY\nPROYECTO 01',
    description: 'Copiloto de logistica, organiza la vida familiar de manera colaborativa.',
    tags: ['Next.js', 'Tailwind CSS', 'PostgreSQL (neon)' ,'Prisma', 'Node.js', 'Express','TypeScript', 'JWT + bcrypt'],
    demo: 'https://totem-app-front.vercel.app/',
    code: 'https://github.com/jacquelinjantman/-TotemApp-Front',
  },
  {
    id: 2,
    mission: 'MISSION 02',
    title: 'NOMBRE DEL\nPROYECTO 02',
    description: 'Descripción breve. Qué problema resuelve, cuál fue tu rol y el impacto logrado.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    mission: 'MISSION 03',
    title: 'NOMBRE DEL\nPROYECTO 03',
    description: 'Descripción breve. Qué problema resuelve, cuál fue tu rol y el impacto logrado.',
    tags: ['Python', 'Docker', 'REST API'],
    demo: '#',
    code: '#',
  },
]