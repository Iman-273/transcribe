import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import TranscriptionFeatures from "./TranscriptionFeatures";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <TranscriptionFeatures/>
      <TestimonialsSection/>
      <PricingSection/>
      <FAQSection/>
      <FooterSection/>
    </>
  );
};

export default LandingPage;
