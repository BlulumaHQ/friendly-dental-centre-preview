import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyBookNow = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const handleClick = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-form";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-all hover:px-4 flex flex-col items-center gap-2 group"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      {!isMobile && <CalendarCheck className="h-5 w-5 rotate-90 mb-1" />}
      <span className="text-sm font-semibold tracking-wider">{t("nav.bookNow")}</span>
    </button>
  );
};

export default StickyBookNow;
