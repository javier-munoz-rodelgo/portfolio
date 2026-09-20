# 🧑‍💻 Portfolio — Desarrollado con Next.js

Este proyecto es un **portfolio personal** desarrollado con [Next.js](https://nextjs.org/docs) inspirado en el estilo moderno y minimalista de portfolios creativos como [Jonny Czar Portfolio 2024](https://www.behance.net/gallery/159150041/Jonny-Czar-Portfolio-2024).

El objetivo es mostrar proyectos, experiencia y habilidades técnicas en un entorno **rápido, accesible y escalable**, usando las herramientas recomendadas oficialmente por el ecosistema Next.js.

---

## 🚀 Tecnologías utilizadas

### 🧩 [Next.js](https://nextjs.org/docs)

Framework de React que ofrece **renderizado híbrido (SSR/SSG)**, **optimización automática de imágenes**, **routing basado en archivos** y **despliegue sencillo en Vercel**.  
Usamos la **App Router** (`/app`) según la documentación oficial.

### ⚛️ [React](https://react.dev)

Librería principal para construir interfaces interactivas y reutilizables. Toda la arquitectura de componentes se basa en React funcional con hooks.

### 🎨 [Tailwind CSS](https://tailwindcss.com/docs)

Framework de CSS utilitario que permite crear diseños **responsivos y modernos** rápidamente.  
Está integrado según la guía oficial de Next.js para [Tailwind](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css).

### 🎞️ [Framer Motion](https://www.framer.com/motion/)

Librería de animaciones para React, usada para crear transiciones suaves, efectos de entrada y animaciones al hacer scroll o hover.

### 🧠 [TypeScript](https://www.typescriptlang.org/docs/)

Añade tipado estático a JavaScript, ayudando a prevenir errores y mejorar la mantenibilidad del código.

### 🖼️ [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images)

Sistema de optimización de imágenes integrado en Next.js para mejorar el rendimiento y el SEO del portfolio.

---

## 🏗️ Estructura del proyecto

```json
/my-portfolio/
├─ app/
│    ├─ layout.tsx              → Layout global (Navbar, Footer)
│    ├─ page.tsx                → Página principal (Home)
│    ├─ about/
│    │     └─ page.tsx          → Página “Sobre mí”
│    ├─ projects/
│    │     ├─ page.tsx          → Listado de proyectos
│    │     └─ [slug]/page.tsx   → Detalle de cada proyecto
│    └─ components/             → Componentes reutilizables (Hero, Navbar, Cards, etc.)
├─ public/
│     └─ images/                → Imágenes estáticas optimizadas
├─ styles/
│     └─ globals.css            → Estilos globales + Tailwind
├─ data/
│     └─ projects.json          → Datos de proyectos (título, descripción, etc.)
├─ tailwind.config.js           → Configuración de Tailwind
├─ next.config.js               → Configuración de Next.js
├─ tsconfig.json                → Configuración de TypeScript
└─ package.json
```

## 🧱 Funcionalidades principales

- Diseño totalmente responsive con Tailwind CSS
- Animaciones suaves con Framer Motion
- Rutas dinámicas (`/projects/[slug]`) para cada proyecto
- Carga optimizada de imágenes con next/image
- SEO básico con metadatos en el layout
- Código tipado y mantenible con TypeScript

⸻

## 🛠️ Próximas mejoras

- Añadir modo oscuro
- Integrar CMS (Sanity / Contentful / Notion API)
- Añadir sección de blog con MDX
- Incorporar efectos de scroll (parallax / reveal)
- Internacionalización (i18n) ✅

## 🌍 Internacionalización

El proyecto cuenta con soporte completo para inglés y español.

- **Detección Automática**: Redirección según las preferencias del navegador.
- **Selector de Idioma**: Componente manual para cambio de idioma.
- **Documentación Completa**: Consulta los detalles de implementación en [docs/internationalization.md](docs/internationalization.md).
