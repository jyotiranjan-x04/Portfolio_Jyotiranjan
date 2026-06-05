"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (status === "loading") return;
    
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          suppressHydrationWarning
          required
          name="name"
          placeholder="Your name"
          disabled={status === "loading"}
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring disabled:opacity-50"
        />
        <input
          suppressHydrationWarning
          required
          type="email"
          name="email"
          placeholder="Email"
          disabled={status === "loading"}
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring disabled:opacity-50"
        />
        <input
          suppressHydrationWarning
          required
          type="tel"
          name="phone"
          placeholder="Phone Number"
          disabled={status === "loading"}
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring disabled:opacity-50"
        />
        <input
          suppressHydrationWarning
          required
          name="subject"
          placeholder="Subject"
          disabled={status === "loading"}
          className="rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring disabled:opacity-50"
        />
      </div>
      <textarea
        suppressHydrationWarning
        required
        name="message"
        rows={6}
        placeholder="Tell me about your project..."
        disabled={status === "loading"}
        className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none ring-yellow-400/40 transition focus:ring disabled:opacity-50"
      />
      <Button 
        type="submit" 
        disabled={status === "loading" || status === "success"}
        className="bg-yellow-400 text-black hover:bg-yellow-300 disabled:bg-yellow-600"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : status === "success" ? (
          "Message Sent"
        ) : (
          "Send Message"
        )}
      </Button>
      
      {status === "success" && (
        <p className="text-sm font-medium text-green-400">Message sent successfully!</p>
      )}
      
      {status === "error" && (
        <p className="text-sm font-medium text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
