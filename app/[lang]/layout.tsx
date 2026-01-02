import "../../styles/globals.css";
import { Inter as MaintFont } from "next/font/google";

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
        {/* Aquí tu Footer */}
      </body>
    </html>
  );
}
