"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Dashboard Analytics",
    desc: "Next.js + API + Charts",
    image: "/images/p1.jpg",
  },
  {
    title: "Landing App",
    desc: "UI moderna con animaciones",
    image: "/images/p2.jpg",
  },
  {
    title: "Ecommerce Light",
    desc: "Tienda minimalista",
    image: "/images/p3.jpg",
  },
  {
    title: "Portfolio Clean",
    desc: "Diseño limpio y rápido",
    image: "/images/p4.jpg",
  },
];

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

export default function Projects() {
  return (
    <section id="projects" className="py-32 p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={p.image} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
