"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1596715364119-974917a86842?auto=format&fit=crop&q=80&w=800" 
                alt="Honey dripping" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-yellow rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-green leading-tight">
              Crafting Wellness Through <br />
              <span className="text-brand-yellow">Nature's Finest</span>
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              At Honey Ginger, we believe that true energy comes from nature. Our journey started with a simple tradition: the healing power of ginger and the pure sweetness of honey. 
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We've refined this age-old wisdom into a premium beverage that fits your modern lifestyle. Every bottle is a commitment to quality, health, and the vibrant spirit of Africa. No artificial colors, no preservatives—just pure, natural vitality.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-brand-green">100%</p>
                <p className="text-sm text-foreground/50 uppercase">Natural Ingredients</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-brand-green">Zero</p>
                <p className="text-sm text-foreground/50 uppercase">Additives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
