import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import footerLogo from "@/assets/footer-logo.svg";
import drwuLogo from "@/assets/drwu-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const services = [
    { name: "service.implants", anchor: "#implants" },
    { name: "service.orthodontics", anchor: "#orthodontics" },
    { name: "service.pediatric", anchor: "#pediatric" },
    { name: "service.maintenance", anchor: "#maintenance" },
    { name: "service.restoratives", anchor: "#restoratives" },
    { name: "service.esthetics", anchor: "#esthetics" },
  ];

  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & info */}
          <div className="lg:col-span-1">
            <img src={footerLogo} alt="Friendly Dental Centre" className="h-12 mb-4" />
            <p className="text-sm text-section-dark-foreground/70 mb-2">
              {t("footer.visitVancouver")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/80">
              <li><Link to="/" className="hover:text-secondary transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">{t("nav.faq")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/80">
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
            <ul className="space-y-3 text-sm text-section-dark-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:6042738315" className="hover:text-secondary transition-colors">604-273-8315</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
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

      {/* Bottom bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-section-dark-foreground/70">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Friendly Dental Centre</span>
            <span className="flex items-center gap-1.5">
              <a href="https://www.drpatrickwu.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <img src={drwuLogo} alt="Dr. Patrick Wu" className="h-4 w-4" />
                Dr. Patrick Wu
              </a>
            </span>
          </div>
          <span className="text-section-dark-foreground/30">
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-section-dark-foreground/50 transition-colors">
              Bluluma.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
