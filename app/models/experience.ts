/**
 * Representa un puesto de trabajo individual dentro de una empresa.
 */
export interface ExperienceItem {
  /** Título del puesto o cargo. */
  title: string;
  /** Fecha de inicio en formato ISO o legible por Date. */
  startDate: string;
  /** Fecha de fin. Si es null, se considera el puesto actual. */
  endDate: string | null;
  /** Lista de responsabilidades o logros en el puesto. */
  description: string[];
}

/**
 * Representa una empresa y la lista de experiencias laborales en ella.
 */
export interface Enterprise {
  /** Nombre de la empresa. */
  name: string;
  /** Subtítulo de la empresa. */
  subtitle?: string;
  /** Ruta o URL a la imagen/logo de la empresa. */
  image: string;
  /** Listado de puestos desempeñados en la empresa. */
  experiences: ExperienceItem[];
}

/**
 * Representa la estructura del diccionario de traducciones para la sección de experiencia.
 */
export interface ExperienceDictionary {
  /** Título de la sección (ej. "Experiencia" o "Experience"). */
  title: string;
  /** Texto para indicar el tiempo presente (ej. "Presente" o "Present"). */
  present: string;
  /** Listado de empresas y experiencias. */
  items: Enterprise[];
}
