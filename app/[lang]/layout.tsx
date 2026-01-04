import "../../styles/globals.css";
import { Inter as MaintFont } from "next/font/google";
import { Toaster } from "sonner";

import { Metadata } from "next";
import { getDictionary, Locale } from "../i18n/get-dictionary";

const mainFont = MaintFont({
  subsets: ["latin"],
  variable: "--main-font",
});

/**
 * Genera los parámetros estáticos para los idiomas.
 * Esto permite a Next.js generar estáticamente las rutas para ambos idiomas soportados.
 *
 * @returns Un array de objetos conteniendo el parámetro lang.
 */
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

/**
 * Genera la metainformación dinámica para la página basada en el idioma.
 *
 * @param props.params - Los parámetros de la ruta que contienen el idioma.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    // Título de la página.
    title: dict.meta.title,
    // Descripción para SEO.
    description: dict.meta.description,
    // Palabras clave para motores de búsqueda.
    keywords: dict.meta.keywords,
    // URL base para resolver rutas relativas en metadatos.
    metadataBase: new URL("https://javiermunoz.dev"),
    // Autores del contenido.
    authors: [{ name: "Javier Muñoz Rodelgo", url: "https://javiermunoz.dev" }],
    // Creador del sitio.
    creator: "Javier Muñoz Rodelgo",
    // Configuración para compartir en redes sociales (Open Graph)
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang,
      // URL canónica para este idioma
      url: `https://javiermunoz.dev/${lang}`,
      siteName: "Javier Muñoz Portfolio",
      images: [
        {
          url: "/avatar.png",
          width: 200,
          height: 200,
          alt: "Javier Muñoz Portfolio",
        },
      ],
    },
    // Configuración específica para tarjetas de Twitter
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    // Enlaces alternativos para SEO internacional
    alternates: {
      // URL canónica de esta página
      canonical: `https://javiermunoz.dev/${lang}`,
      // URLs alternativas para otros idiomas
      languages: {
        en: `https://javiermunoz.dev/en`,
        es: `https://javiermunoz.dev/es`,
      },
    },
    // Instrucciones para robots de búsqueda
    robots: {
      index: true, // Permitir indexación
      follow: true, // Permitir seguir enlaces
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

/**
 * Layout Raíz para la aplicación.
 * Establece el atributo lang del html basado en los parámetros.
 *
 * @param props.children - Los componentes hijos a renderizar.
 * @param props.params - Los parámetros de la ruta que contienen el idioma.
 */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${mainFont.className} bg-white text-gray-900 antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}
