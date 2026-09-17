function headerOffset() {
  if (typeof window === "undefined") return 0;
  const header = document.querySelector("header");
  return (header?.getBoundingClientRect().height ?? 0) + 8;
}

export function scrollToHash(hash: string) {
  if (typeof window === "undefined") return;

  const id = hash.replace(/^#/, "");
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  window.setTimeout(() => {
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, 10);

  if (window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function isInPageHash(href: string) {
  if (href.startsWith("#")) return true;
  if (href.startsWith("/#")) {
    if (typeof window === "undefined") return false;
    return window.location.pathname === "/";
  }
  return false;
}

export function hashFromHref(href: string) {
  if (href.startsWith("#")) return href;
  if (href.startsWith("/#")) return href.slice(1);
  return null;
}
