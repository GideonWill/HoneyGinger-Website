"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users } from "lucide-react";

export function Deals() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="bg-ginger rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 p-12 lg:p-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-honey font-bold uppercase tracking-widest text-sm mb-6">Partnership</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Grow Your Business with Honey Ginger
              </h3>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Whether you're a retail shop, a fitness center, or an aspiring distributor, 
                we offer flexible partnership models to help you succeed. Join our growing 
                network of partners across the region.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-honey shrink-0">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Wholesale Pricing</h4>
                    <p className="text-white/60 text-sm">Competitive margins for bulk buyers and regular distributors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-honey shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Marketing Support</h4>
                    <p className="text-white/60 text-sm">Access to premium branded materials and promotional content.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 lg:p-16 rounded-[2rem] backdrop-blur-sm"
            >
              <Users size={48} className="text-honey mb-8" />
              <h4 className="text-3xl font-bold text-white mb-6">Ready to start?</h4>
              <p className="text-white/70 mb-10">
                Contact our sales team today to discuss wholesale opportunities and partnership benefits.
              </p>
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 bg-honey text-ginger font-bold rounded-xl hover:bg-honey-light transition-all shadow-lg shadow-honey/10">
                  Contact Sales Team
                </button>
                <button className="w-full py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all">
                  Download Partner Guide
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
