"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span>100% NATURAL INGREDIENTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-brand-green">
            Natural Energy <br />
            <span className="text-brand-yellow">In Every Sip</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
            Experience the perfect blend of raw honey and fresh ginger. A premium beverage crafted for wellness, vitality, and pure refreshment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8 py-6 rounded-full h-auto">
              Buy Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/5 text-lg px-8 py-6 rounded-full h-auto">
              Become a Distributor
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8 border-t">
            <div>
              <p className="text-2xl font-bold text-brand-green">Premium</p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest">Quality</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-green">Natural</p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest">Wellness</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-green">African</p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest">Heritage</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1615485240383-ef5c11bc46e3?auto=format&fit=crop&q=80&w=800" 
              alt="Fresh Ginger and Honey" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl -z-10"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/20 rounded-full blur-2xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
