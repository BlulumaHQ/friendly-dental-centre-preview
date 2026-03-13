import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import iconImplants from "@/assets/icon-implants.svg";
import iconOrthodontics from "@/assets/icon-orthodontics.svg";
import iconPediatric from "@/assets/icon-pediatric.svg";
import iconMaintenance from "@/assets/icon-maintenance.svg";
import iconRestoratives from "@/assets/icon-restoratives.svg";
import iconEsthetics from "@/assets/icon-esthetics.svg";

const services = [
  { key: "implants", icon: iconImplants, anchor: "#implants" },
  { key: "orthodontics", icon: iconOrthodontics, anchor: "#orthodontics" },
  { key: "pediatric", icon: iconPediatric, anchor: "#pediatric" },
  { key: "maintenance", icon: iconMaintenance, anchor: "#maintenance" },
  { key: "restoratives", icon: iconRestoratives, anchor: "#restoratives" },
  { key: "esthetics", icon: iconEsthetics, anchor: "#esthetics" },
];

const ServicesOverview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/services${s.anchor}`}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-background hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-20 h-20 mb-4">
                  <img src={s.icon} alt={t(`service.${s.key}`)} className="w-full h-full" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {t(`service.${s.key}`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">
                  {t(`service.${s.key}.short`)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
