"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const message = formData.get('message');
    const whatsappMessage = encodeURIComponent(`Hello, I'm ${name}. ${message}`);
    window.open(`https://wa.me/233248511323?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div
      className="bg-cover bg-center sm:bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: 'url("/images/joy/bb1.jpg")' }}
    >
      <div className="absolute inset-0 bg-white/80 z-0" />
      <section id="contact" className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-12"
            >
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Contact Us</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Let&apos;s Start a <br /><span className="text-brand-red">Conversation</span></h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Have questions about our products or interested in becoming a distributor? We&apos;re here to help you naturally.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-blue mb-1">Phone & WhatsApp</h4>
                    <div className="flex flex-col space-y-1">
                      <a href="https://wa.me/233248511323" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">0248511323 (WhatsApp)</a>
                      <a href="https://wa.me/233207896977" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">0207896977 (WhatsApp)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-blue mb-1">Email Address</h4>
                    <a href="mailto:Joy4fame2020@gmail.com" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">Joy4fame2020@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-blue mb-1">Business Locations</h4>
                    <div className="flex flex-col space-y-2">
                      <p className="text-foreground/70 font-medium">Anyaa NIC Off Ablekuma road</p>
                      <p className="text-foreground/70 font-medium">Kantamanto Opposite Ecobank</p>
                      <p className="text-foreground/70 font-medium">Tema Harbour GIFF building</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t">
                <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-6">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/Joy4fame-Instant-Honey-Ginger-Drink" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                    <Facebook size={20} />
                  </Link>
                  <Link href="https://www.tiktok.com/@joy4fame" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
                    <FaTiktok size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-brand-blue/5 p-8 md:p-12 rounded-[2.5rem] border border-brand-blue/10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-blue uppercase tracking-wider ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-blue uppercase tracking-wider ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-wider ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Become a Distributor</option>
                      <option>Bulk Order</option>
                      <option>Product Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="How can we help you today?"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-blue/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-6 rounded-2xl text-lg font-bold shadow-lg shadow-brand-red/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="mt-24 rounded-[3rem] overflow-hidden border border-brand-blue/10 shadow-sm h-[400px]">
            <iframe
              width="100%"
              height="100%"
              title="Business Location"
              src="https://maps.google.com/maps?q=JP84%2B66X%20Ablekuma%20Fan-Milk&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            ></iframe>
          </div>

          {/* Visual Banner */}
          <div className="container mx-auto px-6 mt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden h-[400px]"
            >
              <img
                src="/images/joy/15.jpeg"
                alt="Honey Ginger Premium Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40 flex items-center">
                <div className="container mx-auto px-12">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the Wellness Movement</h3>
                  <p className="text-white/90 text-xl max-w-2xl">Thousands of satisfied customers trust our premium Instant Honey Ginger Drink for their daily energy boost</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
