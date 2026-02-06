"use client";

import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main>
            <Navbar />

            {/* Contact Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
                <Image
                    src="/images/joy/20.jpg"
                    alt="Contact Us"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white px-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Contact Us</h1>
                        <p className="text-xl md:text-2xl font-medium drop-shadow-lg">We'd love to hear from you</p>
                    </motion.div>
                </div>
            </section>

            <div className="pb-12 md:pb-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
