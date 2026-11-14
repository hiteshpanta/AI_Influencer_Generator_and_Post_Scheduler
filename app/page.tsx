import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SchedulerPreview from "./components/SchedulerPreview";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="landing-wrapper">
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Core Features */}
        <Features />

        {/* 4. Auto Post Scheduler Preview */}
        <SchedulerPreview />

        {/* 5. Pricing Plans */}
        <Pricing />

        {/* 6. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
