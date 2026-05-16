"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "../data/socials";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div
        className="max-w-3xl animate-fade-in-up"
        style={{ animationFillMode: "both" }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 leading-14">
          {dict.greeting}{" "}
          <span className="text-purple-600 font-caveat">Javier Muñoz</span>
        </h1>

        <h2
          className="text-xl sm:text-2xl text-gray-600 mb-6 animate-fade-in-up"
          style={{ animationDelay: "300ms", animationFillMode: "both" }}
        >
          {dict.role}
        </h2>

        <p
          className="text-gray-500 mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          {dict.description}
        </p>

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
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "800ms", animationFillMode: "both" }}
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
        </div>
      </div>
    </section>
  );
}
