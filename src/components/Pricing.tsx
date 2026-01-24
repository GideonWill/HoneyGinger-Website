"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Retail",
    price: "60",
    unit: "per sachet",
    features: ["Single sachet purchase", "Natural ingredients", "Immediate energy", "Perfect for trial"],
    highlight: false,
  },
  {
    name: "Small Carton",
    price: "2,000",
    unit: "40 sachets",
    features: ["Save GHS 400", "Bulk discount included", "Perfect for families", "Free recipe guide"],
    highlight: true,
  },
  {
    name: "Big Carton",
    price: "4,000",
    unit: "80 sachets",
    features: ["Save GHS 800", "Best value for money", "Wholesale pricing", "Priority delivery"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-green/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Pricing</h2>
          <h3 className="text-4xl font-bold text-brand-green">Choose Your Pack</h3>
          <p className="text-foreground/60 mt-4">Whether you're starting your wellness journey or stocking up, we have the right deal for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 border shadow-sm flex flex-col ${
                tier.highlight ? "border-brand-yellow ring-4 ring-brand-yellow/10" : "border-brand-green/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-green font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-green mb-2">{tier.name}</h4>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-brand-green">GHS {tier.price}</span>
                </div>
                <p className="text-foreground/50 text-sm mt-1">{tier.unit}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-foreground/70">
                    <div className="bg-brand-green/10 p-1 rounded-full">
                      <Check className="text-brand-green" size={14} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 rounded-xl font-bold transition-all ${
                  tier.highlight 
                    ? "bg-brand-yellow hover:bg-brand-yellow/90 text-brand-green" 
                    : "bg-brand-green hover:bg-brand-green/90 text-white"
                }`}
              >
                Order Now
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/50">Wholesale price for distributors: <span className="text-brand-green font-bold">GHS 50 per sachet</span></p>
        </div>
      </div>
    </section>
  );
}
