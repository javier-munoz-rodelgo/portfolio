import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Technologies from "@/app/components/Technologies";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ScrollProgress from "@/app/components/ScrollProgress";
import ScrollToTop from "@/app/components/ScrollToTop";
import { getDictionary } from "../i18n/get-dictionary";

/**
 * Componente principal de la Página de Inicio.
 * Obtiene el diccionario basado en el parámetro de idioma y pasa secciones específicas a los componentes hijos.
 *
 * @param props.params - Parámetros de ruta que contienen el código del idioma.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <ScrollProgress />
      <Header dict={dict.navigation} />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Technologies dict={dict.technologies} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
      <ScrollToTop />
    </main>
  );
}
