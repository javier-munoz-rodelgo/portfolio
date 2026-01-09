# Documentación de Fuentes

Este proyecto utiliza **Next.js Font Optimization** (`next/font`) integrado con **Tailwind CSS** para gestionar la tipografía de manera eficiente y performante.

## Fuentes Utilizadas

Actualmente se utilizan dos familias de fuentes:

1.  **Inter** (`sans`): Fuente principal para el cuerpo del texto y elementos de interfaz.
2.  **Caveat** (`cursive`): Fuente manuscrita utilizada para títulos y elementos decorativos.

## Implementación Técnica

### Carga de Fuentes (`layout.tsx`)

Las fuentes se cargan en `app/[lang]/layout.tsx` utilizando `next/font/google`. Se configuran como **variables CSS** para ser consumidas por Tailwind.

```typescript
// app/[lang]/layout.tsx
import { Inter as MaintFont, Caveat } from "next/font/google";

const mainFont = MaintFont({
  subsets: ["latin"],
  variable: "--font-sans", // Variable CSS para Inter
  display: "swap", // Optimización de carga (evita FOIT)
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat", // Variable CSS para Caveat
  display: "swap",
});
```

Las variables se inyectan en el `<body>` de la aplicación:

```tsx
<body className={`${mainFont.variable} ${caveat.variable} font-sans ...`}>
```

### Integración con Tailwind v4 (`globals.css`)

En Tailwind v4, la configuración se realiza directamente en CSS utilizando la directiva `@theme`.

```css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  /* Mapeo de variables CSS a utilidades de Tailwind */
  --font-sans: var(--font-sans);
  --font-caveat: var(--font-caveat), cursive;
}
```

### Estilos Globales (`globals.css`)

Actualmente no se aplican estilos globales a los encabezados. Se debe utilizar la clase de utilidad `font-caveat` explícitamente donde se requiera.

## Uso en Componentes

### Fuente Principal (Inter)

Es la fuente por defecto (`font-sans`), por lo que no es necesario aplicar clases específicas a menos que se haya cambiado el contexto.

- Clase explícita: `font-sans`

### Fuente Decorativa (Caveat)

Para aplicar la fuente manuscrita a títulos o elementos decorativos, se debe añadir la clase de utilidad:

- Clase explícita: `font-caveat`

```tsx
<h2 className="text-5xl font-caveat font-bold ...">Título de la Sección</h2>
```

## Optimización y Performance

- **Self-hosting automático**: Next.js descarga y aloja los archivos de fuente en el build time, eliminando peticiones externas a Google Fonts.
- **`display: 'swap'`**: Configurado explícitamente para mejorar el _First Contentful Paint (FCP)_, mostrando texto con una fuente de respaldo inmediatamente hasta que la fuente web cargue.
- **Preloading**: Next.js precarga automáticamente las fuentes utilizadas en las páginas.
