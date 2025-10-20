"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Contacto
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mb-12"
        >
          ¿Quieres colaborar o simplemente saludar? Estoy disponible para hablar
          sobre proyectos, diseño o desarrollo web.
        </motion.p>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          action="https://formspree.io/f/your-form-id" // <- sustituye con tu ID de Formspree o endpoint
          method="POST"
          className="space-y-6 text-left"
        >
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar mensaje
          </motion.button>
        </motion.form>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="mailto:javier@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://linkedin.com/in/javier-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/javier-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Github size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
