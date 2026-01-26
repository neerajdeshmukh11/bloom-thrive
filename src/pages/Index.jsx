import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import FeaturesSection from "@/components/FeaturesSection.jsx";
import ServicesSection from "@/components/ServicesSection.jsx";
import PregnancyCalculator from "@/components/PregnancyCalculator.jsx";
import DietYogaSection from "@/components/DietYogaSection.jsx";
import VaccinationTracker from "@/components/VaccinationTracker.jsx";
import WhyChooseUs from "@/components/WhyChooseUs.jsx";
import TestimonialsSection from "@/components/TestimonialsSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";
import ChatbotWidget from "@/components/ChatbotWidget.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PregnancyCalculator />
      <DietYogaSection />
      <VaccinationTracker />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
