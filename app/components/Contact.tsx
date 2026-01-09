"use client";

import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";
import Form from "next/form";
import { sendContactEmail, ContactFormState } from "@/app/actions/contact";

// TODO: Añadir asterisco para los campos requeridos del formulario.

/**
 * Componente principal de la página de contacto.
 * Renderiza el formulario usando componentes nativos de Next.js.
 *
 * @param dict - Diccionario de traducciones para internacionalización.
 */
export default function ContactPage({ dict }: { dict: any }) {
  const initialState: ContactFormState = { success: false, error: "" };
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  // Efecto para mostrar notificaciones basadas en el estado del server action
  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
    if (state?.success) {
      toast.success("Mensaje enviado correctamente. ¡Gracias!");
      // Opcional: Resetear el formulario manualmente si es necesario,
      // aunque con useActionState y nativos se limpia al recargar o se puede usar ref.
      // Aquí simplemente confiamos en el feedback positivo.
      // Si quisiéramos limpiar los campos, necesitaríamos un ref al formulario.
      const formElement = document.querySelector("form") as HTMLFormElement;
      if (formElement) formElement.reset();
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="min-h-dvh flex flex-col justify-center items-center p-6 my-12"
    >
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-5xl font-caveat font-bold text-center">
          {dict.title}
        </h2>
        <p className="text-center text-gray-600">{dict.description}</p>

        <Form action={formAction} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {dict.name || "Name"}
            </label>
            <input
              id="name"
              name="name"
              required
              disabled={isPending}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {dict.email || "Email"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isPending}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              {dict.message || "Message"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isPending}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Enviando..." : dict.send}
          </button>
        </Form>
      </div>
    </section>
  );
}
