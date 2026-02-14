"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExperienceDictionary,
  Enterprise,
  ExperienceItem,
} from "@/app/models/experience";

/**
 * Componente que renderiza la sección de experiencia laboral.
 * Muestra una línea de tiempo con las empresas, logos, fechas y descripciones.
 *
 * @param dict - Objeto que contiene las traducciones para la sección de experiencia.
 */
export default function Experience({ dict }: { dict: ExperienceDictionary }) {
  if (!dict || !dict.items) return null;

  return (
    <motion.section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center p-6 max-w-6xl mx-auto my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Timeline */}
      <h2 className="text-5xl font-bold mb-6 text-center">{dict.title}</h2>

      {dict.items.map((enterprise: Enterprise) => (
        <div key={enterprise.name} className="w-full">
          <h3 className="text-2xl flex items-end gap-x-2 my-2">
            <Image
              className="object-contain"
              src={enterprise.image}
              alt={enterprise.name}
              width={30}
              height={30}
            />
            {enterprise.name}
            {enterprise.subtitle && (
              <span className="text-sm text-gray-500">
                {enterprise.subtitle}
              </span>
            )}
          </h3>

          {enterprise.experiences.map((experience: ExperienceItem) => (
            <div key={experience.title} className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div
                    className={`size-2 rounded-full ${
                      experience.endDate === null ||
                      experience.endDate === "Invalid Date"
                        ? "bg-purple-600"
                        : "bg-gray-400"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-5">
                <h4 className="text-1xl font-bold">{experience.title}</h4>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(experience.startDate).toLocaleDateString()} -{" "}
                  {experience.endDate === null ||
                  experience.endDate === "Invalid Date"
                    ? dict.present
                    : new Date(experience.endDate).toLocaleDateString()}
                </p>
                {experience.description.map(
                  (description: string, index: number) => (
                    <p
                      key={index}
                      className="mt-2 text-sm text-muted-foreground-2"
                    >
                      {description}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </motion.section>
  );
}
