"use client";

import { motion } from "framer-motion";
import { CupSoap, Droplets, Utensils } from "lucide-react";

const steps = [
  {
    icon: <CupSoap size={40} className="text-honey" />,
    title: "Empty Sachet",
    description: "Pour one sachet of Honey Ginger powder into a clean cup."
  },
  {
    icon: <Droplets size={40} className="text-honey" />,
    title: "Add Water",
    description: "Add half a sachet's volume of hot or cold water (approx. 150ml)."
  },
  {
    icon: <Utensils size={40} className="text-honey" />,
    title: "Stir & Enjoy",
    description: "Stir well until dissolved and experience the natural energy."
  }
];

export function Preparation() {
  return (
    <section id="preparation" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-ginger uppercase tracking-widest mb-4">How to Enjoy</h2>
          <h3 className="text-4xl font-bold text-ginger mb-4">Perfect Preparation Every Time</h3>
          <p className="text-ginger/60">Follow these simple steps to brew the perfect cup of wellness.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 bg-muted/30 rounded-3xl border border-ginger/5 hover:border-honey/20 transition-all group"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl font-serif font-black text-ginger/5 group-hover:text-honey/10 transition-colors">
                0{index + 1}
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-ginger mb-4">{step.title}</h4>
              <p className="text-ginger/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
