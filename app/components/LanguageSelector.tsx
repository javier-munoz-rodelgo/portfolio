"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

/**
 * Componente para seleccionar el idioma de la aplicación.
 * Muestra un menú desplegable o toggle para cambiar entre Inglés y Español.
 */
export default function LanguageSelector() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Obtener el idioma actual de la URL
  const currentLang = pathname.split("/")[1] || "es";

  /**
   * Genera la URL para el idioma seleccionado.
   * Reemplaza el segmento del idioma actual por el nuevo.
   *
   * @param lang - El código del nuevo idioma ('en' o 'es').
   * @returns La nueva ruta URL.
   */
  const getRedirectedPathname = (lang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  const languages = [
    { code: "es", label: "Español", flag: "fi fi-es" },
    { code: "en", label: "English", flag: "fi fi-gb" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-5! h-5! rounded-full cursor-pointer ${languages.find((l) => l.code === currentLang)?.flag} bg-cover!`}
      ></button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getRedirectedPathname(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors
                ${currentLang === lang.code ? "text-purple-600 font-semibold bg-purple-50" : "text-gray-600"}`}
            >
              <span className={lang.flag}></span>
              {lang.label}
            </Link>
          ))}
        </div>
      )}

      {/* Backdrop invisible para cerrar al hacer click fuera */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
