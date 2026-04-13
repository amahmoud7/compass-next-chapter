import Hero from "@/components/landing/Hero";
import ClientSlider from "@/components/landing/ClientSlider";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import ForCHWs from "@/components/landing/ForCHWs";
import MobileFirst from "@/components/landing/MobileFirst";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientSlider />
      <Services />
      <HowItWorks />
      <ForCHWs />
      <MobileFirst />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
