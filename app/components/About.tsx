"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/**
 * Componente que muestra información sobre el autor.
 * @param dict Diccionario con el contenido en el idioma seleccionado.
 * @param showButton Si es true, muestra un botón para ir a la página de información.
 * @param lang Idioma de la página.
 * @returns Componente About.
 */
export default function About({
  dict,
  showButton = false,
  lang = "es",
}: {
  dict: any;
  showButton?: boolean;
  lang?: string;
}) {
  const [elementRef, isVisible] = useIntersectionObserver<HTMLElement>();

  // FIXME: Corregir movimiento de la sección
  return (
    <section
      id="about"
      ref={elementRef}
      className={`min-h-screen flex flex-col justify-center items-center p-6 max-w-6xl mx-auto my-12 animate-on-scroll ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <h2 className="text-5xl font-caveat font-bold mb-6 text-center md:hidden">
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
          <h2 className="text-5xl font-caveat font-bold mb-6 hidden md:block">
            {dict.title}
          </h2>

          {showButton ? (
            <>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: dict.p1 }}
              ></p>
            </>
          ) : (
            <>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: dict.p1 }}
              ></p>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: dict.p2 }}
              ></p>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: dict.p3 }}
              ></p>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{ __html: dict.p4 }}
              ></p>
            </>
          )}

          {showButton && (
            <div className="mt-8">
              <Link
                href={`/${lang}/about`}
                className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                {dict.readMore}
                <span className="material-symbols-rounded" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
