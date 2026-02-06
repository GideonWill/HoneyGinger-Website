"use client";

import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const socialItems = [
    {
        image: "/images/joy/19.jpg",
        icon: FaTiktok,
        href: "https://www.tiktok.com/@joy4fame",
        label: "TikTok"
    },
    {
        image: "/images/joy/21.jpg",
        icon: Facebook,
        href: "https://www.facebook.com/Joy4fame-Instant-Honey-Ginger-Drink",
        label: "Facebook"
    },
    {
        image: "/images/joy/22.jpg",
        icon: FaTiktok,
        href: "https://www.tiktok.com/@joy4fame",
        label: "TikTok"
    }
];

export function SocialGallery() {
    return (
        <section className="w-full bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {socialItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block aspect-[4/3] md:h-[500px] overflow-hidden bg-black"
                    >
                        <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                        {/* Social Icon Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:opacity-100 transition-opacity duration-500"
                            >
                                <item.icon size={64} strokeWidth={1.5} />
                            </motion.div>
                            <div className="text-white/90 text-sm font-bold tracking-widest uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Follow us on {item.label}
                            </div>
                        </div>
                        {/* Animated Bottom Bar for Color Theme Sync */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red transition-all duration-700 group-hover:w-full" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
