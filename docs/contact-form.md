# Documentación del Formulario de Contacto

Esta sección describe la implementación técnica y funcional del formulario de contacto del portfolio.

## Tecnologías Utilizadas

- **Next.js Form Component**: Uso de `<Form>` componente nativo de Next.js.
- **React Actions**: Uso de `useActionState` para la gestión estados de acciones de servidor.
- **Server Actions**: Para el manejo de la lógica en el servidor sin exponer claves de API.
- **Resend**: Servicio utilizado para el envío transaccional de correos electrónicos.
- **Sonner**: Librería para mostrar notificaciones (toasts) al usuario sobre el estado del envío.

## Flujo de Funcionamiento

1.  **Usuario**: Rellena los campos (Nombre, Email, Mensaje) en el componente `Contact.tsx`.
2.  **Validación Cliente**: HTML5 valida campos requeridos (`required`).
3.  **Envío**: El componente `<Form>` invoca la Server Action `sendContactEmail`.
4.  **Estado**: `useActionState` gestiona el ciclo de vida de la petición (loading, éxito, error).
5.  **Validación Servidor**: Se verifica que los datos no estén vacíos.
6.  **Resend**:
    - Envía un correo de notificación a `javiermr2510@hotmail.com`.
    - Envía un correo de confirmación al usuario usándo una plantilla HTML personalizada con enlaces a redes sociales.
7.  **Feedback**:
    - **Éxito**: Se muestra un toast verde y se limpia el formulario.
    - **Error**: Se muestra un toast rojo informando del fallo.

## Configuración Requerida

Para que el sistema funcione en un nuevo entorno, es indispensable configurar la variable de entorno:

```env
RESEND_API_KEY=re_123456...
```

Esta clave se debe obtener desde el panel de control de [Resend](https://resend.com).

## Archivos Clave

- `app/components/Contact.tsx`: Interfaz de usuario del formulario.
- `app/actions/contact.ts`: Lógica de servidor y plantillas de email.
- `app/[lang]/layout.tsx`: Configuración global del `Toaster` para notificaciones.
