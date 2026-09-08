import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/constants";

const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, "");

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-ink-950/10 bg-white text-[#25D366] shadow-[0_8px_24px_-6px_rgba(15,23,42,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden />
    </a>
  );
}
