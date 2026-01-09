"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// TODO: Añadir todos las secciones nuevas de los proyectos como tags.

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects({ dict }: { dict: any }) {
  const projects = dict.items || [];

  return (
    <section id="projects" className="my-12 p-6 max-w-6xl mx-auto">
      <h2 className="text-5xl font-caveat font-bold text-center mb-12">
        {dict.title}
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((p: any, i: number) => (
          <motion.a
            href={p.link}
            target="_blank"
            key={i}
            variants={item}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border-1 border-gray-200 rounded-xl"
          >
            <Image
              alt={p.title}
              src={p.image}
              className="w-full h-48 object-contain border-b-1 border-gray-200 p-5"
              width={500}
              height={500}
            />

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{p.title}</h3>

                <span className="text-gray-600 bg-purple-200 px-2 py-1 rounded-full text-xs">
                  {p.tags.join(", ")}
                </span>
              </div>
              <p className="text-gray-600">{p.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
