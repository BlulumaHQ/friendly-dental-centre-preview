import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import iconImplants from "@/assets/icon-implants.svg";
import iconOrthodontics from "@/assets/icon-orthodontics.svg";
import iconPediatric from "@/assets/icon-pediatric.svg";
import iconMaintenance from "@/assets/icon-maintenance.svg";
import iconRestoratives from "@/assets/icon-restoratives.svg";
import iconEsthetics from "@/assets/icon-esthetics.svg";

const serviceData = [
  { id: "implants", key: "implants", icon: iconImplants },
  { id: "orthodontics", key: "orthodontics", icon: iconOrthodontics },
  { id: "pediatric", key: "pediatric", icon: iconPediatric },
  { id: "maintenance", key: "maintenance", icon: iconMaintenance },
  { id: "restoratives", key: "restoratives", icon: iconRestoratives },
  { id: "esthetics", key: "esthetics", icon: iconEsthetics },
];

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
            >
              {t("nav.services")}
            </motion.h1>
            <p className="text-primary-foreground/80 text-lg">{t("services.subtitle")}</p>
          </div>
        </section>

        {/* Service sections */}
        {serviceData.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-section-light"}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="service-icon w-40 h-40">
                    <img src={s.icon} alt={t(`service.${s.key}`)} className="w-full h-full" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">{t(`service.${s.key}`)}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t(`service.${s.key}.desc`)}</p>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
};

export default Services;
