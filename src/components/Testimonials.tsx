"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Kwame Mensah",
        role: "Daily Consumer",
        content: "The Instant Honey Ginger Drink has become my morning ritual. It's refreshing and gives me the natural energy I need for the day.",
        videoUrl: "#", // Placeholder
    },
    {
        id: 2,
        name: "Abena Appiah",
        role: "Fitness Enthusiast",
        content: "I love that it's all-natural. The ginger kick is perfect after a workout. Highly recommended for anyone looking for a healthy boost.",
        videoUrl: "#", // Placeholder
    },
    {
        id: 3,
        name: "John Doe",
        role: "Busy Professional",
        content: "Convenient and delicious. I keep a few sachets in my office desk. It's much better than coffee for a mid-day pick-me-up.",
        videoUrl: "#", // Placeholder
    },
];

export function Testimonials() {
    return (
        <div
            className="bg-cover bg-center sm:bg-fixed bg-no-repeat relative"
            style={{ backgroundImage: 'url("/images/joy/bb1.jpg")' }}
        >
            <div className="absolute inset-0 bg-white/80 z-0" />
            <section className="py-24 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4"
                        >
                            Testimonials
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
                        >
                            What Our <span className="text-brand-red">Customers</span> Say
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-foreground/70"
                        >
                            Real stories from real people who have experienced the natural power of our Instant Honey Ginger Drink.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-brand-blue/5 rounded-[2.5rem] p-8 border border-brand-blue/10 flex flex-col h-full"
                            >
                                {/* Video Placeholder */}
                                <div className="relative aspect-video bg-brand-blue/20 rounded-2xl mb-6 overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Play size={32} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-sm font-bold">Watch Testimonial</span>
                                    </div>
                                </div>

                                <blockquote className="flex-grow">
                                    <p className="text-lg text-foreground/80 italic mb-6">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                </blockquote>

                                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-blue/10">
                                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                                        <p className="text-sm text-brand-red font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-brand-blue rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Experience the Difference Today</h3>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            Join thousands of satisfied customers and start your journey to a healthier lifestyle with our Instant Honey Ginger Drink.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 transition-all hover:scale-105"
                            >
                                Order Now
                            </a>
                            <a
                                href="/benefits"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all"
                            >
                                View Benefits
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
