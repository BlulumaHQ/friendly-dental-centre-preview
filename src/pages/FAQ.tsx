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

type QA = { q: string; a: React.ReactNode };
type Section = { title: string; items: QA[] };

const getSections = (lang: "en" | "zh"): Section[] => {
  const isZh = lang === "zh";
  return [
    {
      title: isZh ? "預約相關" : "Booking & Appointments",
      items: [
        {
          q: isZh ? "如何預約？" : "How do I book an appointment?",
          a: isZh ? (
            <>
              您可以隨時透過我們的{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                線上預約系統
              </a>
              預約。我們的團隊會跟進確認您的預約、保險及其他細節。
            </>
          ) : (
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
          q: isZh ? "你們接受牙科急診嗎？" : "Do you accept dental emergencies?",
          a: isZh
            ? "接受。請線上預約或致電診所，我們的團隊會盡快跟進，安排您的急診門診。"
            : "Yes. Please book online or call the clinic and our team will follow up as soon as possible to accommodate your emergency visit.",
        },
      ],
    },
    {
      title: isZh ? "保險與付款" : "Insurance & Payment",
      items: [
        {
          q: isZh ? "你們接受保險並提供直接申報嗎？" : "Do you accept insurance and offer direct billing?",
          a: isZh
            ? "是的，我們可代您直接向大多數保險公司申報。保險未涵蓋的餘額需由患者自行支付。"
            : "Yes, we direct bill most insurance providers on your behalf. Patients are responsible for any remaining balance not covered by their plan.",
        },
        {
          q: isZh ? "我可以在治療前知道費用嗎？" : "Will I know costs before treatment?",
          a: isZh
            ? "可以。我們會在進行任何治療前提供清楚的費用估算。"
            : "Yes. We provide clear estimates before proceeding with any treatment.",
        },
      ],
    },
    {
      title: isZh ? "CDCP 與政府計劃" : "CDCP & Government Programs",
      items: [
        {
          q: isZh ? "什麼是 CDCP？是否涵蓋所有費用？" : "What is CDCP and will it cover everything?",
          a: isZh
            ? "CDCP 是聯邦牙科計劃。承保範圍並不一定為 100%，根據您的計劃及省份收費標準，可能需要支付共付額。部分治療需事先批核。"
            : "CDCP is a federal dental program. Coverage is not always 100% — a co-pay may apply depending on your plan and the provincial fee guide. Some treatments require pre-approval.",
        },
        {
          q: isZh ? "CDCP 多久涵蓋一次洗牙與檢查？" : "How often does CDCP cover cleanings and check-ups?",
          a: isZh
            ? "通常每年一次，除非臨床上需要額外治療並獲批准。"
            : "Generally once per year, unless additional treatment is clinically necessary and approved.",
        },
        {
          q: isZh ? "CDCP 需要每年續期嗎？" : "Do I need to renew CDCP every year?",
          a: isZh
            ? "需要。每年都必須續期，通常在報稅後收到評稅通知書（Notice of Assessment）後的 4 月左右。可透過加拿大政府網站線上續期。"
            : "Yes. Annual renewal is required, typically around April after filing your taxes and receiving your Notice of Assessment. Renew online via the Government of Canada website.",
        },
        {
          q: isZh ? "兒童還有其他資助計劃嗎？" : "Are there other programs for children?",
          a: isZh
            ? "有，例如 Healthy Kids（MSSH）等計劃可能適用，視乎資格有時可與 CDCP 合併使用。仍可能需要自付部分費用。"
            : "Yes, programs such as Healthy Kids (MSSH) may apply and can sometimes be combined with CDCP, depending on eligibility. Out-of-pocket costs may still apply.",
        },
      ],
    },
    {
      title: isZh ? "預約政策" : "Appointment Policies",
      items: [
        {
          q: isZh ? "你們的取消與爽約政策為何？" : "What is your cancellation and no-show policy?",
          a: isZh
            ? "請至少於預約前 48 小時通知取消或改期。爽約或臨時取消將收取 $75 爽約費。"
            : "We kindly ask for at least 48 hours' notice to cancel or reschedule. Missed appointments or late cancellations are subject to a $75 no-show fee.",
        },
      ],
    },
    {
      title: isZh ? "看診準備與流程" : "Visit Preparation & Experience",
      items: [
        {
          q: isZh ? "預約大概需要多長時間？" : "How long will my appointment take?",
          a: isZh
            ? "洗牙與檢查通常需 45–60 分鐘。治療類預約時間視項目而定，我們會事先告知您。"
            : "Cleanings and check-ups typically take 45–60 minutes. Treatment appointments vary depending on the procedure — our team will let you know in advance.",
        },
        {
          q: isZh ? "檢查時會做些什麼？" : "What happens during a check-up?",
          a: isZh
            ? "牙醫會進行全面口腔檢查、查看 X 光片、篩檢蛀牙與牙周病，並在需要時討論建議的治療方案。"
            : "The dentist performs a thorough oral exam, reviews any X-rays, screens for cavities and gum disease, and discusses recommended treatment if needed.",
        },
        {
          q: isZh ? "我會收到預約提醒嗎？" : "Will I receive an appointment reminder?",
          a: isZh
            ? "會的，您會在看診前透過電郵或簡訊收到確認與提醒。"
            : "Yes, you will receive a confirmation and reminder before your visit by email or text.",
        },
        {
          q: isZh ? "需要填寫表格或更新病歷嗎？" : "Do I need to fill out forms or update my medical history?",
          a: isZh
            ? "新患者需填寫病歷表。現有患者請於每次看診時告知我們任何用藥、健康狀況或保險上的變動。"
            : "New patients will be asked to complete a medical history form. Existing patients should let us know about any changes to medications, health conditions, or insurance at each visit.",
        },
      ],
    },
    {
      title: isZh ? "停車與診所資訊" : "Parking & Clinic Info",
      items: [
        {
          q: isZh ? "你們位於哪裡？" : "Where are you located?",
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
          q: isZh ? "有提供停車嗎？" : "Is parking available?",
          a: (
            <ul className="space-y-1 list-disc pl-5">
              <li>{isZh ? "Richmond Curling Centre 付費停車。" : "Pay parking at the Richmond Curling Centre."}</li>
              <li>{isZh ? "附近有街邊付費停車。" : "Street pay parking nearby."}</li>
              <li>{isZh ? "大樓內 Indigo 地下付費停車場。" : "Underground pay parking (Indigo) in the building."}</li>
            </ul>
          ),
        },
        {
          q: isZh ? "你們的營業時間？" : "What are your hours?",
          a: (
            <ul className="space-y-1">
              <li>{isZh ? "星期一、二：上午 9:00 – 下午 6:00" : "Monday, Tuesday: 9:00 AM – 6:00 PM"}</li>
              <li>{isZh ? "星期三、四：上午 9:00 – 下午 5:00" : "Wednesday, Thursday: 9:00 AM – 5:00 PM"}</li>
              <li>{isZh ? "星期五：上午 9:00 – 下午 6:00" : "Friday: 9:00 AM – 6:00 PM"}</li>
              <li>{isZh ? "星期六：上午 9:00 – 下午 5:00" : "Saturday: 9:00 AM – 5:00 PM"}</li>
              <li>{isZh ? "星期日：休息" : "Sunday: Closed"}</li>
            </ul>
          ),
        },
        {
          q: isZh ? "如何聯絡診所？" : "How do I contact the clinic?",
          a: (
            <a href="tel:6042738315" className="text-primary hover:underline">
              (604) 273-8315
            </a>
          ),
        },
      ],
    },
    {
      title: isZh ? "術後護理" : "Aftercare",
      items: [
        {
          q: isZh ? "洗牙後該注意什麼？" : "What should I do after a dental cleaning?",
          a: isZh
            ? "若有塗氟，請至少 30 分鐘內不要進食。請繼續正常刷牙與使用牙線。"
            : "Avoid eating for at least 30 minutes if fluoride was applied. Continue regular brushing and flossing.",
        },
        {
          q: isZh ? "補牙後該注意什麼？" : "What should I do after a filling?",
          a: isZh
            ? "麻醉退去前請避免用治療側咀嚼。輕微敏感屬正常現象。"
            : "Avoid chewing on the treated side until numbness wears off. Mild sensitivity is normal.",
        },
        {
          q: isZh ? "拔牙後該注意什麼？" : "What should I do after a tooth extraction?",
          a: isZh
            ? "24 小時內請避免漱口、吸煙或使用吸管。請仔細遵循所有術後指示。"
            : "Avoid rinsing, smoking, or using a straw for 24 hours. Follow all post-op instructions carefully.",
        },
        {
          q: isZh ? "治療後何時應聯絡診所？" : "When should I contact the clinic after treatment?",
          a: isZh
            ? "若出現劇烈疼痛、腫脹或持續出血，請立即聯絡診所。"
            : "If you experience severe pain, swelling, or prolonged bleeding, contact the clinic immediately.",
        },
      ],
    },
    {
      title: isZh ? "新患者" : "New Patients",
      items: [
        {
          q: isZh ? "你們接受新患者嗎？" : "Are you accepting new patients?",
          a: isZh
            ? "歡迎新患者。不過診所目前正服務眾多現有患者，可預約名額可能有限。"
            : "Yes, we welcome new patients. However, the clinic is currently serving many existing patients, so availability may vary.",
        },
      ],
    },
  ];
};

const FAQ = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const sections = getSections(lang);

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
              {isZh ? "Friendly Dental Centre – 常見問題" : "Friendly Dental Centre – FAQ"}
            </motion.h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base md:text-lg">
              {isZh ? "為列治文患者最常詢問的問題提供解答。" : "Answers to the questions our Richmond patients ask most."}
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
