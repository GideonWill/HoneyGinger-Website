"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="pt-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-honey uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-ginger mb-8">Get in Touch</h3>
            <p className="text-ginger/60 text-lg mb-10 leading-relaxed max-w-lg">
              Have questions about our products or want to become a distributor? 
              Our team is here to help you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-ginger">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-ginger/40 font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-ginger">+233 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-ginger">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-ginger/40 font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-ginger">hello@honeyginger.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-ginger">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-ginger/40 font-bold uppercase tracking-widest">Visit Us</p>
                  <p className="text-lg font-bold text-ginger">Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full border border-ginger/10 flex items-center justify-center text-ginger/60 hover:bg-ginger hover:text-white hover:border-ginger transition-all"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 p-10 lg:p-12 rounded-[2.5rem] border border-ginger/5"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ginger/60 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white rounded-xl border border-ginger/10 focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ginger/60 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white rounded-xl border border-ginger/10 focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ginger/60 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-white rounded-xl border border-ginger/10 focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey transition-all appearance-none">
                  <option>Retail Inquiry</option>
                  <option>Wholesale/Distributor Inquiry</option>
                  <option>Customer Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ginger/60 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white rounded-xl border border-ginger/10 focus:outline-none focus:ring-2 focus:ring-honey/20 focus:border-honey transition-all resize-none"
                />
              </div>
              <button className="w-full py-5 bg-ginger text-white font-bold rounded-xl hover:bg-ginger-light transition-all shadow-xl shadow-ginger/10">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="py-12 border-t border-ginger/5 flex flex-col md:row items-center justify-between gap-8 text-sm text-ginger/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ginger rounded flex items-center justify-center text-honey font-bold">H</div>
            <span className="font-serif font-bold text-ginger text-lg">Honey Ginger</span>
          </div>
          <p>© 2026 Honey Ginger Drink. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-ginger transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ginger transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
