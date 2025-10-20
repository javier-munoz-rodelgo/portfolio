"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen o avatar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg">
            {/* TODO: Reducir peso */}
            <Image
              src="/avatar.jpeg"
              alt="Javier Muñoz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre mí</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Soy{" "}
            <span className="font-semibold text-blue-600">
              Front-end Manager
            </span>{" "}
            en ATM Grupo Maggioli, especializado en desarrollar interfaces
            limpias, accesibles y mantenibles. Me apasiona unir diseño y código
            para crear productos con identidad y propósito.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tengo experiencia liderando equipos de desarrollo, definiendo
            arquitecturas front-end y mejorando la calidad del código mediante
            buenas prácticas y herramientas modernas como Next.js, React y
            TypeScript.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            En mi tiempo libre, disfruto explorando nuevas tecnologías,
            contribuyendo a proyectos open source y diseñando pequeños
            experimentos visuales.
          </p>

          {/* CTA opcional */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Ver mis proyectos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
