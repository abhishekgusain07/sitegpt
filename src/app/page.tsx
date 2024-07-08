import Image from "next/image";
import Hero from "./_component/Hero";
import Imagine from "./_component/ImagineSection";
import Comparison from "./_component/Comparison";
import HowItWorks from "./_component/HowItWorks";
import Header from "./_component/Header";
import Features from "./_component/Feature";
import Integrations from "./_component/Integrations";
import Demo from "./_component/Demo";
import Testimonials from "./_component/Testimonials";
import FAQ from "./_component/FAQ";
import CTA from "./_component/CTA";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Imagine />
        <Comparison />
        <HowItWorks /> 
        <Features /> 
        <Integrations />
        <Demo />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
