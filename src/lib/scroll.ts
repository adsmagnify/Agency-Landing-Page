export function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;

  const id = hash.replace(/^#/, "");
  if (!id) return;

  const el =
    (id === "apply" ? document.getElementById("apply-form") : null) ??
    document.getElementById(id);
  if (!el) return;

  window.setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 10);

  if (window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function isInPageHash(href: string) {
  return href.startsWith("#") || href.startsWith("/#");
}

export function hashFromHref(href: string) {
  if (href.startsWith("#")) return href;
  if (href.startsWith("/#")) return href.slice(1);
  return null;
}
