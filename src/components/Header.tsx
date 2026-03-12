import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.svg";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "nav.home" },
    { path: "/about", label: "nav.about" },
    { path: "/services", label: "nav.services" },
    { path: "/faq", label: "nav.faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
            <a href="tel:6042738315" className="hidden md:flex items-center gap-1.5 font-semibold">
              <Phone className="h-3.5 w-3.5" />
              604-273-8315
            </a>
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
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
            <Link
              to="/#contact-form"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/#contact-form";
              }}
              className="text-sm font-medium transition-colors hover:text-primary text-foreground"
            >
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="hidden lg:block">
            <a
              href="tel:6042738315"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              604-273-8315
            </a>
          </div>

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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-sm font-medium ${isActive(item.path) ? "text-primary" : "text-foreground"}`}
                >
                  {t(item.label)}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-2 text-sm font-medium text-foreground text-left"
              >
                {t("nav.contact")}
              </button>
              <a
                href="tel:6042738315"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm mt-2"
              >
                <Phone className="h-4 w-4" />
                604-273-8315
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
