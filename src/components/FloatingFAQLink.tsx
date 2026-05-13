import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingFAQLink = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("faq");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/faq");
    }
  };

  if (location.pathname === "/faq") return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
      aria-label={t("faq.viewFull")}
    >
      {t("faq.viewFull")}
    </button>
  );
};

export default FloatingFAQLink;
