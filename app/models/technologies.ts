/**
 * Tecnología.
 */
interface Technology {
  /**
   * Texto de la tecnología.
   */
  text: string;

  /**
   * Logo de la tecnología.
   */
  logo: string;
}

/**
 * Área de tecnología.
 */
interface Area {
  /**
   * Título del área.
   */
  title: string;

  /**
   * Tecnologías del área.
   */
  technologies: Technology[];
}
