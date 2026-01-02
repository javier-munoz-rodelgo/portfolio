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
];
