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
      greeting: "Hola !",
      availability: "Disponible para nuevas oportunidades",
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
        stats: [
    { value: "4+", label: "Proyectos" },
    { value: "8+", label: "Tecnologías" },
    { value: "3", label: "Idiomas" },
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
      description:
    "Certificados obtenidos en diferentes cursos y programas de formación, que demuestran mi compromiso con el aprendizaje continuo y el desarrollo de habilidades en diversas áreas. Cada certificado representa un logro significativo en mi trayectoria educativa y profesional."
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
      availability: "Available for new opportunities",
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
       stats: [
    { value: "4+", label: "Projects" },
    { value: "8+", label: "Technologies" },
    { value: "3", label: "Languages" },
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
       description:
    "Certificates earned through various courses and training programs, demonstrating my commitment to continuous learning and skill development across multiple fields. Each certificate represents a significant achievement in my educational and professional journey."
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
      greeting: "oi !",
        availability: "Disponível para novas oportunidades",
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
      stats: [
    { value: "4+", label: "Projetos" },
    { value: "8+", label: "Tecnologias" },
    { value: "3", label: "Idiomas" },
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
      description:
    "Certificados obtidos em diferentes cursos e programas de formação que demonstram meu compromisso com o aprendizado contínuo e o desenvolvimento de competências em diversas áreas. Cada certificado representa uma conquista significativa na minha trajetória educacional e profissional."
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