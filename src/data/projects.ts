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
    demo:'',
    code: 'https://github.com/jacquelinjantman/TaskPomodoro',
    
  },
  
  {
    id: 3,
    mission: 'Mission 03',
    title: 'Blog-Plants',
    description: ' As an enthusiast and collector of exotic plants, I created a personal blog—featuring plants I have owned and those I would like to have, along with care tips and information on their origins—to share with others who are as passionate about plants as I am.',
    tags:['Javascript'],
    demo:'https://blogplantas.onrender.com/',
    code:''
  },

  {
    id:4,
    mission: 'Mission 04',
    title: 'Hospital-backend',
    description:'A REST API for managing a health center, developed using Java and Spring Boot, featuring JWT authentication, hierarchical role-based authorization, and business logic (appointments, physician availability, user deactivation).',
    tags:['Java'],
    demo:'',
    code:'https://github.com/jacquelinjantman/Hospital-Backend',

  },
]