import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
    { label: "nav.contact", action: () => scrollToSection("contact-form") },
  ];

  return (
    <footer style={{ backgroundColor: "#336799" }} className="text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* Left block */}
          <div className="lg:max-w-xs shrink-0">
            <img src={footerLogo} alt="Friendly Dental Centre" className="h-12 mb-4" />
            <p className="text-base text-white/70 mb-2">
              {lang === "en"
                ? <>We also welcome patients at our Vancouver clinic, <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a>.</>
                : <>我們也歡迎患者到我們的溫哥華診所 <a href="https://littlemountaindental.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary transition-colors">Little Mountain Dental Centre</a> 就診。</>
              }
            </p>
          </div>

          {/* Right block */}
          <div className="shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14">
              {/* Links */}
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

              {/* Services */}
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

              {/* Contact */}
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
                      <p>{t("contact.monFri")}</p>
                      <p>{t("contact.sat")}</p>
                      <p>{t("contact.sun")}</p>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
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
