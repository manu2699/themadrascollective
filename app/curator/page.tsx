"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function CuratorPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/messages", {
        headers: {
          "x-curator-password": password
        }
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        setIsAuthenticated(true);
      } else {
        setError("Access Denied: Incorrect Key");
      }
    } catch (err) {
      setError("An error occurred during verification.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <div className="mb-12 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-accent">The Madras Collective</Link>
        </div>
        <form onSubmit={handleLogin} className="w-full max-w-sm border border-border p-8 space-y-8 animate-reveal" style={{ animationDelay: "100ms" }}>
          <div className="text-center space-y-3">
            <h1 className="font-display text-4xl uppercase tracking-tighter">The Madras Collective</h1>
            <p className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Restricted Access</p>
          </div>

          <div className="space-y-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className="flex h-10 w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:border-accent text-center font-mono tracking-widest"
              required
            />
          </div>

          {error && <p className="text-destructive text-accent font-mono text-[10px] text-center uppercase tracking-widest">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-foreground px-4 py-4 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Verifying..." : "Authenticate"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground animate-reveal">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="font-display text-xl sm:text-2xl uppercase tracking-tighter">
            <Link href="/">The Madras Collective</Link>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-6">
            <span className="text-muted-foreground">Secure Connection</span>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
                setMessages([]);
              }}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Lock Screen
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-24">
        <div className="mb-16">
          <span className="mb-2 block font-mono text-xs uppercase text-accent">Database</span>
          <h3 className="mb-4 font-display text-2xl uppercase leading-[0.85] tracking-tighter md:text-3xl">
            Contacted List.
          </h3>
        </div>

        <div className="border border-border overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-muted/30 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Timestamp</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Sender</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Subject</th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Message Content</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-16 text-center font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                    No transmissions recorded yet.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-6 whitespace-nowrap font-mono text-[11px] text-muted-foreground uppercase tracking-tight">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="font-medium text-sm">{msg.name}</div>
                      <div className="font-mono text-[10px] uppercase text-muted-foreground mt-1">{msg.email}</div>
                    </td>
                    <td className="px-6 py-6 text-sm font-medium">{msg.subject}</td>
                    <td className="px-6 py-6 max-w-md text-sm text-muted-foreground">
                      <p className="line-clamp-3 leading-relaxed">{msg.message}</p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
