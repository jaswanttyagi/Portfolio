"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-zinc-200">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Contact Me
      </h2>
      <p className="mb-8 text-center text-zinc-400">
        Send me a message and I will get back to you at the earliest.
      </p>
      <ContactForm />
    </section>
  );
}
