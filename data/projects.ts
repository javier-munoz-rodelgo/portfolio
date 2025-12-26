/**
 * Modelo para definir los proyectos
 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

/**
 * Listado de todos los proyectos.
 */
export const projects: Project[] = [
  {
    title: "IRIS",
    description:
      "IRIS Web Componentes es una arquitectura moderna basada en un monorepo gestionado con Lerna, que centraliza todos los componentes visuales del ecosistema IRIS en paquetes independientes, reutilizables y escalables, desarrollados con Stencil.",
    tags: ["Profesional"],
    image: "/projects/iris.svg",
    link: "https://iris.atm-maggioli.es/",
  },
  {
    title: "Apps móviles",
    description:
      "Soluciones para la gestión de expedientes, pagos y consultas en la nube.",
    tags: ["Profesional"],
    image: "/projects/atm.png",
    link: "https://play.google.com/store/apps/dev?id=8222897177929282618&hl=es_419",
  },
  {
    title: "Sede electrónica",
    description:
      "Plataforma para el ciudadano donde consultar el estado de sus Expedientes, Pagar tasas y recibos de impuestos (Oficina Virtual Tributaria), realizar gestiones relacionadas con el Padrón Municipal de Habitantes, Seguimiento del Perfil del Contratante, Registros automáticos etc.",
    tags: ["Profesional"],
    image: "/projects/atm.png",
    link: "https://www.atm-maggioli.es/software-y-consultoria/administracion-electronica/",
  },
  {
    title: "Gestión Integral de Tributos",
    description:
      "Plataforma de Software en la nube para la gestión tributaria, recaudación voluntaria y ejecutiva, inspección y multas..",
    tags: ["Profesional"],
    image: "/projects/atm.png",
    link: "https://www.atm-maggioli.es/software-y-consultoria/gestion-tributaria-y-recaudacion/",
  },
  {
    title: "Vithas Hospitales",
    description: "Cuadro médico, gestión de citas y portal del paciente.",
    tags: ["Profesional"],
    image: "/projects/vithas.svg",
    link: "https://vithas.es/",
  },
  // {
  //   title: "PulseDash",
  //   description:
  //     "Dashboard interactivo para monitorizar métricas de negocio en tiempo real. Desarrollado con Next.js, TypeScript y Chart.js.",
  //   tags: ["Next.js", "TypeScript", "Chart.js", "API Integration"],
  //   image: "/images/projects/pulsedash.png",
  //   link: "https://pulsedash.dev",
  // },
  // {
  //   title: "DocuFlow",
  //   description:
  //     "Aplicación web para crear y compartir documentación técnica colaborativa, con soporte para Markdown y control de versiones.",
  //   tags: ["React", "Node.js", "MongoDB", "Markdown"],
  //   image: "/images/projects/docuflow.png",
  //   link: "https://docuflow.app",
  // },
  // {
  //   title: "Portify",
  //   description:
  //     "Generador de portfolios personales en línea basado en plantillas, optimizado para SEO y rendimiento.",
  //   tags: ["Next.js", "TailwindCSS", "SEO", "Static Generation"],
  //   image: "/images/projects/portify.png",
  //   link: "https://portify.io",
  // },
  // {
  //   title: "TaskNest",
  //   description:
  //     "Gestor de tareas con drag & drop y sincronización en tiempo real.",
  //   tags: ["React", "Firebase", "Framer Motion", "UX Design"],
  //   image: "/images/projects/tasknest.png",
  //   link: "https://tasknest.app",
  // },
  // {
  //   title: "GreenPath",
  //   description:
  //     "Web para calcular la huella de carbono personal y ofrecer consejos para reducirla.",
  //   tags: ["Next.js", "API Routes", "TailwindCSS", "Accessibility"],
  //   image: "/images/projects/greenpath.png",
  //   link: "https://greenpath.life",
  // },
];
