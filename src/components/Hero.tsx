"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-honey/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-ginger/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-ginger/10 text-ginger rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
          >
            Premium Natural Beverage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-ginger"
          >
            Natural Energy <br />
            <span className="text-honey italic">in Every Sip</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-ginger/70 max-w-lg mb-10 leading-relaxed"
          >
            Experience the perfect blend of raw honey and organic ginger. 
            A traditional recipe refined for the modern lifestyle. 
            No artificial additives, just pure wellness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#pricing"
              className="px-10 py-4 bg-ginger text-white rounded-full text-lg font-bold hover:bg-ginger-light transition-all shadow-xl shadow-ginger/20 text-center"
            >
              Buy Now
            </Link>
            <Link
              href="#contact"
              className="px-10 py-4 bg-white border-2 border-ginger/20 text-ginger rounded-full text-lg font-bold hover:border-ginger transition-all text-center"
            >
              Become a Distributor
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-xl mx-auto">
            {/* Abstract Decorative Circles */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-honey/10 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-80 h-80 bg-ginger/10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=1000"
                alt="Honey dripping into ginger tea"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ginger/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-ginger/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-honey/20 rounded-full flex items-center justify-center">
                  <span className="text-honey text-2xl font-bold">100%</span>
                </div>
                <div>
                  <p className="font-bold text-ginger">Natural</p>
                  <p className="text-xs text-ginger/60">Ingredients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
