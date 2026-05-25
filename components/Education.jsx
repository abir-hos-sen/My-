"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Social Science",
      institution: "Belkuchi Govt College",
      year: "2023 - 2024",
      description: "Studying Economics and Islamic Studies with focus on analytical and social understanding.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Belkuchi Govt College",
      year: "2023",
      description: "Studied humanities subjects including Economics and Islamic Studies.",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Dhukuriabera High School",
      year: "2021",
      description: "Built a strong foundation in science, mathematics, and logical thinking.",
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-violet">Education</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 tracking-widest text-sm uppercase"
          >
            Academic Journey
          </motion.p>
        </div>

        <div className="relative border-l-2 border-neon-violet/30 ml-4 md:ml-1/2">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >

              <div className="absolute w-4 h-4 rounded-full bg-neon-cyan border-4 border-space-dark -left-[9px] md:-left-[9px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
              
              <div className="glass-card p-6 md:ml-8 hover:border-neon-pink/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors flex items-center gap-2">
                    <GraduationCap size={20} className="text-neon-violet" />
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-neon-cyan text-sm font-mono bg-neon-cyan/10 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {item.year}
                  </div>
                </div>
                <h4 className="text-lg text-white/80 mb-3">{item.institution}</h4>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
