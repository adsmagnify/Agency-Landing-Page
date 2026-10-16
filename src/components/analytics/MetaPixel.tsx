"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export const META_PIXEL_ID = "1704753840648806";
const MATCHING_KEY = "meta_advanced_matching";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function readQuery(params: URLSearchParams, keys: string[]) {
  for (const key of keys) {
    const value = params.get(key);
    if (value?.trim()) return value.trim();
  }
  return "";
}

export function getAdvancedMatching() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(MATCHING_KEY) ?? "{}") as Record<
      string,
      string
    >;
  } catch {
    stored = {};
  }

  const email = (
    readQuery(params, ["invitee_email", "email"]) ||
    stored.em ||
    ""
  ).toLowerCase();
  const phone = (
    readQuery(params, ["invitee_phone", "phone", "text_reminder_number"]) ||
    stored.ph ||
    ""
  ).replace(/\D/g, "");
  let firstName = (
    readQuery(params, ["invitee_first_name", "first_name"]) ||
    stored.fn ||
    ""
  ).toLowerCase();
  let lastName = (
    readQuery(params, ["invitee_last_name", "last_name"]) ||
    stored.ln ||
    ""
  ).toLowerCase();
  const fullName = readQuery(params, ["invitee_full_name", "invitee_name", "name"]);

  if (!firstName && fullName) {
    const parts = fullName.split(/\s+/);
    firstName = (parts[0] ?? "").toLowerCase();
    lastName = parts.slice(1).join(" ").toLowerCase();
  }

  const data: Record<string, string> = {};
  if (email.includes("@")) data.em = email;
  if (phone.length >= 10) data.ph = phone;
  if (firstName) data.fn = firstName;
  if (lastName) data.ln = lastName;

  if (Object.keys(data).length) {
    try {
      sessionStorage.setItem(MATCHING_KEY, JSON.stringify(data));
    } catch {
      /* ignore quota / private mode */
    }
  }

  return data;
}

export function MetaPixel() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          (function(){
            var stored = {};
            try { stored = JSON.parse(sessionStorage.getItem('${MATCHING_KEY}') || '{}'); } catch (e) {}
            var q = new URLSearchParams(location.search);
            function pick(keys){
              for (var i = 0; i < keys.length; i++) {
                var value = q.get(keys[i]);
                if (value && value.trim()) return value.trim();
              }
              return '';
            }
            var em = (pick(['invitee_email','email']) || stored.em || '').toLowerCase();
            var ph = (pick(['invitee_phone','phone','text_reminder_number']) || stored.ph || '').replace(/\\D/g,'');
            var fn = (pick(['invitee_first_name','first_name']) || stored.fn || '').toLowerCase();
            var ln = (pick(['invitee_last_name','last_name']) || stored.ln || '').toLowerCase();
            var full = pick(['invitee_full_name','invitee_name','name']);
            if (!fn && full) {
              var parts = full.split(/\\s+/);
              fn = (parts[0] || '').toLowerCase();
              ln = parts.slice(1).join(' ').toLowerCase();
            }
            var userData = {};
            if (em.indexOf('@') !== -1) userData.em = em;
            if (ph.length >= 10) userData.ph = ph;
            if (fn) userData.fn = fn;
            if (ln) userData.ln = ln;
            try {
              if (Object.keys(userData).length) {
                sessionStorage.setItem('${MATCHING_KEY}', JSON.stringify(userData));
              }
            } catch (e) {}
            fbq('init', '${META_PIXEL_ID}', {
              em: userData.em,
              ph: userData.ph,
              fn: userData.fn,
              ln: userData.ln
            });
            fbq('track', 'PageView');
          })();
        `}
      </Script>
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export function MetaLeadEvent() {
  useEffect(() => {
    const userData = getAdvancedMatching();
    if (Object.keys(userData).length) {
      window.fbq?.("init", META_PIXEL_ID, userData);
    }
    window.fbq?.("track", "Lead");
  }, []);

  return null;
}
