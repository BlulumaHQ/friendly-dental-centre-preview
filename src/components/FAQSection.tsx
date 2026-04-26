import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImage from "@/assets/faq-clinic.jpg";

const faqKeys = [
  { q: "faq.q5", a: "faq.a5" }, // Can I book an appointment online?
  { q: "faq.q2", a: "faq.a2" }, // Do you accept insurance?
  { q: "faq.q4", a: "faq.a4" }, // Will CDCP cover everything?
  { q: "faq.q1", a: "faq.a1" }, // Is parking available?
  { q: "faq.q3", a: "faq.a3" }, // Do you accept dental emergencies?
];

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          {t("faq.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={faqImage}
                alt="Friendly Dental Centre"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
              {faqKeys.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-background">
                  <AccordionTrigger className="text-foreground font-semibold text-base text-left hover:no-underline">
                    {t(faq.q)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {t(faq.a)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-md"
              >
                Book Online Now
              </a>
              <Link
                to="/faq"
                className="text-primary font-semibold text-sm hover:underline"
              >
                View all FAQs →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
