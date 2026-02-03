"use client";

import { motion } from "framer-motion";
import { Coffee, Droplets, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: <Utensils className="text-brand-red" size={32} />,
    title: "Open Sachet",
    description: "Take one sachet of our premium Honey Ginger mix.",
  },
  {
    icon: <Droplets className="text-brand-red" size={32} />,
    title: "Add Water",
    description: "Mix one sachet with half sachet (about 150ml) of hot or cold water.",
  },
  {
    icon: <Coffee className="text-brand-red" size={32} />,
    title: "Stir & Enjoy",
    description: "Stir well until fully dissolved and enjoy the natural boost.",
  },
];

export function Preparation() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/images/joy/6.png"
            alt="Perfect Preparation"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Text removed from overlay */}
        </div>
      </section>

      {/* Preparation Title Section */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-brand-blue mb-6"
          >
            Perfect <span className="text-brand-red">Preparation</span>
          </motion.h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Follow these simple steps to enjoy the full flavor and health benefits of our premium Honey Ginger blend.
          </p>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
        </div>
      </section>

      <section id="preparation" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="text-center mb-8">
                  <span className="text-sm font-bold text-brand-red uppercase tracking-widest bg-brand-blue/5 px-4 py-1 rounded-full mb-4 inline-block">Step {index + 1}</span>
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-brand-blue mb-4">{step.title}</h4>
                  <p className="text-foreground/70 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 p-8 md:p-16 rounded-[3rem] bg-brand-blue text-white text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Healthy Sip?</h3>
              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Join thousands of others starting their day with the natural energy of Honey Ginger.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="bg-brand-red text-white hover:bg-white hover:text-brand-red text-xl px-12 py-8 rounded-full h-auto font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20">
                  <Link href="/contact">
                    Get Your Pack Now
                  </Link>
                </Button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-brand-blue/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Premium Quality</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Made with <span className="text-brand-red">Excellence</span></h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-xl group"
            >
              <img
                src="/images/joy/2.jpeg"
                alt="Premium Packaging"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-xl group"
            >
              <img
                src="/images/joy/3.jpeg"
                alt="Quality Ingredients"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-xl group"
            >
              <img
                src="/images/joy/4.jpeg"
                alt="Premium Honey Ginger Product"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-xl group"
            >
              <img
                src="/images/joy/5.jpeg"
                alt="Natural Excellence"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
