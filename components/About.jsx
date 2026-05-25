"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Headphones } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Experience", value: "Fresh Talent", icon: <Award className="text-neon-cyan mb-2" size={28} /> },
    { label: "Completed", value: "20+ Projects", icon: <Briefcase className="text-neon-violet mb-2" size={28} /> },
    { label: "Support", value: "Online 24/7", icon: <Headphones className="text-neon-pink mb-2" size={28} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 tracking-widest text-sm uppercase"
          >
            My Introduction
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-neon blur-3xl opacity-20 rounded-full"></div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full glass-card rounded-[2rem] overflow-hidden border-2 border-white/10"
              >
                <Image 
                  src="/images/about-avatar-final.png" 
                  alt="3D Avatar"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>
            </div>
          </motion.div>


          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-space-card/50 backdrop-blur-md border border-white/5 hover:border-neon-cyan/50 transition-colors rounded-2xl"
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    {stat.icon}
                    <h3 className="font-bold text-lg">{stat.value}</h3>
                    <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 leading-relaxed text-lg mb-8"
            >
              I am a passionate Frontend and Backend Developer. Having recently completed my comprehensive learning journey, I am fully equipped to build scalable and high-performance web applications. Skilled in modern UI design and robust backend architectures, I am ready to deliver innovative digital solutions that leave a lasting impression.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
