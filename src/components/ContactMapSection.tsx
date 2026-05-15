import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactMapSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // silent fail
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl shadow-lg p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder={t("contact.firstName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder={t("contact.lastName")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.email")}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder={t("contact.email")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.phone")}</label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder={t("contact.phone")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.message")}</label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder={t("contact.message")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  {t("contact.submit")}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map + contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.8!2d-123.1177!3d49.1867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674e59c975555%3A0x5c5c5c5c5c5c5c5c!2s5508%20Hollybridge%20Way%2C%20Richmond%2C%20BC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friendly Dental Centre location"
              />
            </div>

            <div className="bg-background rounded-2xl shadow-lg p-6 space-y-5">
              {/* Top row: Address / Phone / Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground mb-0.5">Address</p>
                    <a
                      href="https://maps.app.goo.gl/siy6NG1vN6Ckz9R9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors leading-snug block"
                    >
                      {t("contact.address")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground mb-0.5">Phone</p>
                    <a href="tel:6042738315" className="text-muted-foreground text-sm hover:text-primary transition-colors">604-273-8315</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground mb-0.5">Email</p>
                    <a href="mailto:info@friendlydental.ca" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">info@friendlydental.ca</a>
                  </div>
                </div>
              </div>

              {/* Hours block: clean day/time table */}
              <div className="border-t border-border pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="font-semibold text-base text-foreground">{t("contact.hours")}</p>
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                  {[
                    ["contact.day.mon", "9AM–6PM"],
                    ["contact.day.tue", "9AM–6PM"],
                    ["contact.day.wed", "9AM–5PM"],
                    ["contact.day.thu", "9AM–5PM"],
                    ["contact.day.fri", "9AM–6PM"],
                    ["contact.day.sat", "9AM–5PM"],
                    ["contact.day.sun", t("contact.day.closed")],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 border-b border-dashed border-border/60 pb-1">
                      <dt className="text-muted-foreground">{t(k)}</dt>
                      <dd className="text-foreground font-medium tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-muted-foreground text-xs mt-3 italic">{t("contact.hours.holiday")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
