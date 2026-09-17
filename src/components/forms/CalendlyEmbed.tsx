"use client";

import { useEffect, useState } from "react";

export function CalendlyEmbed({ url }: { url: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const eventUrl = url.split("?")[0].replace(/\/$/, "");
    const params = new URLSearchParams({
      embed_domain: window.location.hostname,
      embed_type: "Inline",
      hide_gdpr_banner: "1",
    });
    setSrc(`${eventUrl}?${params.toString()}`);
  }, [url]);

  if (!src) {
    return <div className="h-[720px] w-full bg-white" aria-hidden />;
  }

  return (
    <iframe
      src={src}
      title="Book a call on Calendly"
      className="h-[720px] w-full border-0 bg-white"
    />
  );
}
