"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Activity, HeartPulse } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="text-brand-green" size={28} />,
    title: "Boosts Immunity",
    description: "Packed with antioxidants and anti-bacterial properties to keep you strong and healthy.",
  },
  {
    icon: <Zap className="text-brand-green" size={28} />,
    title: "Natural Energy",
    description: "Get a clean, natural energy boost without the caffeine crash or artificial sugars.",
  },
  {
    icon: <Activity className="text-brand-green" size={28} />,
    title: "Aids Digestion",
    description: "Ginger is known for its ability to soothe the stomach and improve digestive health.",
  },
  {
    icon: <HeartPulse className="text-brand-green" size={28} />,
    title: "Reduces Inflammation",
    description: "The anti-inflammatory effects of honey and ginger help reduce joint and muscle pain.",
  },
];

export function Benefits() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/images/joy/10.png"
            alt="Benefits of Honey Ginger"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Text removed from overlay */}
        </div>
      </section>

      {/* Benefits Title Section */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-brand-green mb-6"
          >
            Natural <span className="text-brand-yellow">Benefits</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
        </div>
      </section>

      <section id="benefits" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-brand-green/5">
                <img
                  src="/images/joy/8.png"
                  alt="Natural ingredients"
                  className="w-full h-auto object-contain p-8"
                />
              </div>
            </motion.div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-brand-green/5 hover:bg-white hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 border border-brand-green/5 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold text-brand-green mb-3">{benefit.title}</h4>
                    <p className="text-foreground/60 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-brand-green/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Lifestyle</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-green">Natural Wellness <span className="text-brand-yellow">Every Day</span></h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "/images/joy/7.png", title: "Morning Energy" },
              { img: "/images/joy/9.png", title: "Stay Active" },
              { img: "/images/joy/14.jpeg", title: "Wellness Journey" },
              { img: "/images/joy/18.jpeg", title: "Pure Vitality" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-brand-green">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
