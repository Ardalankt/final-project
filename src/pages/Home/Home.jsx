import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Cta from "./Cta";
import Disclaimer from "./Disclaimer";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Disclaimer />
      <Cta />
      <Footer />
    </>
  );
}
