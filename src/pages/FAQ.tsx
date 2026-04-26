import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { BOOKING_URL } from "@/lib/booking";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: React.ReactNode };
type Section = { title: string; items: QA[] };

const sections: Section[] = [
  {
    title: "Location",
    items: [
      {
        q: "Where are you located?",
        a: "5508 Hollybridge Way, Unit 120, Richmond, BC V7C 0E2",
      },
    ],
  },
  {
    title: "Office Hours",
    items: [
      {
        q: "What are your hours?",
        a: (
          <ul className="space-y-1">
            <li>Monday, Tuesday: 9:00 AM – 6:00 PM</li>
            <li>Wednesday, Thursday: 9:00 AM – 5:00 PM</li>
            <li>Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Parking",
    items: [
      {
        q: "Is parking available?",
        a: (
          <ul className="space-y-1 list-disc pl-5">
            <li>Pay parking is available at the Richmond Curling Centre.</li>
            <li>Street pay parking is also available nearby.</li>
            <li>Underground pay parking (Indigo) is available in the building.</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Contact",
    items: [
      { q: "What is your phone number?", a: "(604) 273-8315" },
    ],
  },
  {
    title: "Insurance & Payment",
    items: [
      {
        q: "Do you accept insurance?",
        a: "Yes, we direct bill most insurance providers. Patients are responsible for any remaining balance.",
      },
    ],
  },
  {
    title: "CDCP (Canadian Dental Care Plan)",
    items: [
      {
        q: "What is CDCP?",
        a: "CDCP is a federal dental program. Patients must renew annually and coverage may not be 100%.",
      },
      {
        q: "Will CDCP cover everything?",
        a: "Not always. A co-pay may apply depending on coverage and fee guide differences.",
      },
      {
        q: "How often can I come for cleaning under CDCP?",
        a: "Coverage typically follows once per year guidelines unless additional treatment is approved.",
      },
    ],
  },
  {
    title: "CDCP Renewal",
    items: [
      { q: "Do I need to renew my CDCP every year?", a: "Yes. Annual renewal is required to maintain coverage." },
      { q: "When should I renew?", a: "Typically around April after filing taxes and receiving your Notice of Assessment." },
      { q: "What happens if I don't renew?", a: "Coverage may expire and you may be responsible for treatment costs." },
      { q: "How do I renew?", a: "Online via Government of Canada or instructions in your renewal letter." },
    ],
  },
  {
    title: "Check-up & Frequency",
    items: [
      { q: "How often are check-ups covered?", a: "Generally once per year unless additional visits are approved." },
      { q: "Can I have more than one check-up?", a: "Possible if clinically necessary and approved." },
    ],
  },
  {
    title: "Children Coverage",
    items: [
      { q: "Can children use other programs?", a: "Yes, programs like Healthy Kids (MSSH) may apply." },
      { q: "Can CDCP and MSSH be combined?", a: "Sometimes, depending on eligibility." },
      { q: "Will there be out-of-pocket costs?", a: "Possibly, depending on coverage differences." },
      { q: "What are frequency limitations?", a: "Certain treatments are limited per period." },
    ],
  },
  {
    title: "General Coverage",
    items: [
      { q: "Does CDCP cover all treatments?", a: "No, some treatments require approval or are not fully covered." },
      { q: "Will I know costs before treatment?", a: "Yes, estimates are provided before proceeding." },
    ],
  },
  {
    title: "Booking",
    items: [
      { q: "Can I book online?", a: "Yes. Our team will confirm details after submission." },
    ],
  },
  {
    title: "Aftercare",
    items: [
      {
        q: "What should I do after a dental cleaning?",
        a: "Avoid eating for at least 30 minutes if fluoride treatment was applied. Maintain regular brushing and flossing.",
      },
      {
        q: "What should I do after a filling?",
        a: "Avoid chewing on the treated side until numbness wears off. Mild sensitivity is normal.",
      },
      {
        q: "Is sensitivity normal after treatment?",
        a: "Yes, temporary sensitivity to hot or cold is common and usually resolves within a few days.",
      },
      {
        q: "What should I do after a tooth extraction?",
        a: "Avoid rinsing, smoking, or using a straw for 24 hours. Follow all post-op instructions carefully.",
      },
      {
        q: "When should I contact the clinic after treatment?",
        a: "If you experience severe pain, swelling, or prolonged bleeding, contact the clinic immediately.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              Friendly Dental Centre – FAQ
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base md:text-lg">
              Answers to the questions our Richmond patients ask most.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-section-light">
          <div className="container mx-auto px-4 max-w-3xl space-y-10">
            {sections.map((section, sIdx) => (
              <div key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={`${sIdx}-${i}`}
                      value={`${sIdx}-${i}`}
                      className="border border-border rounded-lg px-5 bg-background"
                    >
                      <AccordionTrigger className="text-foreground font-semibold text-base text-left hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="text-center pt-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-lg"
              >
                Book Online Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
};

export default FAQ;
