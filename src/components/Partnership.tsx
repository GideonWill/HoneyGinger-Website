"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: <Handshake className="text-brand-yellow" size={24} />,
    title: "Strong Support",
    description: "We provide marketing materials and training for all our partners.",
  },
  {
    icon: <TrendingUp className="text-brand-yellow" size={24} />,
    title: "High Margins",
    description: "Enjoy competitive wholesale pricing that ensures great returns on your investment.",
  },
  {
    icon: <Shield className="text-brand-yellow" size={24} />,
    title: "Exclusive Territory",
    description: "Opportunity for exclusive distribution rights in specific regions.",
  },
];

export function Partnership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-blue rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
            <h2 className="text-sm font-bold tracking-widest text-brand-yellow uppercase">Partnership</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Grow Your Business <br />
              With Us
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              We are looking for passionate distributors and retailers to join our mission of bringing natural wellness to every home. Join our network today and benefit from a premium brand that customers love.
            </p>

            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button asChild className="bg-brand-red hover:bg-white hover:text-brand-red text-white font-bold text-lg px-10 py-6 rounded-full h-auto transition-colors">
                <Link href="/contact">Apply as a Distributor</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="/images/joy/13.jpeg"
              alt="Business Partners"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
