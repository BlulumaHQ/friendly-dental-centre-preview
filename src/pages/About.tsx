import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutClinic from "@/assets/about-clinic.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const { t } = useLanguage();

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
              {t("about.title")}
            </motion.h1>
            <p className="text-primary-foreground/80 text-lg">{t("about.subtitle")}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={aboutClinic} alt="Our clinic" className="rounded-2xl shadow-xl w-full" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.p3")}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
};

export default About;
