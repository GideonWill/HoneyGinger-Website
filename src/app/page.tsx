import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Preparation } from "@/components/Preparation";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Partnership } from "@/components/Partnership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Preparation />
      <Benefits />
      <Pricing />
      <Partnership />
      <Contact />
      <Footer />
    </main>
  );
}
