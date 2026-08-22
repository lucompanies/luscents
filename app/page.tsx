import { PreorderProvider } from "@/components/PreorderContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Story from "@/components/Story";
import ProductShowcase from "@/components/ProductShowcase";
import Perks from "@/components/Perks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PreorderModal from "@/components/PreorderModal";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <PreorderProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Story />
        <ProductShowcase />
        <Perks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
      <PreorderModal />
    </PreorderProvider>
  );
}
