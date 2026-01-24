"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartPulse, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Boosts Immunity",
    description: "Natural gingerol and honey enzymes work together to strengthen your immune system."
  },
  {
    icon: <Zap size={32} />,
    title: "Natural Energy",
    description: "Get a clean energy boost without the caffeine crash, thanks to natural honey sugars."
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Aids Digestion",
    description: "Ginger has been used for centuries to soothe the stomach and improve digestive health."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Reduces Inflammation",
    description: "Powerful anti-inflammatory properties help reduce muscle soreness and joint pain."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-ginger text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-honey uppercase tracking-widest mb-4">Why Honey Ginger?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Science Meets <br />
              <span className="italic text-honey-light">Ancient Tradition</span>
            </h3>
            <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
              Our unique blend isn't just about taste. It's a carefully balanced formula designed 
              to support your body's natural functions and help you perform at your best every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                No Preservatives
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                Gluten Free
              </div>
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                100% Vegan
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-honey text-ginger rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-honey/20">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
