"use client";

import { motion } from "framer-motion";
import { Handshake, Store, TrendingUp } from "lucide-react";

export function Wholesale() {
  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-ginger rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32" />

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-honey font-bold tracking-widest uppercase text-sm mb-6">Partnership Opportunities</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Grow Your Business with Honey Ginger
              </h3>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                Join our network of distributors and retailers across the continent. 
                We offer competitive margins, marketing support, and a product that customers love.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-4 bg-honey text-ginger rounded-full text-lg font-bold hover:bg-honey-light transition-all shadow-xl shadow-honey/10">
                  Contact Sales
                </button>
                <button className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                  Become a Partner
                </button>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: <Store className="text-honey" />,
                  title: "Retail Support",
                  desc: "Point-of-sale materials and branded displays for your store."
                },
                {
                  icon: <TrendingUp className="text-honey" />,
                  title: "High Margins",
                  desc: "Lucrative profit margins for both small and large scale distributors."
                },
                {
                  icon: <Handshake className="text-honey" />,
                  title: "Marketing Kit",
                  desc: "Access to professional photography and marketing templates."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
