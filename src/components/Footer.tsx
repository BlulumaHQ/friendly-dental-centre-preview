import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";
import footerLogo from "@/assets/footer-logo.svg";
import drwuLogo from "@/assets/drwu-logo.png";

const Footer = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const services = [
    { name: "service.implants", anchor: "#implants" },
    { name: "service.orthodontics", anchor: "#orthodontics" },
    { name: "service.pediatric", anchor: "#pediatric" },
    { name: "service.maintenance", anchor: "#maintenance" },
    { name: "service.restoratives", anchor: "#restoratives" },
    { name: "service.esthetics", anchor: "#esthetics" },
  ];

  const navItems = [
    { label: "nav.home", action: handleHomeClick },
    { label: "nav.ourOffice", action: () => scrollToSection("welcome-section") },
    { label: "nav.ourTeam", action: () => scrollToSection("our-team") },
    { label: "nav.services", action: () => navigate("/services") },
    { label: "nav.faq", action: () => navigate("/faq") },
    { label: "nav.contact", action: () => scrollToSection("contact-form") },
  ];

  return (
    <footer style={{ backgroundColor: "#336799" }} className="text-white">
      {/* Mobile compact footer (all content preserved, just denser) */}
      <div className="lg:hidden container mx-auto px-4 py-8">
        <img src={footerLogo} alt="Friendly Dental Centre" className="h-10 mb-3" />
        <p className="text-xs text-white/70 mb-5 leading-relaxed">
          {lang === "en"
            ? <>We also welcome patients at our Vancouver clinic, <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a>.</>
            : <>我們也歡迎患者到我們的溫哥華診所 <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a> 就診。</>
          }
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs">
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm">{t("footer.links")}</h4>
            <ul className="space-y-1.5 text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className="hover:text-secondary transition-colors text-left">
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm">{t("nav.services")}</h4>
            <ul className="space-y-1.5 text-white/80">
              {services.map((s) => (
                <li key={s.anchor}>
                  <Link to={`/services${s.anchor}`} className="hover:text-secondary transition-colors">
                    {t(s.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (full width) */}
          <div className="col-span-2">
            <h4 className="font-semibold text-white mb-2 text-sm">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <a href="tel:6042738315" className="hover:text-secondary transition-colors">604-273-8315</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/siy6NG1vN6Ckz9R9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  {t("contact.address")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@friendlydental.ca" className="hover:text-secondary transition-colors">info@friendlydental.ca</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed flex-1">
                  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5">
                    {[
                      ["contact.day.mon", "9AM–6PM"],
                      ["contact.day.tue", "9AM–6PM"],
                      ["contact.day.wed", "9AM–5PM"],
                      ["contact.day.thu", "9AM–5PM"],
                      ["contact.day.fri", "9AM–6PM"],
                      ["contact.day.sat", "9AM–5PM"],
                      ["contact.day.sun", t("contact.day.closed")],
                    ].map(([k, v]) => (
                      <>
                        <dt className="text-white/70">{t(k)}</dt>
                        <dd className="text-white/90 tabular-nums">{v}</dd>
                      </>
                    ))}
                  </dl>
                  <p className="text-white/60 text-[11px] mt-1.5">{t("contact.hours.holiday")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop footer (unchanged 5-column grid) */}
      <div className="hidden lg:block container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr_4fr_4fr_3fr] gap-8 lg:gap-0">
          {/* Column 1: Logo */}
          <div>
            <img src={footerLogo} alt="Friendly Dental Centre" className="h-12 mb-4" />
            <p className="text-base text-white/70 mb-2">
              {lang === "en"
                ? <>We also welcome patients at our Vancouver clinic, <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a>.</>
                : <>我們也歡迎患者到我們的溫哥華診所 <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a> 就診。</>
              }
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Column 3: Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-base text-white/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className="hover:text-secondary transition-colors">
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2 text-base text-white/80">
              {services.map((s) => (
                <li key={s.anchor}>
                  <Link to={`/services${s.anchor}`} className="hover:text-secondary transition-colors">
                    {t(s.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("nav.contact")}</h4>
            <ul className="space-y-3 text-base text-white/80 whitespace-nowrap">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:6042738315" className="hover:text-secondary transition-colors">604-273-8315</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/siy6NG1vN6Ckz9R9" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  {t("contact.address")}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@friendlydental.ca" className="hover:text-secondary transition-colors">info@friendlydental.ca</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{t("contact.hours.mon")}</p>
                  <p>{t("contact.hours.tue")}</p>
                  <p>{t("contact.hours.wed")}</p>
                  <p>{t("contact.hours.thu")}</p>
                  <p>{t("contact.hours.fri")}</p>
                  <p>{t("contact.hours.sat")}</p>
                  <p>{t("contact.hours.sun")}</p>
                  <p className="text-white/60 text-xs mt-1">{t("contact.hours.holiday")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Friendly Dental Centre</span>
            <span className="flex items-center gap-1.5">
              <a href="https://www.drpatrickwu.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <img src={drwuLogo} alt="Dr. Patrick Wu" className="h-4 w-4" />
                Dr. Patrick Wu
              </a>
            </span>
          </div>
          <span className="text-white/25">
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">
              Bluluma.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
