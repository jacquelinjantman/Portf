export type Locale = "es" | "en" | "pt";

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      certificados: "Certificados",
      contacto: "Contacto",
    },
    hero: {
      greeting: "Hi !",
      role: "Fullstack Developer",
      intro: "Diseño y construyo sitios y aplicaciones con Next.js, cuidando cada detalle.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
    },
    about: {
      label: "Character info",
      title: "Sobre mí",
      bio: "Soy desarrolladora fullstack, me gusta construir productos completos: desde la base de datos hasta el último detalle de la interfaz. Fuera del código, colecciono plantas exóticas y tengo un blog donde comparto tips de cuidado.",
      funFacts: [
        { emoji: "🌿", label: "Coleccionista de plantas exóticas" },
        { emoji: "☕", label: "Café antes que nada" },
        { emoji: "🎮", label: "Fan de los videojuegos retro" },
        { emoji: "📚", label: "Siempre aprendiendo algo nuevo" },
      ],
      cvButton: "Descargar CV",
      cvPath: "/cv.pdf",
    },
    skills: {
      label: "Skill tree",
      title: "Mis habilidades",
      categories: {
        lenguajes: "Lenguajes",
        frameworks: "Frameworks y librerías",
        herramientas: "Herramientas",
      },
    },
    projects: {
      label: "Save file",
      title: "Mis proyectos",
      demo: "Ver demo",
      code: "Código",
    },
    certificates: {
      label: "Achievements",
      title: "Certificados",
    },
    contact: {
      label: "Send data",
      title: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente? Escríbeme, con gusto lo conversamos.",
      email: "Enviar email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About",
      habilidades: "Skills",
      proyectos: "Projects",
      certificados: "Certificates",
      contacto: "Contact",
    },
    hero: {
      greeting: "Hi !",
      role: "Fullstack Developer",
      intro: "I design and build websites and applications with Next.js, paying attention to every detail.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    about: {
      label: "Character info",
      title: "About me",
      bio: "I'm a fullstack developer who enjoys building complete products, from the database to the last detail of the interface. Outside of code, I collect exotic plants and run a blog where I share care tips.",
      funFacts: [
        { emoji: "🌿", label: "Exotic plant collector" },
        { emoji: "☕", label: "Coffee before anything else" },
        { emoji: "🎮", label: "Retro video game fan" },
        { emoji: "📚", label: "Always learning something new" },
      ],
      cvButton: "Download CV",
      cvPath: "/cv.pdf",
    },
    skills: {
      label: "Skill tree",
      title: "My skills",
      categories: {
        lenguajes: "Languages",
        frameworks: "Frameworks & libraries",
        herramientas: "Tools",
      },
    },
    projects: {
      label: "Save file",
      title: "My projects",
      demo: "View demo",
      code: "Code",
    },
    certificates: {
      label: "Achievements",
      title: "Certificates",
    },
    contact: {
      label: "Send data",
      title: "Let's talk",
      subtitle: "Have a project in mind? Write to me, I'd love to talk about it.",
      email: "Send email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  pt: {
    nav: {
      inicio: "Início",
      sobreMi: "Sobre mim",
      habilidades: "Habilidades",
      proyectos: "Projetos",
      certificados: "Certificados",
      contacto: "Contato",
    },
    hero: {
      greeting: "Hi !",
      role: "Fullstack Developer",
      intro: "Eu projeto e construo sites e aplicações com Next.js, cuidando de cada detalhe.",
      ctaProjects: "Ver projetos",
      ctaContact: "Contato",
    },
    about: {
      label: "Character info",
      title: "Sobre mim",
      bio: "Sou desenvolvedora fullstack, gosto de construir produtos completos: do banco de dados ao último detalhe da interface. Fora do código, coleciono plantas exóticas e tenho um blog onde compartilho dicas de cuidado.",
      funFacts: [
        { emoji: "🌿", label: "Colecionadora de plantas exóticas" },
        { emoji: "☕", label: "Café antes de tudo" },
        { emoji: "🎮", label: "Fã de video games retrô" },
        { emoji: "📚", label: "Sempre aprendendo algo novo" },
      ],
      cvButton: "Baixar currículo",
      cvPath: "/cv-pt.pdf",
    },
    skills: {
      label: "Skill tree",
      title: "Minhas habilidades",
      categories: {
        lenguajes: "Linguagens",
        frameworks: "Frameworks e bibliotecas",
        herramientas: "Ferramentas",
      },
    },
    projects: {
      label: "Save file",
      title: "Meus projetos",
      demo: "Ver demo",
      code: "Código",
    },
    certificates: {
      label: "Achievements",
      title: "Certificados",
    },
    contact: {
      label: "Send data",
      title: "Vamos conversar",
      subtitle: "Tem um projeto em mente? Me escreva, vou adorar conversar sobre isso.",
      email: "Enviar e-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
} as const;