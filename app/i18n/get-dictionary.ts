import "server-only";

/**
 * Tipo que representa los idiomas disponibles.
 */
export type Locale = "en" | "es";

/**
 * Mapa de diccionarios disponibles y sus funciones de carga.
 */
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

/**
 * Recupera el diccionario para un idioma específico.
 *
 * @param locale - El idioma para el cual obtener el diccionario ('en' o 'es').
 * @returns Una promesa que se resuelve con el objeto del diccionario.
 */
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
