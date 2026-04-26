import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";

const StickyBookNow = () => {
  const { t } = useLanguage();

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-3 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-all hover:px-4 flex flex-col items-center gap-2 group"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      <span className="text-sm font-semibold tracking-wider">{t("nav.bookNow")}</span>
    </a>
  );
};

export default StickyBookNow;

