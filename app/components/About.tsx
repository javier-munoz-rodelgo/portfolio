"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ dict }: { dict: any }) {
  // FIXME: Corregir movimiento de la sección
  return (
    <motion.section
      id="about"
      className="min-h-dvh flex flex-col justify-center items-center p-6 max-w-6xl mx-auto my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center md:hidden">
        {dict.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <Image
          src="/avatar.png"
          alt="Javier Muñoz Avatar"
          className="rounded-full"
          width={300}
          height={300}
          priority
        />

        <div className=" text-gray-600 text-lg leading-relaxed">
          <h2 className="text-4xl font-bold mb-6 hidden md:block">
            {dict.title}
          </h2>

          <p className="mb-6" dangerouslySetInnerHTML={{ __html: dict.p1 }}></p>
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: dict.p2 }}></p>
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: dict.p3 }}></p>
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: dict.p4 }}></p>
        </div>
      </div>
    </motion.section>
  );
}
