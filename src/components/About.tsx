"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596715364538-6158292f7bd7?auto=format&fit=crop&q=80&w=1000"
                alt="Fresh ginger and honey ingredients"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-honey rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-honey uppercase tracking-widest mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-ginger mb-8 leading-tight">
              Crafted from Nature's Finest Elements
            </h3>
            <div className="space-y-6 text-lg text-ginger/70 leading-relaxed">
              <p>
                The Honey Ginger Drink was born out of a passion for traditional African wellness secrets. 
                We've combined the powerful anti-inflammatory properties of fresh ginger with the 
                natural sweetness and healing benefits of raw, organic honey.
              </p>
              <p>
                Our mission is to provide a premium, healthy alternative to sugary energy drinks. 
                Every sachet is a testament to our commitment to quality, health, and the 
                rich traditions of our heritage.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ginger/10 pt-12">
              <div>
                <h4 className="text-3xl font-bold text-ginger mb-2">100%</h4>
                <p className="text-sm text-ginger/60">Organic Ingredients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-ginger mb-2">0%</h4>
                <p className="text-sm text-ginger/60">Added Sugar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
