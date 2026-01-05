# Implementación de Vercel Analytics

Este documento describe la integración de **Vercel Analytics** en el proyecto para el seguimiento de métricas de visitantes.

## 1. Descripción

Se ha añadido el componente de analíticas de Vercel para recolectar datos sobre el tráfico y rendimiento de la web de forma respetuosa con la privacidad.

## 2. Implementación

### Dependencias

Se ha instalado el paquete oficial:

```bash
npm install @vercel/analytics
```

### Código

El componente `<Analytics />` se ha integrado en el layout raíz de la aplicación para asegurar que se carga en todas las páginas.

**Archivo:** `app/[lang]/layout.tsx`

```tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>{/* ... */}</head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 3. Fuentes y Referencias

- **Documentación Oficial:** [Vercel Analytics Quickstart for Next.js](https://vercel.com/docs/analytics/quickstart?framework=nextjs)

## 4. Notas Adicionales

- **Producción:** Las analíticas funcionarán automáticamente al desplegar en Vercel.
- **Desarrollo:** Por defecto no se envían datos en entorno de desarrollo.
- **Debug:** Para probar en local, se puede usar la prop `debug`: `<Analytics debug={true} />`.

## 5. Privacidad y GDPR

Una de las ventajas principales de **Vercel Web Analytics** es su enfoque "privacy-first":

- **Sin Cookies:** No utiliza cookies para rastrear visitantes.
- **GDPR Compliant:** Al no recolectar datos personales identificables (PII) ni usar cookies, **no requiere** el típico banner de consentimiento de cookies para su funcionamiento básico.
- **Retención de Datos:** Los datos se anonimizan y los identificadores de visita se descartan cada 24 horas.

> [!NOTE]
> Aunque no se requiera banner de cookies, es buena práctica mencionar el uso de analíticas anónimas en la **Política de Privacidad** del sitio.
