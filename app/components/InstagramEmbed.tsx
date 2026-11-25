"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
  caption?: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function normalizeInstagramPermalink(url: string): string {
  const match = url.match(/instagram\.com\/(reel|p)\/([^/?#]+)/);
  if (match?.[1] && match?.[2]) {
    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  }
  return url;
}

export default function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const permalink = normalizeInstagramPermalink(url);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      window.instgrm?.Embeds?.process();
    };
    document.body.appendChild(script);
  }, [permalink]);

  return (
    <div className="w-full max-w-[540px]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "0",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "100%",
        }}
      >
        <div className="p-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground underline"
          >
            {caption ?? "View this post on Instagram"}
          </a>
        </div>
      </blockquote>
    </div>
  );
}
