import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollProgress from "@/app/components/ScrollProgress";
import ScrollToTop from "@/app/components/ScrollToTop";
import { getDictionary } from "../../i18n/get-dictionary";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Componente de la página "Sobre mi".
 * Muestra el componente About (sin botón de navegación) y el componente Experience.
 *
 * @param props.params - Parámetros de ruta que contienen el código del idioma.
 */
export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <ScrollProgress />
      <Header dict={dict.navigation} lang={lang} />
      <About dict={dict.about} lang={lang} showButton={false} />
      <Experience dict={dict.experience} />

      <section className="flex flex-col justify-center items-center p-6 max-w-6xl mx-auto my-12">
        <Link
          href={`/${lang}`}
          className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:border-purple-700 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft size={20} />
          {dict.back}
        </Link>
      </section>

      <Footer dict={dict.footer} />
      <ScrollToTop />
    </main>
  );
}
