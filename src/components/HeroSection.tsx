import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import heroMobileFallback from "@/assets/hero-mobile-fallback.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background media */}
      <div className="absolute inset-0">
        {isMobile ? (
          <img
            src={heroMobileFallback}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            key="desktop"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {t("hero.title1")}{" "}
            <span className="text-secondary">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/80 text-lg mb-8 leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-lg"
            >
              {t("hero.cta")}
            </button>
            <a
              href="tel:6042738315"
              className="flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t("hero.call")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
