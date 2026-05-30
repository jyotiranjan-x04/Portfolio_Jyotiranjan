"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          suppressHydrationWarning
          required
          name="name"
          placeholder="Your name"
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring"
        />
        <input
          suppressHydrationWarning
          required
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring"
        />
      </div>
      <input
        suppressHydrationWarning
        required
        name="subject"
        placeholder="Subject"
        className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring"
      />
      <textarea
        suppressHydrationWarning
        required
        name="message"
        rows={6}
        placeholder="Tell me about your project..."
        className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring"
      />
      <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-300">
        Send Message
      </Button>
      {submitted ? <p className="text-sm text-yellow-300">Thanks! I will get back to you shortly.</p> : null}
    </form>
  );
}
