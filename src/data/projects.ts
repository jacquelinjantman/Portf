import type { Locale } from "@/i18n/Translations";

export type Project = {
  id: number;
  mission: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  demo: string;
  code: string;
};

export const projects: Project[] = [
  {
    id: 1,

    mission: {
      es: "MISIÓN 01",
      en: "MISSION 01",
      pt: "MISSÃO 01",
    },

    title: {
      es: "TOTEM FAMILY\nPROYECTO 01",
      en: "TOTEM FAMILY\nPROJECT 01",
      pt: "TOTEM FAMILY\nPROJETO 01",
    },

    description: {
      es: "Copiloto de logística que organiza la vida familiar de forma colaborativa.",
      en: "A family logistics copilot that helps organize household life collaboratively.",
      pt: "Um copiloto de logística familiar que ajuda a organizar a vida em família de forma colaborativa.",
    },

    tags: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL (Neon)",
      "Prisma",
      "Node.js",
      "Express",
      "TypeScript",
      "JWT + bcrypt",
    ],

    demo: "https://totem-app-front.vercel.app/",
    code: "https://github.com/jacquelinjantman/-TotemApp-Front",
  },

  {
    id: 2,

    mission: {
      es: "MISIÓN 02",
      en: "MISSION 02",
      pt: "MISSÃO 02",
    },

    title: {
      es: "POMODORO TASK\nPROYECTO 02",
      en: "POMODORO TASK\nPROJECT 02",
      pt: "POMODORO TASK\nPROJETO 02",
    },

    description: {
      es: "Gestiona tus tareas, controla tus sesiones de concentración y toma descansos conscientes.",
      en: "Manage your tasks, track focus sessions and take mindful breaks.",
      pt: "Gerencie suas tarefas, acompanhe sessões de foco e faça pausas conscientes.",
    },

    tags: ["React"],

    demo: "",
    code: "https://github.com/jacquelinjantman/TaskPomodoro",
  },

  {
    id: 3,

    mission: {
      es: "MISIÓN 03",
      en: "MISSION 03",
      pt: "MISSÃO 03",
    },

    title: {
      es: "BLOG PLANTS",
      en: "BLOG PLANTS",
      pt: "BLOG PLANTS",
    },

    description: {
      es: "Como coleccionista de plantas exóticas, creé un blog para compartir experiencias, cuidados, información sobre orígenes y especies que me apasionan.",
      en: "As an exotic plant collector, I created a blog to share experiences, care tips, origin information and interesting species.",
      pt: "Como colecionadora de plantas exóticas, criei um blog para compartilhar experiências, cuidados, informações sobre origens e espécies fascinantes.",
    },

    tags: ["JavaScript"],

    demo: "https://blogplantas.onrender.com/",
    code: "",
  },

  {
    id: 4,

    mission: {
      es: "MISIÓN 04",
      en: "MISSION 04",
      pt: "MISSÃO 04",
    },

    title: {
      es: "HOSPITAL BACKEND",
      en: "HOSPITAL BACKEND",
      pt: "HOSPITAL BACKEND",
    },

    description: {
      es: "API REST para la gestión de un centro de salud desarrollada con Java y Spring Boot, con autenticación JWT, autorización basada en roles y lógica de negocio para turnos y disponibilidad médica.",
      en: "REST API for healthcare management built with Java and Spring Boot, featuring JWT authentication, role-based authorization and appointment management.",
      pt: "API REST para gestão de um centro de saúde desenvolvida com Java e Spring Boot, contendo autenticação JWT, autorização por papéis e gerenciamento de consultas.",
    },

    tags: ["Java"],

    demo: "",
    code: "https://github.com/jacquelinjantman/Hospital-Backend",
  },
];