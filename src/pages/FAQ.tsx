import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookNow from "@/components/StickyBookNow";
import { BOOKING_URL } from "@/lib/booking";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const getSections = (lang: "en" | "zh"): Section[] => {
  const isZh = lang === "zh";
  return [
    {
      title: isZh ? "預約相關" : "Appointments",
      items: [
        {
          q: isZh ? "你們接受新患者嗎？" : "Are you accepting new patients?",
          a: isZh ? "歡迎！我們接受各年齡層的新患者。" : "Yes! We welcome new patients of all ages.",
        },
        {
          q: isZh ? "如何預約？" : "How can I book an appointment?",
          a: isZh
            ? "洗牙預約目前可透過本網站線上預約。\n\n其他類型的預約請提交線上預約申請或直接致電診所。"
            : "Hygiene appointments are currently available through online booking on our website.\n\nFor all other appointment types, please submit an online appointment request or call our office directly.",
        },
        {
          q: isZh ? "可以預約急診嗎？" : "Can I request an emergency appointment?",
          a: isZh
            ? "可以。急診預約可線上申請或直接致電診所。我們會盡力盡快安排。"
            : "Yes. Emergency appointments can be requested online or by calling our office directly. We will do our best to accommodate you as soon as possible.",
        },
        {
          q: isZh ? "你們接受 walk-in 嗎？" : "Do you accept walk-ins?",
          a: isZh
            ? "不接受，由於診所行程繁忙，目前僅接受預約。"
            : "No, we are currently by appointment only due to our busy schedule.",
        },
        {
          q: isZh ? "如需取消預約怎麼辦？" : "What happens if I need to cancel my appointment?",
          a: isZh
            ? "請至少於預約前 2 個工作天通知我們取消或改期。"
            : "We kindly request at least 2 business days' notice for appointment cancellations or changes.",
        },
      ],
    },
    {
      title: isZh ? "保險與 CDCP" : "Insurance & CDCP",
      items: [
        {
          q: isZh ? "你們接受 CDCP（加拿大牙科保健計劃）嗎？" : "Do you accept CDCP (Canadian Dental Care Plan)?",
          a: isZh ? "是的，我們接受 CDCP 患者。" : "Yes, we accept CDCP patients.",
        },
        {
          q: isZh ? "使用 CDCP 是否需要自付任何費用？" : "Will I have to pay anything with CDCP?",
          a: isZh
            ? "視乎您的承保等級與治療項目，可能需要支付共付額或差額。"
            : "Depending on your coverage level and treatment, a co-payment or fee difference may apply.",
        },
        {
          q: isZh ? "CDCP 多久涵蓋一次洗牙？" : "How often does CDCP cover dental cleanings?",
          a: isZh
            ? "CDCP 通常每 12 個滾動月涵蓋一次洗牙。涵蓋頻率可能因個人資格與治療紀錄而異。"
            : "CDCP typically allows dental cleanings once every rolling 12 months. Coverage frequency may vary depending on individual eligibility and treatment history.",
        },
        {
          q: isZh ? "你們提供保險直接申報嗎？" : "Do you direct bill insurance?",
          a: isZh ? "是的，我們可向多家保險公司直接申報。" : "Yes, we offer direct billing to many insurance providers.",
        },
        {
          q: isZh ? "你們接受哪些保險計劃？" : "What insurance plans do you accept?",
          a: isZh
            ? "我們接受大多數主要的牙科保險計劃。請聯絡診所以確認您的承保詳情。"
            : "We accept most major dental insurance plans. Please contact our office to confirm your specific coverage.",
        },
      ],
    },
    {
      title: isZh ? "付款方式" : "Payment",
      items: [
        {
          q: isZh ? "你們接受哪些付款方式？" : "What payment methods do you accept?",
          a: isZh
            ? "我們接受：\n\n• Debit\n• Visa\n• Mastercard\n• 現金\n• 微信支付 (WeChat Pay)\n• 支付寶 (Alipay)\n\n我們不接受 American Express (Amex)。"
            : "We accept:\n\n• Debit\n• Visa\n• Mastercard\n• Cash\n• WeChat Pay\n• Alipay\n\nWe do not accept American Express (Amex).",
        },
      ],
    },
    {
      title: isZh ? "停車與位置" : "Parking & Location",
      items: [
        {
          q: isZh ? "你們的位置在哪裡？" : "Where are you located?",
          a: "5508 Hollybridge Way, Unit 120, Richmond, BC V7C 0E2",
        },
        {
          q: isZh ? "有提供停車嗎？" : "Is parking available?",
          a: isZh
            ? "附近設有 Indigo 地下付費停車場。\n\n視乎情況，Richmond Curling Centre 及附近街邊亦可能有停車位。"
            : "Paid underground Indigo parking is available nearby.\n\nAdditional parking may also be available at Richmond Curling Centre and nearby street parking depending on availability.",
        },
      ],
    },
    {
      title: isZh ? "營業時間" : "Office Hours",
      items: [
        {
          q: isZh ? "你們的營業時間？" : "What are your office hours?",
          a: isZh
            ? "週一：9AM–6PM\n週二：9AM–6PM\n週三：9AM–5PM\n週四：9AM–5PM\n週五：9AM–6PM\n週六：9AM–5PM\n週日：休息\n\n假期營業時間可能有所不同。"
            : "Mon: 9AM–6PM\nTue: 9AM–6PM\nWed: 9AM–5PM\nThu: 9AM–5PM\nFri: 9AM–6PM\nSat: 9AM–5PM\nSun: Closed\n\nHoliday hours may vary.",
        },
      ],
    },
    {
      title: isZh ? "語言與表格" : "Languages & Forms",
      items: [
        {
          q: isZh ? "你們提供哪些語言服務？" : "What languages do you offer?",
          a: isZh
            ? "我們提供以下語言服務：\n\n• English\n• Mandarin（普通話）\n• Cantonese（廣東話）"
            : "We provide services in:\n\n• English\n• Mandarin\n• Cantonese",
        },
        {
          q: isZh ? "你們的表格有中文版嗎？" : "Are your forms available in Chinese?",
          a: isZh ? "有的，我們的數位表格提供英文及中文版本。" : "Yes, our digital forms are available in both English and Chinese.",
        },
        {
          q: isZh ? "預約前需要先填寫表格嗎？" : "Do I need to fill out forms before my appointment?",
          a: isZh
            ? "需要。我們通常會在您預約前透過線上發送數位表格供您填寫。"
            : "Yes. Digital forms are typically sent before your appointment for completion online.",
        },
      ],
    },
    {
      title: isZh ? "家庭牙科" : "Family Dentistry",
      items: [
        {
          q: isZh ? "你們看兒童嗎？" : "Do you treat children?",
          a: isZh ? "是的，我們歡迎兒童及全家人就診。" : "Yes, we welcome children and families.",
        },
        {
          q: isZh ? "你們提供 Invisalign 或矯正治療嗎？" : "Do you offer Invisalign or orthodontic treatment?",
          a: isZh
            ? "請直接聯絡診所，了解更多有關矯正治療的選項與諮詢。"
            : "Please contact our office directly to learn more about orthodontic treatment options and consultations.",
        },
      ],
    },
    {
      title: isZh ? "牙科紀錄與 X 光" : "Dental Records & X-Rays",
      items: [
        {
          q: isZh ? "可以協助我從前一位牙醫處取得病歷嗎？" : "Can you request my previous dental records?",
          a: isZh
            ? "可以。在您同意下，我們可協助向您先前的牙科診所索取病歷與 X 光片。"
            : "Yes, we can help request records and X-rays from your previous dental office with your consent.",
        },
        {
          q: isZh ? "牙科 X 光安全嗎？" : "Are dental X-rays safe?",
          a: isZh
            ? "安全。牙科 X 光使用極低劑量輻射，被公認為安全。"
            : "Yes. Dental X-rays use very low radiation and are considered safe.",
        },
      ],
    },
  ];
};

const FAQ = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const sections = getSections(lang);

  // SEO: title, meta description, canonical, FAQPage JSON-LD
  useEffect(() => {
    const title = isZh
      ? "Friendly Dental Centre 常見問題 | 列治文牙醫資訊"
      : "Friendly Dental Centre FAQ | Richmond Dentist Information";
    const description = isZh
      ? "Friendly Dental Centre 列治文牙科診所常見問題：預約、保險、CDCP、停車、付款方式與服務項目資訊。"
      : "Find answers to common questions about appointments, insurance, CDCP coverage, parking, payments, and dental services at Friendly Dental Centre in Richmond, BC.";

    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://friendly-dental-centre-preview.lovable.app/faq");

    // FAQPage JSON-LD
    const allItems = sections.flatMap((s) => s.items);
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };
    let script = document.getElementById("faq-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "faq-jsonld";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonld);

    return () => {
      const s = document.getElementById("faq-jsonld");
      if (s) s.remove();
    };
  }, [lang, isZh, sections]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-14 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              {isZh ? "Friendly Dental Centre – 常見問題" : "Friendly Dental Centre – FAQ"}
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base md:text-lg">
              {isZh
                ? "為列治文患者最常詢問的問題提供解答。"
                : "Answers to the questions our Richmond patients ask most."}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 md:py-16 bg-section-light">
          <div className="container mx-auto px-4 max-w-3xl space-y-8 md:space-y-10">
            {sections.map((section, sIdx) => (
              <div key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  {section.title}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={sIdx === 0 ? `${sIdx}-0` : undefined}
                  className="space-y-2"
                >
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={`${sIdx}-${i}`}
                      value={`${sIdx}-${i}`}
                      className="border border-border rounded-lg px-5 bg-background transition-colors hover:border-primary/40"
                    >
                      <AccordionTrigger className="text-foreground font-semibold text-base text-left hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] md:text-base whitespace-pre-line">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="text-center pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors shadow-lg"
              >
                {isZh ? "立即線上預約" : "Book Online Now"}
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
