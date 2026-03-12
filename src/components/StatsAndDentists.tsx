import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import dentistWu from "@/assets/dentist-wu.jpg";
import dentistPan from "@/assets/dentist-pan.jpg";
import dentistLin from "@/assets/dentist-lin.jpg";
import dentistChen from "@/assets/dentist-chen.jpg";

const stats = [
  { value: 10, suffix: "+", key: "stats.years" },
  { value: 4, suffix: "", key: "stats.dentists" },
  { value: 6, suffix: "", key: "stats.services" },
  { value: 1000, suffix: "+", key: "stats.patients" },
];

const dentists = [
  {
    name: "Dr. Patrick Wu",
    degree: "D.M.D.",
    image: dentistWu,
    credentials: [
      "University of Pennsylvania, School of Dental Medicine, 2009",
      "Clinical assistant professor, University of British Columbia",
      "Associate Fellow, American Association of Implant Dentistry",
    ],
  },
  {
    name: "Dr. Mike Pan",
    degree: "D.D.S.",
    image: dentistPan,
    credentials: [
      "Chung Shan Medical University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
  },
  {
    name: "Dr. Ivy Lin",
    degree: "D.D.S.",
    image: dentistLin,
    credentials: [
      "Shanghai Jiao Tong University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
  },
  {
    name: "Dr. Jie Chen",
    degree: "D.D.S.",
    image: dentistChen,
    credentials: [
      "D.D.S., Masters in Prosthodontics",
      "Shanghai Jiao Tong University, 2008",
      "National Dental Examining Board of Canada, 2022",
    ],
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-secondary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsAndDentists = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 text-sm mt-2 font-medium">{t(stat.key)}</p>
            </motion.div>
          ))}
        </div>

        {/* Dentists */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
        >
          {t("stats.meetTeam")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-foreground">{d.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-2">{d.degree}</p>
                <ul className="space-y-1">
                  {d.credentials.map((c, j) => (
                    <li key={j} className="text-primary-foreground/70 text-xs leading-relaxed">
                      – {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAndDentists;
