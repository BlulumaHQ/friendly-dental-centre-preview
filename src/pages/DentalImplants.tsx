import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Cpu,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";
import dentistWu from "@/assets/dentist-wu.jpg";
import serviceImplants from "@/assets/service-implants.jpg";

const CLINIC_PHONE_DISPLAY = "604-273-8315";
const CLINIC_PHONE_TEL = "tel:6042738315";
const CLINIC_NAME = "Friendly Dental Centre";
const PAGE_URL = "https://friendlydental.ca/services/dental-implants";

// analytics no-op safe wrapper
const track = (event: string, payload: Record<string, unknown> = {}) => {
  try {
    const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    const data = { event, clinic: CLINIC_NAME, path: "/services/dental-implants", ...payload };
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(data);
    if (typeof w.gtag === "function") w.gtag("event", event, data);
  } catch {
    /* analytics must never break UI */
  }
};

const credentials = [
  { icon: Award, key: "impl.cred.1" },
  { icon: ShieldCheck, key: "impl.cred.2" },
  { icon: Sparkles, key: "impl.cred.3" },
  { icon: Cpu, key: "impl.cred.4" },
];

const options = [
  { title: "impl.opt.1.title", body: "impl.opt.1.body" },
  { title: "impl.opt.2.title", body: "impl.opt.2.body" },
  { title: "impl.opt.3.title", body: "impl.opt.3.body" },
];

const principles = [
  { label: "impl.drwu.pr.1", desc: "impl.drwu.pr.1.desc" },
  { label: "impl.drwu.pr.2", desc: "impl.drwu.pr.2.desc" },
  { label: "impl.drwu.pr.3", desc: "impl.drwu.pr.3.desc" },
  { label: "impl.drwu.pr.4", desc: "impl.drwu.pr.4.desc" },
  { label: "impl.drwu.pr.5", desc: "impl.drwu.pr.5.desc" },
];

const digital = ["impl.dig.1", "impl.dig.2", "impl.dig.3", "impl.dig.4", "impl.dig.5"];

const miBenefits = ["impl.mi.b1", "impl.mi.b2", "impl.mi.b3", "impl.mi.b4", "impl.mi.b5", "impl.mi.b6"];

const materialFactors = [
  "impl.mat.i1",
  "impl.mat.i2",
  "impl.mat.i3",
  "impl.mat.i4",
  "impl.mat.i5",
  "impl.mat.i6",
  "impl.mat.i7",
];

const steps = [
  "impl.proc.1",
  "impl.proc.2",
  "impl.proc.3",
  "impl.proc.4",
  "impl.proc.5",
  "impl.proc.6",
  "impl.proc.7",
];

const faqGroups: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "impl.faq.g1",
    items: [
      { q: "impl.faq.q1", a: "impl.faq.a1" },
      { q: "impl.faq.q2", a: "impl.faq.a2" },
      { q: "impl.faq.q3", a: "impl.faq.a3" },
      { q: "impl.faq.q4", a: "impl.faq.a4" },
    ],
  },
  {
    heading: "impl.faq.g2",
    items: [
      { q: "impl.faq.q5", a: "impl.faq.a5" },
      { q: "impl.faq.q6", a: "impl.faq.a6" },
      { q: "impl.faq.q7", a: "impl.faq.a7" },
      { q: "impl.faq.q8", a: "impl.faq.a8" },
      { q: "impl.faq.q9", a: "impl.faq.a9" },
    ],
  },
  {
    heading: "impl.faq.g3",
    items: [
      { q: "impl.faq.q10", a: "impl.faq.a10" },
      { q: "impl.faq.q11", a: "impl.faq.a11" },
      { q: "impl.faq.q12", a: "impl.faq.a12" },
      { q: "impl.faq.q13", a: "impl.faq.a13" },
    ],
  },
];

const DentalImplants = () => {
  const { t, lang } = useLanguage();

  // Update <title> and <meta description> for the current language.
  useEffect(() => {
    window.scrollTo(0, 0);
    const title = t("impl.seo.title");
    const desc = t("impl.seo.description");
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", PAGE_URL);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", desc);

    // canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", PAGE_URL);
    // html lang
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [t, lang]);

  const allFaqItems = faqGroups.flatMap((g) => g.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        name: CLINIC_NAME,
        url: "https://friendlydental.ca",
        telephone: "+1-604-273-8315",
        address: {
          "@type": "PostalAddress",
          streetAddress: "120 - 5508 Hollybridge Way",
          addressLocality: "Richmond",
          addressRegion: "BC",
          addressCountry: "CA",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Patrick Wu",
        jobTitle: "Dentist",
        worksFor: { "@type": "Dentist", name: CLINIC_NAME },
        alumniOf: "University of Pennsylvania School of Dental Medicine",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("impl.crumb.home"), item: "https://friendlydental.ca/" },
          { "@type": "ListItem", position: 2, name: t("impl.crumb.services"), item: "https://friendlydental.ca/services" },
          { "@type": "ListItem", position: 3, name: t("impl.crumb.implants"), item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqItems.map((f) => ({
          "@type": "Question",
          name: t(f.q),
          acceptedAnswer: { "@type": "Answer", text: t(f.a) },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="pb-24 lg:pb-0">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-primary">
                {t("impl.crumb.home")}
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link to="/services" className="hover:text-primary">
                {t("impl.crumb.services")}
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="text-foreground">
              {t("impl.crumb.implants")}
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="py-14 md:py-20 bg-section-light">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
                {t("impl.hero.h1")}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                {t("impl.hero.support")}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("implant_book_click", { location: "hero" })}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-md"
                >
                  {t("impl.cta.book")}
                </a>
                <a
                  href={CLINIC_PHONE_TEL}
                  onClick={() => track("implant_call_click", { location: "hero" })}
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {t("impl.cta.call")} · {CLINIC_PHONE_DISPLAY}
                </a>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground italic border-l-2 border-primary/40 pl-3">
                {t("impl.hero.reassure")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={serviceImplants}
                alt={t("impl.hero.h1")}
                className="w-full h-[280px] md:h-[420px] object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">{t("impl.cred.title")}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-section-light rounded-xl p-5 md:p-6 text-center border border-border/60"
                  >
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <p className="font-semibold text-sm md:text-base text-foreground leading-snug">
                      {t(c.key)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-14 md:py-20 bg-section-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t("impl.opt.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {options.map((o, i) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background rounded-2xl shadow-md p-7 border border-border/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t(o.title)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(o.body)}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("implant_book_click", { location: "options" })}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md"
              >
                {t("impl.opt.cta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Dr. Patrick Wu */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={dentistWu} alt="Dr. Patrick Wu" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                {t("impl.drwu.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-[17px]">
                <p>{t("impl.drwu.p1")}</p>
                <p>{t("impl.drwu.p2")}</p>
                <p>{t("impl.drwu.p3")}</p>
                <p>{t("impl.drwu.p4")}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {t("impl.drwu.principles")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {principles.map((p) => (
                    <span
                      key={p}
                      className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {t(p)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Digital planning */}
        <section className="py-14 md:py-20 bg-section-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              {t("impl.dig.title")}
            </h2>
            <div className="max-w-3xl mx-auto text-muted-foreground text-center leading-relaxed mb-10 space-y-3">
              <p>{t("impl.dig.p1")}</p>
              <p>{t("impl.dig.p2")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {digital.map((k, i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background rounded-xl border border-border/60 p-5 text-center"
                >
                  <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{t(k)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimally invasive */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                {t("impl.mi.title")}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-[17px]">
                <p>{t("impl.mi.p1")}</p>
                <p>{t("impl.mi.p2")}</p>
              </div>
            </div>
            <div className="bg-section-light rounded-2xl p-6 md:p-8 border border-border/60">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {t("impl.mi.benefits")}
              </h3>
              <ul className="space-y-3">
                {miBenefits.map((k) => (
                  <li key={k} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-foreground/90 leading-relaxed">{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="py-14 md:py-20 bg-section-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t("impl.proc.title")}
            </h2>

            {/* Desktop horizontal */}
            <ol className="hidden lg:grid grid-cols-7 gap-3 relative mb-10">
              <div
                className="absolute left-8 right-8 top-5 h-0.5 bg-primary/25"
                aria-hidden="true"
              />
              {steps.map((k, i) => (
                <li key={k} className="relative flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10 shadow">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground leading-snug">{t(k)}</p>
                </li>
              ))}
            </ol>

            {/* Mobile / tablet vertical */}
            <ol className="lg:hidden space-y-4 mb-10">
              {steps.map((k, i) => (
                <li key={k} className="flex items-start gap-4 bg-background rounded-xl border border-border/60 p-4">
                  <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-foreground leading-snug pt-1.5">{t(k)}</p>
                </li>
              ))}
            </ol>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-muted-foreground italic text-center leading-relaxed">
              {t("impl.proc.note")}
            </p>
          </div>
        </section>

        {/* Implant FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t("impl.faq.title")}
            </h2>

            <div className="space-y-10">
              {faqGroups.map((group, gi) => (
                <div key={group.heading}>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    {t(group.heading)}
                  </h3>
                  <Accordion type="multiple" className="space-y-2">
                    {group.items.map((item, ii) => {
                      const value = `impl-faq-${gi}-${ii}`;
                      return (
                        <AccordionItem
                          key={value}
                          value={value}
                          className="border border-border rounded-lg px-5 bg-background transition-colors hover:border-primary/40"
                        >
                          <AccordionTrigger
                            onClick={() => track("implant_faq_open", { question: item.q })}
                            className="text-foreground font-semibold text-base text-left hover:no-underline py-4 min-h-[44px]"
                          >
                            {t(item.q)}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] md:text-base whitespace-pre-line">
                            {t(item.a)}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              {t("impl.final.title")}
            </h2>
            <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-8">
              {t("impl.final.p")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("implant_book_click", { location: "final" })}
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-md"
              >
                {t("impl.cta.book")}
              </a>
              <a
                href={CLINIC_PHONE_TEL}
                onClick={() => track("implant_call_click", { location: "final" })}
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/80 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("impl.cta.call")} · {CLINIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Medical notice */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed italic">
              {t("impl.notice")}
            </p>
          </div>
        </section>
      </main>

      {/* Mobile sticky CTA */}
      <div
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={CLINIC_PHONE_TEL}
            onClick={() => track("implant_call_click", { location: "sticky_mobile" })}
            className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-3 py-3 rounded-lg font-semibold text-sm min-h-[44px]"
          >
            <Phone className="h-4 w-4" />
            {t("impl.mobile.call")}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("implant_book_click", { location: "sticky_mobile" })}
            className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-3 py-3 rounded-lg font-semibold text-sm min-h-[44px] shadow-md"
          >
            {t("impl.mobile.book")}
          </a>
        </div>
      </div>

      <Footer />
      <div className="hidden lg:block">
        <StickyBookNow />
      </div>
    </div>
  );
};

export default DentalImplants;
