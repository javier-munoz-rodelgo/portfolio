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
 * Middleware para manejar el enrutamiento i18n.
 * Comprueba si la ruta tiene un idioma, y si no, redirige al mejor idioma coincidente.
 *
 * @param request - La petición entrante NextRequest
 * @returns Un objeto NextResponse, potencialmente con una redirección.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

/**
 * Configuración del Middleware.
 * Excluye rutas de API, archivos estáticos y archivos internos de Next.js.
 */
export const config = {
  matcher: [
    // Ignorar todas las rutas internas (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)",
  ],
};
