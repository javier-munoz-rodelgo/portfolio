"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SOCIALS } from "../data/socials";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section
      id="home"
      className="min-h-dvh flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animación de entrada del contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Nombre */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 leading-14">
          {dict.greeting}{" "}
          <span className="text-purple-600 font-caveat">Javier Muñoz</span>
        </h1>

        {/* Rol o especialidad */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl sm:text-2xl text-gray-600 mb-6"
        >
          {dict.role}
        </motion.h2>

        {/* Descripción corta */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-500 mb-10 leading-relaxed"
        >
          {dict.description}
        </motion.p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300 transform"
              aria-label={social.name}
            >
              <FontAwesomeIcon
                icon={social.icon}
                style={{ fontSize: "28px" }}
              />
            </a>
          ))}
        </div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors w-full md:w-auto"
          >
            {dict.viewProjects || "View Projects"}
          </Link>

          <Link
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full md:w-auto"
          >
            {dict.contact || "Contact"}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
