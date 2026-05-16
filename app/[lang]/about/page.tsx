import type { Metadata } from "next";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { getDictionary, type Locale } from "../../i18n/get-dictionary";
import Link from "next/link";
import { getAbsoluteUrl, getLanguageAlternates } from "@/app/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const title =
    lang === "es"
      ? "Sobre mi | Experiencia profesional"
      : "About me | Professional experience";
  const description =
    lang === "es"
      ? "Conoce la experiencia profesional, liderazgo frontend y trayectoria de Javier Muñoz en UI/UX, design systems y desarrollo web."
      : "Discover Javier Muñoz's professional experience, frontend leadership, and background in UI/UX, design systems, and web development.";

  return {
    title,
    description,
    alternates: {
      canonical: getAbsoluteUrl(lang, "/about"),
      languages: getLanguageAlternates("/about"),
    },
    openGraph: {
      title,
      description,
      type: "profile",
      url: getAbsoluteUrl(lang, "/about"),
      images: [
        { url: "/avatar.png", width: 1200, height: 630, alt: dict.meta.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/avatar.png"],
    },
  };
}

export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main aria-label={lang === "es" ? "Página sobre mí" : "About page"}>
      <Header dict={dict.navigation} lang={lang} />
      <About dict={dict.about} lang={lang} showButton={false} />
      <Experience dict={dict.experience} />

      <section className="flex flex-col justify-center items-center p-6 max-w-6xl mx-auto my-12">
        <Link
          href={`/${lang}`}
          className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:border-purple-700 hover:text-purple-700 transition-colors"
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_back
          </span>
          {dict.back}
        </Link>
      </section>

      <Footer dict={dict.footer} />
      <ScrollToTop />
    </main>
  );
}
