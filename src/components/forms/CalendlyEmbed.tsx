"use client";

import { useEffect, useState } from "react";

export function CalendlyEmbed({ url }: { url: string }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const parsed = new URL(url, window.location.origin);
    const eventUrl = `${parsed.origin}${parsed.pathname}`.replace(/\/$/, "");
    const params = new URLSearchParams(parsed.search);
    params.set("embed_domain", window.location.hostname);
    params.set("embed_type", "Inline");
    params.set("hide_gdpr_banner", "1");
    setSrc(`${eventUrl}?${params.toString()}`);

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled") return;
      window.location.assign(`${window.location.origin}/thank-you`);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [url]);

  if (!src) {
    return <div className="h-[700px] min-h-[700px] w-full bg-white" aria-hidden />;
  }

  return (
    <iframe
      src={src}
      title="Book a call on Calendly"
      className="h-[700px] min-h-[700px] w-full min-w-[320px] border-0 bg-white"
    />
  );
}
