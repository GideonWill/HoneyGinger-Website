"use client";

import { motion } from "framer-motion";
import { Coffee, Droplets, Utensils } from "lucide-react";

const steps = [
  {
    icon: <Utensils className="text-brand-yellow" size={32} />,
    title: "Open Sachet",
    description: "Take one sachet of our premium Honey Ginger mix.",
  },
  {
    icon: <Droplets className="text-brand-yellow" size={32} />,
    title: "Add Water",
    description: "Mix one sachet with half sachet (about 150ml) of hot or cold water.",
  },
  {
    icon: <Coffee className="text-brand-yellow" size={32} />,
    title: "Stir & Enjoy",
    description: "Stir well until fully dissolved and enjoy the natural boost.",
  },
];

export function Preparation() {
  return (
    <section id="preparation" className="py-24 bg-brand-green/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Preparation</h2>
          <h3 className="text-4xl font-bold text-brand-green">How to Prepare</h3>
          <div className="w-20 h-1 bg-brand-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-brand-green/10 text-center group"
            >
              <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-green mb-4">{step.title}</h4>
              <p className="text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-brand-green rounded-3xl flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold">Try it as a refreshing iced tea!</h4>
            <p className="text-white/80">Just add ice cubes after mixing with cold water.</p>
          </div>
          <button className="bg-brand-yellow text-brand-green font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
            Get Your Pack Now
          </button>
        </div>
      </div>
    </section>
  );
}
