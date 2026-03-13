import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import slide000 from "@/assets/slide-000.jpg";
import slide002 from "@/assets/slide-002.jpg";
import slide003 from "@/assets/slide-003.jpg";
import slide005 from "@/assets/slide-005.jpg";
import slide006 from "@/assets/slide-006.jpg";

const slides = [slide000, slide002, slide003, slide005, slide006];

const WelcomeSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="welcome-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt="Friendly Dental Centre"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 justify-center">
              {slides.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    i === current ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="w-14 h-10 object-cover" />
                </button>
              ))}
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
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("welcome.desc")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
