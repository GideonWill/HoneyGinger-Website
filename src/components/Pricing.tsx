"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Retail",
    price: "60",
    unit: "per sachet",
    features: ["Single Serving", "Natural Ingredients", "Instant Prep", "Health Boost"],
    cta: "Buy Now",
    popular: false
  },
  {
    name: "Wholesale",
    price: "50",
    unit: "per sachet",
    features: ["Min. Order Applies", "Partner Support", "Marketing Kit", "Sales Guidance"],
    cta: "Become a Partner",
    popular: true
  },
  {
    name: "Small Carton",
    price: "2,000",
    unit: "40 sachets",
    features: ["Retail Packaging", "Bulk Savings", "Fast Shipping", "Ideal for Offices"],
    cta: "Order Carton",
    popular: false
  },
  {
    name: "Big Carton",
    price: "4,000",
    unit: "80 sachets",
    features: ["Maximum Savings", "Distributor Pricing", "Priority Support", "Wholesale Ready"],
    cta: "Order Carton",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-honey uppercase tracking-widest mb-4">Pricing</h2>
          <h3 className="text-4xl font-bold text-ginger mb-4">Choose Your Wellness Plan</h3>
          <p className="text-ginger/60">Transparent pricing for retail customers and business partners alike.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular ? "border-honey bg-honey/5" : "border-ginger/10 bg-white"
              } transition-all hover:shadow-xl hover:shadow-ginger/5`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-honey text-ginger text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Best Value
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-ginger mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-ginger/60">GHS</span>
                  <span className="text-4xl font-bold text-ginger">{plan.price}</span>
                  <span className="text-sm text-ginger/60 ml-1">/ {plan.unit}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-ginger/70">
                    <div className="w-5 h-5 rounded-full bg-ginger/10 flex items-center justify-center text-ginger">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? "bg-ginger text-white hover:bg-ginger-light shadow-lg shadow-ginger/20"
                    : "bg-muted text-ginger hover:bg-ginger/5"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
