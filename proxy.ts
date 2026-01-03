import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/** Idiomas soportados por la aplicación */
const locales = ["en", "es"];
/** Idioma por defecto para usar como respaldo */
const defaultLocale = "es";

/**
 * Determina el mejor idioma coincidente basado en las cabeceras de la petición.
 * Utiliza la cabecera 'accept-language' y negocia con los idiomas soportados.
 *
 * @param request - La petición entrante NextRequest
 * @returns La cadena del mejor idioma coincidente
 */
function getLocale(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const languages = new Negotiator({ headers }).languages();

  try {
    return match(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

/**
 * Proxy para manejar el enrutamiento i18n.
 * Reemplaza al antiguo Middleware (deprecado en Next.js 16).
 * Comprueba si la ruta tiene un idioma, y si no, redirige al mejor idioma coincidente.
 *
 * @param request - La petición entrante NextRequest
 * @returns Un objeto NextResponse, potencialmente con una redirección.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirigir si no hay locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // ej. petición entrante es /products
  // La nueva URL es ahora /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

/**
 * Configuración del Proxy.
 * Excluye rutas de API, archivos estáticos y archivos internos de Next.js.
 */
export const config = {
  matcher: [
    // Ignorar todas las rutas internas (_next) y archivos estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
  ],
};
