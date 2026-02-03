"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Ginger and Honey Drink?",
    answer: "Ginger and Honey Drink is a natural beverage made by infusing fresh ginger with pure honey. it's known for its soothing taste and health benefits."
  },
  {
    question: "What are the health benefits of Ginger and Honey Drink?",
    answer: "Boosts immunity, Aids digestion, Helps relieve cold, cough, and sore throat, Reduces inflammation, Supports weight management, Improves blood circulation."
  },
  {
    question: "Is Ginger and Honey Drink good for colds and flu?",
    answer: "Yes. Ginger helps reduce congestion and inflammation, while honey soothes the throat and has antibacterial properties."
  },
  {
    question: "Can I drink Ginger and Honey Drink every day?",
    answer: "Yes, it is safe for daily consumption when taken in moderation. One to two cups per day is generally recommended."
  },
  {
    question: "Is Ginger and Honey Drink good for weight loss?",
    answer: "It may support weight loss by improving digestion, boosting metabolism, and reducing appetite when combined with a healthy lifestyle."
  },
  {
    question: "Does Ginger and Honey Drink contain caffeine?",
    answer: "No. Ginger and Honey Drink is naturally caffeine-free."
  },
  {
    question: "Can pregnant women drink Ginger and Honey Drink?",
    answer: "In small amounts, it is generally safe, but pregnant women should consult a healthcare professional before regular consumption."
  },
  {
    question: "Is this tea suitable for diabetics?",
    answer: "People with diabetes should consume it cautiously due to honey’s natural sugars. It’s best to consult a doctor before use."
  },
  {
    question: "How should Ginger and Honey Drink be prepared?",
    answer: "Add hot water to ginger, allow it to steep for a few minutes, then add honey to taste. Stir well before drinking."
  },
  {
    question: "When is the best time to drink Ginger and Honey Drink?",
    answer: "It can be taken in the morning, after meals for digestion, or in the evening for relaxation."
  },
  {
    question: "Are there any side effects?",
    answer: "Excessive consumption may cause stomach irritation or heartburn in some individuals."
  },
  {
    question: "How should Ginger and Honey Drink be stored?",
    answer: "Store in a cool, dry place away from direct sunlight to maintain freshness."
  }
];

export function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {/* Our Story Section */}
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
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/joy/1.jpeg"
                  alt="Our Heritage"
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
              <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
                Crafting Wellness Through <br />
                <span className="text-brand-red">Nature's Finest</span>
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                At Honey Ginger, we believe that true energy comes from nature. Our journey started with a simple tradition: the healing power of ginger and the pure sweetness of honey.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We've refined this age-old wisdom into a premium beverage that fits your modern lifestyle. Every bottle is a commitment to quality, health, and the vibrant spirit of Africa. No artificial colors, no preservatives—just pure, natural vitality.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-brand-blue">100%</p>
                  <p className="text-sm text-foreground/50 uppercase">Natural Ingredients</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-brand-blue">Zero</p>
                  <p className="text-sm text-foreground/50 uppercase">Additives</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 bg-brand-blue/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8 lg:sticky lg:top-32"
            >
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Support</h2>
                <h3 className="text-4xl font-bold text-brand-blue mb-6">Frequently Asked Questions</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Everything you need to know about our premium Honey Ginger drink and its natural benefits.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] hidden lg:block">
                <img
                  src="/images/joy/5.jpeg"
                  alt="Quality Ingredients"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <div className="lg:w-2/3 w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-brand-blue/10 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-blue/5 transition-colors"
                  >
                    <span className="text-lg font-bold text-brand-blue pr-8">{faq.question}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-6 text-foreground/70 leading-relaxed border-t border-brand-blue/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Our Premium Quality</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue">Experience the <span className="text-brand-red">Difference</span></h3>
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">From sourcing to packaging, every step reflects our commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "/images/joy/2.jpeg", caption: "Premium Packaging" },
              { img: "/images/joy/3.jpeg", caption: "Quality Ingredients" },
              { img: "/images/joy/16.jpeg", caption: "Perfect Blend" },
              { img: "/images/joy/13.jpeg", caption: "Natural Goodness" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-square bg-brand-blue/5"
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-lg">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
