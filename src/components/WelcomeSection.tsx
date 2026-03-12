import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutClinic from "@/assets/about-clinic.jpg";

const WelcomeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutClinic}
                alt="Friendly Dental Centre office"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-primary-foreground text-sm font-medium">
                  {t("contact.address")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t("welcome.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {t("welcome.desc")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
