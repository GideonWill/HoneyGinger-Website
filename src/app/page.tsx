import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Preparation } from "@/components/Preparation";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Deals } from "@/components/Deals";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Preparation />
      <Benefits />
      <Pricing />
      <Deals />
      <Contact />
    </main>
  );
}
