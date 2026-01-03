# Documentación del Sistema de Internacionalización (i18n)

Este proyecto utiliza el **Next.js App Router** para manejar la internacionalización. El sistema está diseñado para ser ligero, eficiente y fácil de escalar.

## Estructura del Sistema

La implementación se basa en tres pilares principales:

1.  **Detección y Redirección (Proxy)**: Determina el idioma del usuario y redirige a la ruta correcta.
2.  **Rutado Dinámico**: Utiliza una carpeta `[lang]` para manejar las rutas por idioma.
3.  **Diccionarios**: Archivos JSON simples que contienen las traducciones.

### Archivos Clave

- `proxy.ts`: Reemplazo del middleware tradicional. Intercepta las peticiones para asegurar que siempre tengan un prefijo de idioma (ej. `/es/` o `/en/`).
- `app/i18n/get-dictionary.ts`: Utilidad asíncrona para cargar el archivo JSON correspondiente al idioma solicitado.
- `app/i18n/dictionaries/*.json`: Archivos con los textos traducidos.
- `app/[lang]/layout.tsx`: Layout raíz que captura el parámetro `lang` y configura el atributo `lang` en el HTML.

## Cómo Funciona

1.  **Entrada**: Cuando un usuario visita el sitio (ej. `midominio.com`), el `proxy.ts` intercepta la petición.
2.  **Detección**: Usa la librería `negotiator` y `@formatjs/intl-localematcher` para comparar las preferencias del navegador del usuario con los idiomas soportados (`es`, `en`).
3.  **Redirección**: Si la URL no tiene idioma, redirige a la mejor coincidencia (ej. `/es`).
4.  **Renderizado**: Next.js renderiza la página dentro de `app/[lang]`. El componente recibe `params.lang`.
5.  **Traducción**: El componente llama a `getDictionary(lang)` para obtener los textos y renderizarlos.

## Guía de Uso

### Añadir un Nuevo Idioma

1.  Crea un nuevo archivo de diccionario: `app/i18n/dictionaries/fr.json`.
2.  Actualiza los tipos y la configuración en `app/i18n/get-dictionary.ts`:
    ```typescript
    export type Locale = "en" | "es" | "fr";
    const dictionaries = {
      // ...
      fr: () =>
        import("./dictionaries/fr.json").then((module) => module.default),
    };
    ```
3.  Añade el idioma a la lista de `locales` en `proxy.ts` y `app/[lang]/layout.tsx`.
4.  Actualiza el componente `LanguageSelector.tsx` para incluir el nuevo idioma y su bandera.

### Selector de Idioma

El componente `LanguageSelector` permite cambiar el idioma manualmente. Utiliza la librería `flag-icons` para mostrar las banderas.
Para usarlo, impórtalo en cualquier componente (usualmente en el `Header`):

```tsx
import LanguageSelector from "./LanguageSelector";

// ...
<LanguageSelector />;
```

## Migración a Proxy (Next.js 16+)

Este proyecto sigue las recomendaciones de Next.js 16, utilizando un archivo `proxy.ts` en la raíz en lugar de `middleware.ts`.
La función exportada se llama `proxy` y cumple la misma función de interceptar y reescribir/redirigir peticiones en el borde (edge).
