export type Certificate = {
  id: number
  icon: string
  name: string
  issuer: string
  year: string
  link: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    icon: '🏆',
    name: 'Foundations of Cybersecurity',
    issuer: 'Coursera',
    year: '2025',
    link: 'https://drive.google.com/file/d/1XDWsvqRLmGBVuQPDvgnbkksdIR0yvhaK/view?usp=drive_link',
  },
  {
    id: 2,
    icon: '🏆',
    name: 'Curso de Marketing, Edicion de videos',
    issuer: 'Udemy',
    year: '2026',
    link: 'https://drive.google.com/file/d/1lpwxbQFg39Wfi45EmyfGPSCKZeLKcAZi/view?usp=drive_link',
  },
  {id: 3,
    icon: '🏆',
    name: 'Introduction to robotics',
    issuer: 'Capacitar(Arg)',
    year:'2026',
     link: '',
  },
   
  
]