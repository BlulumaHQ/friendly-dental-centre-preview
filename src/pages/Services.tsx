import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceOrthodontics from "@/assets/service-orthodontics.jpg";
import servicePediatric from "@/assets/service-pediatric.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceRestoratives from "@/assets/service-restoratives.jpg";
import serviceEsthetics from "@/assets/service-esthetics.jpg";

const serviceData = [
  { id: "implants", key: "implants", image: serviceImplants },
  { id: "orthodontics", key: "orthodontics", image: serviceOrthodontics },
  { id: "pediatric", key: "pediatric", image: servicePediatric },
  { id: "maintenance", key: "maintenance", image: serviceMaintenance },
  { id: "restoratives", key: "restoratives", image: serviceRestoratives },
  { id: "esthetics", key: "esthetics", image: serviceEsthetics },
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={s.image}
                      alt={t(`service.${s.key}`)}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-4">{t(`service.${s.key}`)}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t(`service.${s.key}.desc`)}</p>
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
