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
  
]