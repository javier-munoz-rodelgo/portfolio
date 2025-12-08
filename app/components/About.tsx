"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <p className="text-center text-gray-600 text-lg leading-relaxed">
        Soy un desarrollador front-end apasionado, especializado en crear
        experiencias digitales modernas usando React, Next.js y diseño
        minimalista.
      </p>
    </motion.section>
  );
}
