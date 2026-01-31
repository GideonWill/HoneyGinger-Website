"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="space-y-0">
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
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
              <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white text-lg px-8 py-6 rounded-full h-auto w-full sm:w-auto shadow-lg shadow-brand-green/20">
                <Link href="/contact">
                  Buy Now <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/5 text-lg px-8 py-6 rounded-full h-auto w-full sm:w-auto">
                <Link href="/contact">
                  Become a Distributor
                </Link>
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[500px] lg:max-w-none h-auto overflow-hidden rounded-[3rem]">
              <img
                src="/images/joy/4.jpeg"
                alt="Fresh Ginger and Honey"
                className="w-full h-auto max-h-[75vh] object-contain object-top hover:scale-105 transition-transform duration-700"
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

      {/* Product Showcase Section */}
      <section className="py-24 bg-brand-green/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Our Collection</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-green">Purely Handcrafted <span className="text-brand-yellow">For You</span></h3>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "/images/joy/8.png", title: "Vitality Boost", desc: "Pure honey infused with the sharp, healing notes of sun-dried ginger." },
              { img: "/images/joy/11.png", title: "Nature's Gift", desc: "A golden blend that supports your daily wellness routine naturaly." },
              { img: "/images/joy/14.jpeg", title: "Handcrafted Premium", desc: "Expertly curated sachets for a consistent, high-quality experience." }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-green/5 text-center"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 bg-brand-green/5">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-2xl font-bold text-brand-green mb-3">{product.title}</h4>
                <p className="text-foreground/60 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
