"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Retail",
    price: "60",
    unit: "for 20 sachets",
    features: ["Single sachet purchase", "Natural ingredients", "Immediate energy", "Perfect for trial"],
    highlight: false,
  },
  {
    name: "Small Carton",
    price: "2,000",
    unit: "40 boxes",
    features: ["Save GHS 400", "Bulk discount included", "Perfect for families", "Free recipe guide"],
    highlight: true,
  },
  {
    name: "Big Carton",
    price: "4,000",
    unit: "80 boxes",
    features: ["Save GHS 800", "Best value for money", "Wholesale pricing", "Priority delivery"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <div
      className="bg-cover bg-center sm:bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: 'url("/images/joy/bg tea.jpg")' }}
    >
      <div className="absolute inset-0 bg-white/80 z-0" />
      <section id="pricing" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Pricing</h2>
            <h3 className="text-4xl font-bold text-brand-blue">Choose Your Pack</h3>
            <p className="text-foreground/60 mt-4">Whether you&apos;re starting your wellness journey or stocking up, we have the right deal for you.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3 hidden lg:block"
            >
              <div className="bg-white rounded-[3rem] p-8 shadow-2xl border border-brand-blue/5">
                <img
                  src="/images/joy/12.png"
                  alt="Instant Honey Ginger Drink Bulk Pack"
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-700"
                />
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-brand-blue">Wholesale Ready</p>
                  <p className="text-foreground/50 text-sm">Best value for massive savings</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-3xl p-8 border shadow-sm flex flex-col ${tier.highlight ? "border-brand-red ring-4 ring-brand-red/10" : "border-brand-blue/10"
                    }`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-brand-blue mb-2">{tier.name}</h4>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold text-brand-blue">GHS {tier.price}</span>
                    </div>
                    <p className="text-foreground/50 text-sm mt-1">{tier.unit}</p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-foreground/70">
                        <div className="bg-brand-blue/10 p-1 rounded-full">
                          <Check className="text-brand-blue" size={14} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full py-6 rounded-xl font-bold transition-all ${tier.highlight
                      ? "bg-brand-red hover:bg-brand-red/90 text-white"
                      : "bg-brand-blue hover:bg-brand-blue/90 text-white"
                      }`}
                  >
                    <Link href="/contact">Order Now</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
