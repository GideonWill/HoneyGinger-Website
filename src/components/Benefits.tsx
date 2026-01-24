"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Activity, HeartPulse } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="text-brand-green" size={28} />,
    title: "Boosts Immunity",
    description: "Packed with antioxidants and anti-bacterial properties to keep you strong and healthy.",
  },
  {
    icon: <Zap className="text-brand-green" size={28} />,
    title: "Natural Energy",
    description: "Get a clean, natural energy boost without the caffeine crash or artificial sugars.",
  },
  {
    icon: <Activity className="text-brand-green" size={28} />,
    title: "Aids Digestion",
    description: "Ginger is known for its ability to soothe the stomach and improve digestive health.",
  },
  {
    icon: <HeartPulse className="text-brand-green" size={28} />,
    title: "Reduces Inflammation",
    description: "The anti-inflammatory effects of honey and ginger help reduce joint and muscle pain.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Wellness</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-green mb-8 leading-tight">
              Health Benefits in <br />
              <span className="text-brand-yellow">Every Single Drop</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Our blend isn't just delicious—it's a powerhouse of natural nutrients. By combining the therapeutic properties of ginger with the nutritional richness of honey, we've created a drink that supports your body's natural defense system.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-green">{benefit.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Healthy Lifestyle" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
