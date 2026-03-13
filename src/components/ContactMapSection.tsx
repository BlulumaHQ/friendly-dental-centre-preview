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

            <div className="bg-background rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Address</p>
                    <p className="text-muted-foreground text-base">{t("contact.address")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Phone</p>
                    <a href="tel:6042738315" className="text-muted-foreground text-base hover:text-primary transition-colors">604-273-8315</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-base text-foreground">Email</p>
                    <a href="mailto:info@friendlydental.ca" className="text-muted-foreground text-base hover:text-primary transition-colors">info@friendlydental.ca</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-base text-foreground">{t("contact.hours")}</p>
                    <p className="text-muted-foreground text-base">{t("contact.monFri")}</p>
                    <p className="text-muted-foreground text-base">{t("contact.sat")}</p>
                    <p className="text-muted-foreground text-base">{t("contact.sun")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
