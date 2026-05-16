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
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 rounded-full cursor-pointer text-base ring-1 ring-gray-300 bg-white/70 dark:ring-slate-700 dark:bg-slate-900/70"
      >
        {languages.find((l) => l.code === currentLang)?.flag}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg border border-gray-100 dark:bg-slate-900 dark:shadow-black/30 dark:border-slate-700 rounded-xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getRedirectedPathname(lang.code)}
              onClick={() => {
                document.cookie = `NEXT_LOCALE=${lang.code}; path=/; max-age=31536000; samesite=lax`;
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors
                ${currentLang === lang.code ? "text-purple-600 dark:text-purple-300 font-semibold bg-purple-50 dark:bg-purple-900/40" : "text-gray-600 dark:text-slate-300"}`}
            >
              <span>{lang.flag}</span>
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
