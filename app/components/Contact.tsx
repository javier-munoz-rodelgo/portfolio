"use client";

import React, { useState } from "react";

export default function ContactPage({ dict }: { dict: any }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarme!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-dvh flex flex-col justify-center items-center p-6 md:px-12 py-20"
    >
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-center">{dict.title}</h2>
        <p className="text-center text-gray-600">{dict.description}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {dict.name || "Name"}
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors w-full"
          >
            {dict.send}
          </button>
        </form>
      </div>
    </section>
  );
}
