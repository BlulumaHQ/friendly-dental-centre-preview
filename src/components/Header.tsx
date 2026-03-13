import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.svg";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
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

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const navItems = [
    { label: "nav.home", action: handleHomeClick },
    { label: "nav.ourOffice", action: () => scrollToSection("welcome-section") },
    { label: "nav.ourTeam", action: () => scrollToSection("our-team") },
    { label: "nav.services", action: () => { setMobileOpen(false); navigate("/services"); } },
    { label: "nav.contact", action: () => scrollToSection("contact-form") },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:6042738315" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              604-273-8315
            </a>
            <a href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors">
              <MapPin className="h-3.5 w-3.5" />
              {t("contact.address")}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="px-3 py-1 rounded border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors text-xs font-medium"
            >
              {lang === "en" ? "中文" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Friendly Dental Centre" className="h-10 md:h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground"
              >
                {t(item.label)}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="py-2 text-sm font-medium text-foreground text-left"
                >
                  {t(item.label)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
