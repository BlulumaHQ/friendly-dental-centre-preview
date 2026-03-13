import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyTrustSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          {t("trust.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-lg"
        >
          {t("trust.desc")}
        </motion.p>
      </div>
    </section>
  );
};

export default WhyTrustSection;
