"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4">Contact</h2>
              <h3 className="text-4xl font-bold text-brand-green mb-6">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed">
                Have questions about our product or interested in a partnership? Our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest">Call Us</p>
                  <p className="font-bold text-brand-green">+233 (0) 555 123 456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest">Email Us</p>
                  <p className="font-bold text-brand-green">info@honeyginger.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 uppercase tracking-widest">Visit Us</p>
                  <p className="font-bold text-brand-green">Accra, Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 p-6 bg-brand-yellow/10 rounded-3xl">
              <h4 className="font-bold text-brand-green mb-2">Business Hours</h4>
              <p className="text-sm text-foreground/70">Monday - Friday: 8am - 6pm</p>
              <p className="text-sm text-foreground/70">Saturday: 9am - 4pm</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white border border-brand-green/10 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-green/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-green">Full Name</label>
                    <Input placeholder="John Doe" className="bg-brand-green/5 border-none h-12 rounded-xl focus-visible:ring-brand-green" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-green">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="bg-brand-green/5 border-none h-12 rounded-xl focus-visible:ring-brand-green" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-green">Subject</label>
                  <Input placeholder="Wholesale Inquiry" className="bg-brand-green/5 border-none h-12 rounded-xl focus-visible:ring-brand-green" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-green">Message</label>
                  <Textarea placeholder="How can we help you?" className="bg-brand-green/5 border-none min-h-[150px] rounded-xl focus-visible:ring-brand-green resize-none" />
                </div>

                <Button className="w-full md:w-auto px-12 py-6 bg-brand-green hover:bg-brand-green/90 text-white rounded-full h-auto text-lg font-bold group">
                  Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
