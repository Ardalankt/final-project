import "./App.css";
import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import Features from "../src/components/Features";
import HowItWorks from "../src/components/HowItWorks";
import Disclaimer from "./components/disclaimer";
import Cta from "./components/cta";
import Footer from "./components/footer";

function App() {
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

export default App;
