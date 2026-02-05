"use client";

import { motion } from "framer-motion";

const benefitsList = [
  { img: "/images/joy/1.jpeg", title: "Relieves Nausea and Cough" },
  { img: "/images/joy/2.jpeg", title: "Improves Blood Circulation" },
  { img: "/images/joy/3.jpeg", title: "Relieves Menstrual Discomfort" },
  { img: "/images/joy/5.jpeg", title: "Burns Belly Fat" },
  { img: "/images/joy/4.jpeg", title: "Lose Extra Weight" },
  { img: "/images/joy/9.png", title: "Good for Men" },
  { img: "/images/joy/16.jpeg", title: "Relieves Stress" },
  { img: "/images/joy/8.png", title: "Good for Adults, Children and Old Age" },
  { img: "/images/joy/11.png", title: "Immune System Booster" },
];

export function Benefits() {
  return (
    <div
      className="space-y-0 bg-cover bg-center sm:bg-fixed bg-no-repeat relative"
      style={{ backgroundImage: 'url("/images/joy/bg tea.jpg")' }}
    >
      <div className="absolute inset-0 bg-white/80 z-0" />
      <div className="relative z-10">
        {/* Hero Section - Maintained */}
        <section className="relative h-[60vh] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0">
            <img
              src="/images/joy/10.png"
              alt="Benefits of Honey Ginger"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            {/* Text removed from overlay */}
          </div>
        </section>

        {/* Benefits Title Section */}
        <section className="pt-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-brand-blue mb-6"
            >
              Natural <span className="text-brand-red">Benefits</span>
            </motion.h1>
            <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
          </div>
        </section>

        {/* Benefits List Section - Restructured */}
        <section id="benefits" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-24">
              {benefitsList.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-brand-blue/5 aspect-[3/4] max-w-md mx-auto lg:mx-0">
                      <img
                        src={benefit.img}
                        alt={benefit.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-2">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-yellow/20 text-brand-blue font-bold text-xl border-2 border-brand-yellow">
                        {index + 1}
                      </span>
                      <div className="h-0.5 w-12 bg-brand-blue/20"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-brand-blue leading-tight">
                      {benefit.title}
                    </h2>

                    <p className="text-lg text-foreground/70 leading-relaxed max-w-md mx-auto lg:mx-0">
                      Experience the natural power of our premium Instant Honey Ginger Drink.
                      Crafted to support your wellness journey in every sip.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
