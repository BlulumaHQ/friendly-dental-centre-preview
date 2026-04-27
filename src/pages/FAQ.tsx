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
    title: "Booking & Appointments",
    items: [
      {
        q: "How do I book an appointment?",
        a: (
          <>
            You can book online anytime through our{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              online booking system
            </a>
            . Our team will follow up to confirm your appointment, insurance, and any additional details.
          </>
        ),
      },
      {
        q: "Do you accept dental emergencies?",
        a: "Yes. Please book online or call the clinic and our team will follow up as soon as possible to accommodate your emergency visit.",
      },
    ],
  },
  {
    title: "Insurance & Payment",
    items: [
      {
        q: "Do you accept insurance and offer direct billing?",
        a: "Yes, we direct bill most insurance providers on your behalf. Patients are responsible for any remaining balance not covered by their plan.",
      },
      {
        q: "Will I know costs before treatment?",
        a: "Yes. We provide clear estimates before proceeding with any treatment.",
      },
    ],
  },
  {
    title: "CDCP & Government Programs",
    items: [
      {
        q: "What is CDCP and will it cover everything?",
        a: "CDCP is a federal dental program. Coverage is not always 100% — a co-pay may apply depending on your plan and the provincial fee guide. Some treatments require pre-approval.",
      },
      {
        q: "How often does CDCP cover cleanings and check-ups?",
        a: "Generally once per year, unless additional treatment is clinically necessary and approved.",
      },
      {
        q: "Do I need to renew CDCP every year?",
        a: "Yes. Annual renewal is required, typically around April after filing your taxes and receiving your Notice of Assessment. Renew online via the Government of Canada website.",
      },
      {
        q: "Are there other programs for children?",
        a: "Yes, programs such as Healthy Kids (MSSH) may apply and can sometimes be combined with CDCP, depending on eligibility. Out-of-pocket costs may still apply.",
      },
    ],
  },
  {
    title: "Appointment Policies",
    items: [
      {
        q: "What is your cancellation and no-show policy?",
        a: "We kindly ask for at least 48 hours' notice to cancel or reschedule. Missed appointments or late cancellations are subject to a $75 no-show fee.",
      },
    ],
  },
  {
    title: "Visit Preparation & Experience",
    items: [
      {
        q: "How long will my appointment take?",
        a: "Cleanings and check-ups typically take 45–60 minutes. Treatment appointments vary depending on the procedure — our team will let you know in advance.",
      },
      {
        q: "What happens during a check-up?",
        a: "The dentist performs a thorough oral exam, reviews any X-rays, screens for cavities and gum disease, and discusses recommended treatment if needed.",
      },
      {
        q: "Will I receive an appointment reminder?",
        a: "Yes, you will receive a confirmation and reminder before your visit by email or text.",
      },
      {
        q: "Do I need to fill out forms or update my medical history?",
        a: "New patients will be asked to complete a medical history form. Existing patients should let us know about any changes to medications, health conditions, or insurance at each visit.",
      },
    ],
  },
  {
    title: "Parking & Clinic Info",
    items: [
      {
        q: "Where are you located?",
        a: (
          <a
            href="https://maps.app.goo.gl/siy6NG1vN6Ckz9R9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            5508 Hollybridge Way, Unit 120, Richmond, BC V7C 0E2
          </a>
        ),
      },
      {
        q: "Is parking available?",
        a: (
          <ul className="space-y-1 list-disc pl-5">
            <li>Pay parking at the Richmond Curling Centre.</li>
            <li>Street pay parking nearby.</li>
            <li>Underground pay parking (Indigo) in the building.</li>
          </ul>
        ),
      },
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
      {
        q: "How do I contact the clinic?",
        a: (
          <a href="tel:6042738315" className="text-primary hover:underline">
            (604) 273-8315
          </a>
        ),
      },
    ],
  },
  {
    title: "Aftercare",
    items: [
      {
        q: "What should I do after a dental cleaning?",
        a: "Avoid eating for at least 30 minutes if fluoride was applied. Continue regular brushing and flossing.",
      },
      {
        q: "What should I do after a filling?",
        a: "Avoid chewing on the treated side until numbness wears off. Mild sensitivity is normal.",
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
  {
    title: "New Patients",
    items: [
      {
        q: "Are you accepting new patients?",
        a: "Yes, we welcome new patients. However, the clinic is currently serving many existing patients, so availability may vary.",
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
