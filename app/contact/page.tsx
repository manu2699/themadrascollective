"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form data optionally
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Failed to send message");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="font-display text-xl sm:text-2xl uppercase tracking-tighter">
            <Link href="/">The Madras Collective</Link>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-tighter">
            <Link href="/" className="hover:text-accent">Index / 2026 Edition</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left Column - Details */}
          <div className="md:col-span-5">
            <span className="mb-6 block font-mono text-xs uppercase text-accent">Get in Touch</span>
            <h1 className="mb-8 font-display text-5xl uppercase leading-[0.85] tracking-tighter md:text-7xl">
              Start a <br /> dialogue.
            </h1>
            <p className="mb-12 max-w-md text-pretty text-lg text-muted-foreground">
              Whether you are an artist, a listener, or a curious collaborator. We read every message. The room is small, but the conversation is wide.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 font-mono text-[10px] uppercase text-muted-foreground">Direct Line</h3>
                <a
                  href="mailto:hello@madrascollective.in"
                  className="font-mono text-sm uppercase tracking-tight underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
                >
                  hello@madrascollective.in
                </a>
              </div>

              <div>
                <h3 className="mb-3 font-mono text-[10px] uppercase text-muted-foreground">Social Channels</h3>
                <ul className="space-y-2 font-mono text-sm uppercase tracking-tight">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-mono text-[10px] uppercase text-muted-foreground">Location</h3>
                <p className="font-mono text-sm uppercase tracking-tight">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full border border-border p-8 min-h-[350px]">
                <span className="mb-4 font-mono text-xs uppercase text-accent">Transmission Received</span>
                <h2 className="mb-6 font-display text-4xl uppercase tracking-tighter">Thank you.</h2>
                <p className="mb-8 max-w-sm text-pretty text-sm text-muted-foreground">
                  Your message has been transmitted successfully. We read every message and will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-accent cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="animate-reveal space-y-8 border border-border p-8"
                style={{ animationDelay: "100ms" }}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-[10px] uppercase text-muted-foreground"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex h-9 w-full shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent"
                      id="name"
                      placeholder="Your name"
                      name="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-[10px] uppercase text-muted-foreground"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex h-9 w-full shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent"
                      id="email"
                      placeholder="you@example.com"
                      name="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-[10px] uppercase text-muted-foreground"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="flex h-9 w-full shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent"
                    id="subject"
                    placeholder="What is this about?"
                    name="subject"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-[10px] uppercase text-muted-foreground"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="flex min-h-[60px] w-full shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-accent"
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us what is on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Transmitting..." : "Transmit Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
          <div className="font-display text-4xl uppercase leading-none tracking-tighter">
            The Madras <br /> Collective
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Navigation</h4>
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
                <li><Link href="/" className="hover:text-accent">Index</Link></li>
                <li><Link href="/" className="hover:text-accent">Archive</Link></li>
                <li><Link className="hover:text-accent text-accent" href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-mono text-[10px] uppercase text-muted-foreground">Social</h4>
              <ul className="space-y-2 font-mono text-[11px] uppercase tracking-tight">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-right font-mono text-[10px] uppercase text-muted-foreground">
            Chennai, India<br />EST. 2023 © All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
