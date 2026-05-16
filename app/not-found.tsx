import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Pagina no encontrada",
  description: "La pagina que buscas no existe.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">
          Vaya... parece que por aqui no hay nada
        </h1>
        <p className="mt-3 text-gray-600 dark:text-slate-300">Error 404</p>
      </div>
    </main>
  );
}
