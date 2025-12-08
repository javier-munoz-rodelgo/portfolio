"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-dvh flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animación de entrada del contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Nombre */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          Hola, soy <span className="text-blue-600">Javier Muñoz</span>
        </h1>

        {/* Rol o especialidad */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl sm:text-2xl text-gray-600 mb-6"
        >
          Front-end Manager & UI Developer
        </motion.h2>

        {/* Descripción corta */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-500 mb-10 leading-relaxed"
        >
          Apasionado por construir interfaces limpias, rápidas y usables. Me
          gusta unir diseño y código para crear experiencias web que destaquen.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Ver proyectos
          </Link>

          <Link
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
