import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import ServicesOverview from "@/components/ServicesOverview";
import StatsAndDentists from "@/components/StatsAndDentists";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import ContactMapSection from "@/components/ContactMapSection";
import StickyBookNow from "@/components/StickyBookNow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <WhyTrustSection />
        <ServicesOverview />
        <StatsAndDentists />
        <GoogleReviews />
        <FAQSection />
        <ContactMapSection />
      </main>
      <Footer />
      <StickyBookNow />
    </div>
  );
};

export default Index;
