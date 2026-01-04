"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

/**
 * Valida la respuesta de resend.
 *
 * @param response La respuesta de resend.
 */
const validateResponse = (response: any) => {
  if (response?.error) throw response.error;
};

/**
 * Envía el email del formulario de contacto.
 *
 * Esta función se encarga de:
 * 1. Validar que los campos requeridos estén presentes.
 * 2. Enviar un email de notificación al dueño del portfolio.
 * 3. Enviar un email de agradecimiento al usuario que contactó.
 *
 * @param prevState - Estado previo (requerido por useActionState).
 * @param formData - Datos del formulario (name, email, message).
 * @returns Objeto con éxito o error.
 */
export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  let response;
  // Obtenemos los datos del formulario.
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Por favor, rellena todos los campos." };
  }

  try {
    // 1. Send email to Javier
    response = await resend.emails.send({
      from: "Portfolio Contact <portfolio@resend.dev>",
      to: "javiermr2510@hotmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      replyTo: email,
    });

    validateResponse(response);

    // 2. Send thank you email to user
    response = await resend.emails.send({
      from: "Javier Muñoz <portfolio@resend.dev>",
      to: email,
      subject: "¡Gracias por contactarme!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background-color: #7c3aed; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">¡Gracias por contactar!</h1>
          </div>
          <div style="padding: 30px; color: #374151; line-height: 1.6;">
            <p style="font-size: 16px;">Hola <strong>${name}</strong>,</p>
            <p>He recibido tu mensaje correctamente. Muchas gracias por tu interés y por tomarte el tiempo de escribirme.</p>
            <p>Revisaré tu consulta y te responderé lo antes posible.</p>
            <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 10px;">Atentamente,</p>
              <p style="font-weight: bold; color: #111827; margin-top: 0;">Javier Muñoz</p>
              
              <div style="margin-top: 20px; display: flex; align-items: center; gap: 15px;">
                <a href="https://www.linkedin.com/in/javier-muñoz-rodelgo-6582b9135/" style="text-decoration: none; margin-right: 10px;">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/250px-LinkedIn_logo_initials.png" alt="LinkedIn" width="24" height="24" style="display: block;" />
                </a>
                <a href="https://github.com/javier-munoz-rodelgo" style="text-decoration: none;">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/250px-Octicons-mark-github.svg.png" alt="GitHub" width="24" height="24" style="display: block;" />
                </a>
              </div>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af;">
            <p>&copy; ${new Date().getFullYear()} Javier Muñoz Portfolio</p>
          </div>
        </div>
      `,
      replyTo: "javiermr2510@hotmail.com",
    });

    validateResponse(response);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    // TODO: Si falla, mostrar error con un enlace a perfil de linkedin para contactar por ahí.
    return { error: "Hubo un error al enviar el mensaje. Inténtalo de nuevo." };
  }
}
