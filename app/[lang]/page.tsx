import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Technologies from "@/app/components/Technologies";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { getDictionary } from "../i18n/get-dictionary";
import { getAbsoluteUrl, SITE_URL } from "@/app/lib/seo";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Javier Muñoz Rodelgo",
    url: getAbsoluteUrl(lang),
    image: `${SITE_URL}/avatar.png`,
    jobTitle: "Front-end Manager & UI Developer",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "StencilJS",
      "Design Systems",
      "UI/UX",
    ],
    sameAs: [
      "https://www.linkedin.com/in/javier-mu%C3%B1oz-rodelgo/",
      "https://github.com/",
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Javier Munoz Portfolio",
    url: getAbsoluteUrl(lang),
    inLanguage: lang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <main aria-label={lang === "es" ? "Página principal" : "Home page"}>
        <Header dict={dict.navigation} page="home" lang={lang} />
        <Hero dict={dict.hero} />
        <About dict={dict.about} lang={lang} showButton={true} />
        <Technologies dict={dict.technologies} />
        <Projects dict={dict.projects} />
        <Contact dict={dict.contact} />
        <Footer dict={dict.footer} />
        <ScrollToTop />
      </main>
    </>
  );
}
