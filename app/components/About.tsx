"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-dvh flex flex-col justify-center items-center p-6 max-w-4xl mx-auto my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">
        Front-end Manager especializado en UI/UX con más de 5 años de
        experiencia en desarrollo web, diseño de sistemas de componentes y
        liderazgo técnico. Desde 2023 lidero el equipo frontend en{" "}
        <span className="font-bold">ATM Grupo Maggioli</span>, donde dirijo la
        creación y evolución de <span className="font-bold">IRIS</span>, un{" "}
        <span className="font-bold">Design System corporativo</span> basado en{" "}
        <span className="font-bold">Web Components con StencilJS</span> que
        unifica la identidad visual de la compañía tras la fusión de tres
        empresas.
      </p>
      <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">
        IRIS se construye en un{" "}
        <span className="font-bold">monorepo gestionado con Lerna</span>, está
        publicado en <span className="font-bold">NPM</span> como librería
        interna y ofrece un catálogo completo de componentes, desde piezas
        fundamentales (botones, iconos, alertas) hasta soluciones complejas de
        interfaz como{" "}
        <span className="font-bold">
          dashboards, formularios dinámicos o gestores de traducciones
        </span>
        . Su arquitectura está centrada en la{" "}
        <span className="font-bold">
          escalabilidad, accesibilidad, rendimiento y modularidad
        </span>
        , convirtiéndose en el estándar transversal para nuevos productos.
      </p>
      <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">
        Además, aporto soporte estratégico a otros proyectos como{" "}
        <span className="font-bold">Scrum Master</span>, impulsando buenas
        prácticas en{" "}
        <span className="font-bold">
          CI/CD, automatización, gestión con Jira y metodologías ágiles
        </span>
        , orientadas a la entrega continua y la mejora del flujo de trabajo
        entre equipos.
      </p>
      <p className="text-center text-gray-600 text-lg leading-relaxed">
        Experiencia previa en desarrollo full-stack con{" "}
        <span className="font-bold">
          Angular, JavaScript/TypeScript, SASS, Java/JSP y SQL
        </span>
        , lo que me permite tener una visión completa del ciclo de producto y
        comunicarme eficazmente con perfiles multidisciplinares.
      </p>
    </motion.section>
  );
}
