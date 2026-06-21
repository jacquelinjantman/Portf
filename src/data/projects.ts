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
    id:2,
    mission: 'MISSION 02',
    title: 'POMODORO TASK \n PROYECTO 02',
    description:'maneja tus tareas, controla tus sesiones de concentracion y toma descansos conscientes',
    tags:['React'],
    demo:'https://cutepomodoro.netlify.app/',
    code: 'https://github.com/jacquelinjantman/TaskPomodoro',
    
  },
  
  {
    id: 3,
    mission: 'MISSION 03',
    title: 'SOBRIETY \n PROYECTO 03',
    description: ' contador de dias para ayudarte con la sobriedad',
    tags:['REACT'],
    demo:'https://spectacular-axolotl-ca04ca.netlify.app/',
    code:'https://github.com/jacquelinjantman/SoberTime',
  }
]