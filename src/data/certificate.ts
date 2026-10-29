
import type { Locale } from "@/i18n/Translations";

export type Certificate = {
  id: number
  icon: string
   name: Record<Locale, string>;
  issuer: Record<Locale, string>;
  year: string
  link: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    icon: '🏆',
      name: {
      es: "Fundamentos de Ciberseguridad",
      en: "Foundations of Cybersecurity",
      pt: "Fundamentos de Cibersegurança",
    },
    issuer: {
      es: "Coursera",
      en: "Coursera",
      pt: "Coursera",
    },
    year: '2025',
    link: 'https://drive.google.com/file/d/1XDWsvqRLmGBVuQPDvgnbkksdIR0yvhaK/view?usp=drive_link',
  },
  {
    id: 2,
    icon: '🏆',
    name: {
      es: "Curso de Marketing, Edicion de videos",
      en: "Marketing Course, Video Editing",
      pt: "Curso de Marketing, Edição de Vídeos",
    },
    issuer: {
      es: "Udemy",
      en: "Udemy",
      pt: "Udemy",
    },
    year: '2026',
    link: 'https://drive.google.com/file/d/1lpwxbQFg39Wfi45EmyfGPSCKZeLKcAZi/view?usp=drive_link',
  },
  {id: 3,
    icon: '🏆',
    name: {
      es: "Introducción a la robótica",
      en: "Introduction to Robotics",
      pt: "Introdução à Robótica",
    },
    issuer: {
      es: "Capacitar(Arg)",
      en: "Capacitar(Arg)",
      pt: "Capacitar(Arg)",
    },
    year:'2026',
     link: '',
  },
  {
    id: 4,
    icon: '🏆',
    name: {
      es: "Fundamentos de Redes",
      en: "Networking Basics",
      pt: "Fundamentos de Redes",
    },
    issuer: {
      es: "Cisco",
      en: "Cisco",
      pt: "Cisco",
    },
    year:'2026',
    link:'https://drive.google.com/file/d/1DJMDvnaqGjgqkbOuBcb1oFchavcuvLrF/view?usp=drive_link',

  },
   {
    id: 5,
    icon: '🏆',
    name: {
      es: "Dispositivos de Red y Configuración Inicial",
      en: "Networking Devices and Initial Configuration",
      pt: "Dispositivos de Rede e Configuração Inicial",
    },
    issuer: {
      es: "Cisco",
      en: "Cisco",
      pt: "Cisco",
    },
    year:'2026',
    link:'https://drive.google.com/file/d/1dYhpc0cvSnm2xlSJoPkyweomk7Jfh4tY/view?usp=drive_link',

  },
   
  
]