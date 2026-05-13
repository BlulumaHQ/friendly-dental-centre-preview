import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { en: "Home", zh: "首頁" },
  "nav.ourOffice": { en: "Our Office", zh: "我們的診所" },
  "nav.ourTeam": { en: "Our Team", zh: "我們的團隊" },
  "nav.services": { en: "Our Services", zh: "服務項目" },
  "nav.contact": { en: "Contact", zh: "聯繫我們" },
  "nav.bookNow": { en: "Book Appointment", zh: "立即預約" },
  "nav.faq": { en: "FAQ", zh: "常見問題" },
  "nav.menu": { en: "Menu", zh: "選單" },
  "cta.bookOnline": { en: "Book Online Now", zh: "線上預約" },
  
  // Hero
  "hero.subtitle": { en: "RICHMOND DENTAL PROFESSIONALS", zh: "列治文專業牙科" },
  "hero.title1": { en: "Welcome to", zh: "歡迎來到" },
  "hero.title2": { en: "Friendly Dental Centre", zh: "Friendly Dental Centre" },
  "hero.desc": { en: "Your trusted dental care partner in Richmond. Experience personalized, gentle dentistry in a warm and welcoming environment.", zh: "您在列治文值得信賴的牙科護理夥伴。在溫馨的環境中體驗個性化、溫和的牙科治療。" },
  "hero.cta": { en: "Book Appointment", zh: "立即預約" },
  "hero.call": { en: "Call Us", zh: "致電我們" },
  
  // Welcome
  "welcome.title": { en: "Welcome to Friendly Dental Centre", zh: "歡迎來到 Friendly Dental Centre" },
  "welcome.desc": { en: "Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationships with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs. Thank you for choosing Friendly Dental in achieving your optimal oral health.", zh: "我們友善的團隊致力於在溫馨的環境中為您提供最高水平的專業服務和個性化護理。我們相信，與患者建立牢固的關係是提供卓越牙科護理的關鍵，我們期待了解您和您的獨特需求。感謝您選擇 Friendly Dental，讓我們幫助您實現最佳口腔健康。" },
  
  // Why Trust
  "trust.title": { en: "Why Trust Friendly Dental?", zh: "為什麼信任 Friendly Dental？" },
  "trust.desc": { en: "We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable team is dedicated in providing you with personalized care in a warm and inviting environment. We take time learning about your concerns and answering your questions. Let us take care of your dental needs while keeping your mind at ease.", zh: "我們理解看牙醫可能會令人緊張。我們訓練有素、知識淵博的團隊致力於在溫馨的環境中為您提供個性化的護理。我們會花時間了解您的顧慮並回答您的問題。讓我們照顧您的牙科需求，同時讓您安心。" },
  
  // Services
  "services.title": { en: "Our Friendly Services", zh: "我們的服務項目" },
  "services.subtitle": { en: "We have the knowledge and experience to achieve your optimal oral health.", zh: "我們擁有專業知識和經驗，助您實現最佳口腔健康。" },
  "service.implants": { en: "Implants", zh: "植牙" },
  "service.orthodontics": { en: "Orthodontics", zh: "矯正" },
  "service.pediatric": { en: "Pediatric", zh: "兒童牙科" },
  "service.maintenance": { en: "Maintenance", zh: "保養" },
  "service.restoratives": { en: "Restoratives", zh: "修復" },
  "service.esthetics": { en: "Esthetics", zh: "美容牙科" },

  // Service short descriptions
  "service.implants.short": { en: "Stable, secure replacements for missing teeth.", zh: "穩定安全的缺牙替代方案。" },
  "service.orthodontics.short": { en: "Align your smile for health and confidence.", zh: "矯正牙齒，提升健康與自信。" },
  "service.pediatric.short": { en: "Gentle dental care for children of all ages.", zh: "溫和的兒童牙科護理服務。" },
  "service.maintenance.short": { en: "Professional cleanings and preventive exams.", zh: "專業清潔與預防性檢查。" },
  "service.restoratives.short": { en: "Repair and restore damaged or missing teeth.", zh: "修復受損或缺失的牙齒。" },
  "service.esthetics.short": { en: "Enhance your smile with cosmetic treatments.", zh: "美容治療，提升您的笑容。" },
  
  // Services detail
  "service.implants.desc": { en: "Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant.", zh: "牙科植體是替代一顆或多顆缺失牙齒的穩定且安全的手術選擇。牙科植體使用通常由鈦製成的人工牙根。植體通過手術植入上頜骨或下頜骨，然後將人造牙齒連接到植體上。" },
  "service.orthodontics.desc": { en: "Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. Improper alignments can also affect speech, chewing and digestion.", zh: "無論您是成人還是青少年，擁有明亮、整齊牙齒的健康笑容都是自我形象的重要組成部分。不正確的排列還會影響語言、咀嚼和消化。" },
  "service.pediatric.desc": { en: "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit.", zh: "我們提供兒童牙科服務，幫助您的孩子從小保持健康的笑容。我們在與兒童合作方面經驗豐富，確保您的孩子在牙科就診期間感到舒適和放鬆。" },
  "service.maintenance.desc": { en: "Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque.", zh: "定期的牙科保養，包括專業清潔和全面檢查，對維持良好的口腔健康至關重要。專業清潔是處理牙垢積聚和去除牙菌斑最有效的方法。" },
  "service.restoratives.desc": { en: "Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges.", zh: "我們的修復牙科服務可以幫助修復由蛀牙、損傷或其他因素造成的損害，並將您的牙齒恢復到最佳健康和功能狀態。" },
  "service.esthetics.desc": { en: "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth.", zh: "我們相信，美麗的笑容可以增強您的自信並改善您的整體生活質量。我們的美容牙科服務，包括貼面、牙齒美白、直接複合材料粘接和其他美容治療，可以幫助改善您牙齒的外觀。" },
  
  // Dentists
  "stats.meetTeam": { en: "Meet Our Friendly Dentists", zh: "認識我們的牙醫團隊" },

  // Dentist bios
  "dentist.wu.bio": {
    en: "Dr. Patrick Wu graduated with honours from the University of Pennsylvania School of Dental Medicine. After practicing dentistry in New Jersey for four years, he returned to Vancouver in 2012. Dr. Wu provides comprehensive care for patients of all ages, with special interests in implant dentistry, orthodontics, pediatric care, and complex restorative treatments.",
    zh: "Dr. Patrick Wu 以優異成績畢業於 University of Pennsylvania School of Dental Medicine。在 New Jersey 執業四年後，他於2012年回到溫哥華。Dr. Wu 為各年齡段的患者提供全面的口腔護理，尤其擅長植牙、矯正、兒童牙科和複雜修復治療。"
  },
  "dentist.pan.bio": {
    en: "Dr. Mike Pan is known for his strong clinical skills and thoughtful approach to dental treatment. His areas of expertise include orthodontics, dental implants, wisdom teeth removal, and comprehensive dental care. Outside of dentistry, Dr. Pan enjoys golfing, skiing, woodworking, and music.",
    zh: "Dr. Mike Pan 以其出色的臨床技能和細心的治療方式而聞名。他的專業領域包括矯正、植牙、智齒拔除和全面牙科護理。工作之餘，Dr. Pan 喜歡打高爾夫球、滑雪、木工和音樂。"
  },
  "dentist.lin.bio": {
    en: "Dr. Ivy Lin is known for her gentle and patient-centered approach to dentistry. She provides comprehensive care for patients of all ages and has particular strength in restorative dentistry. Dr. Lin focuses on creating a comfortable and relaxing experience while delivering high-quality dental treatment.",
    zh: "Dr. Ivy Lin 以其溫和且以患者為中心的治療方式而聞名。她為各年齡段的患者提供全面的口腔護理，尤其擅長修復牙科。Dr. Lin 專注於在提供高質量牙科治療的同時，為患者創造舒適和放鬆的體驗。"
  },
  "dentist.chen.bio": {
    en: "Dr. Jie Chen is an experienced prosthodontist specializing in cosmetic dentistry and complex restorative treatments. Her expertise includes dentures, implant restorations, and full-mouth rehabilitation. Dr. Chen is known for her meticulous work and gentle care, helping patients restore both their smiles and confidence.",
    zh: "Dr. Jie Chen 是一位經驗豐富的修復牙科專家，專精於美容牙科和複雜修復治療。她的專業領域包括假牙、植牙修復和全口重建。Dr. Chen 以其精細的工作和溫和的護理而聞名，幫助患者恢復笑容和自信。"
  },
  "dentist.wong.bio": {
    en: "Dr. Christina Wong earned her Doctor of Dental Surgery degree from the University of Alberta. With decades of clinical experience, she is committed to providing comprehensive dental care in a comfortable and patient-focused environment. Dr. Wong has pursued extensive continuing education, including advanced training at the Kois Center and the Misch International Implant Institute. Her professional interests include implant dentistry, restorative treatments, and preventive care for patients of all ages.",
    zh: "Dr. Christina Wong 於 University of Alberta 獲得牙科博士學位。擁有數十年的臨床經驗，她致力於在舒適且以患者為中心的環境中提供全面的牙科護理。Dr. Wong 持續進修，包括在 Kois Center 和 Misch International Implant Institute 接受高階培訓。她的專業興趣包括植牙、修復治療以及各年齡層患者的預防性護理。"
  },

  // Google Reviews
  "reviews.average": { en: "4.9 Average Rating", zh: "4.9 平均評分" },
  "reviews.basedOn": { en: "Based on Google Reviews", zh: "基於 Google 評論" },
  
  // Contact
  "contact.title": { en: "Get In Touch", zh: "聯繫我們" },
  "contact.subtitle": { en: "Our team is happy to help you and your family achieving that perfect smile!", zh: "我們的團隊很樂意幫助您和您的家人實現完美的笑容！" },
  "contact.firstName": { en: "First Name", zh: "名字" },
  "contact.lastName": { en: "Last Name", zh: "姓氏" },
  "contact.email": { en: "Email", zh: "電子郵件" },
  "contact.phone": { en: "Phone", zh: "電話" },
  "contact.message": { en: "Message", zh: "留言" },
  "contact.submit": { en: "Request a Call Back", zh: "預約回電" },
  "contact.address": { en: "120 - 5508 Hollybridge Way, Richmond", zh: "120 - 5508 Hollybridge Way, Richmond" },
  "contact.hours": { en: "Office Hours", zh: "營業時間" },
  "contact.monFri": { en: "Mon – Fri: 9:00am – 6:00pm", zh: "週一至週五：9:00am – 6:00pm" },
  "contact.sat": { en: "Saturday: 9:00am – 5:00pm", zh: "週六：9:00am – 5:00pm" },
  "contact.sun": { en: "Sunday: Closed", zh: "週日：休息" },
  
  // FAQ
  "faq.title": { en: "Frequently Asked Questions", zh: "常見問題" },
  "faq.viewFull": { en: "View Full FAQ", zh: "查看完整常見問題" },
  "faq.q1": { en: "Is parking available?", zh: "有提供停車嗎？" },
  "faq.a1": { en: "Pay parking is available at the Richmond Curling Centre. Street pay parking is also available nearby. Underground pay parking (Indigo) is available in the building.", zh: "Richmond Curling Centre 有付費停車。附近也有街邊付費停車位。大樓內亦有 Indigo 地下付費停車場。" },
  "faq.q2": { en: "Do you accept insurance?", zh: "你們接受保險嗎？" },
  "faq.a2": { en: "Yes, we direct bill most insurance providers. Patients are responsible for any remaining balance.", zh: "是的，我們可以為大多數保險公司直接申報。患者需自行負擔剩餘費用。" },
  "faq.q3": { en: "Do you accept dental emergencies?", zh: "你們接受牙科急診嗎？" },
  "faq.a3": { en: "Yes, we do our best to accommodate emergency visits. Please book online or call the clinic and our team will follow up as soon as possible.", zh: "是的，我們會盡力安排急診門診。請線上預約或致電診所，我們的團隊會盡快跟進。" },
  "faq.q4": { en: "Will CDCP cover everything?", zh: "CDCP 會涵蓋全部費用嗎？" },
  "faq.a4": { en: "Not always. A co-pay may apply depending on your coverage and fee guide differences.", zh: "不一定。根據您的承保範圍和收費標準差異，可能需要支付共付額。" },
  "faq.q5": { en: "Can I book an appointment online?", zh: "可以線上預約嗎？" },
  "faq.a5": { en: "Yes, online booking is available. Our team will follow up to confirm your appointment and insurance details.", zh: "可以，提供線上預約。我們的團隊會跟進確認您的預約和保險資訊。" },

  // Footer
  "footer.visitVancouver": { en: "We also welcome patients at our Vancouver clinic, Little Mountain Dental Centre.", zh: "我們也歡迎患者到我們的溫哥華診所 Little Mountain Dental Centre 就診。" },
  "footer.links": { en: "Links", zh: "連結" },
  "footer.ourOffice": { en: "Our Office", zh: "我們的診所" },
  "footer.ourServices": { en: "Our Services", zh: "我們的服務" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
