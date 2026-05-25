"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        { name: "React.js", value: 95 },
        { name: "Next.js", value: 90 },
        { name: "Tailwind CSS", value: 98 },
        { name: "Framer Motion", value: 85 },
        { name: "Redux", value: 88 },
      ]
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", value: 85 },
        { name: "Express", value: 88 },
        { name: "MongoDB", value: 82 },
        { name: "PostgreSQL", value: 75 },
        { name: "Prisma", value: 80 },
      ]
    },
    {
      id: "tools",
      label: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", value: 95 },
        { name: "Docker", value: 75 },
        { name: "Figma (UI/UX)", value: 90 },
        { name: "Vercel", value: 88 },
        { name: "Kubernetes", value: 65 },
      ]
    }
  ];

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-space-mid/30 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-violet/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 tracking-widest text-sm uppercase"
          >
            Technical Expertise
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col w-full"
        >

          <div className="flex flex-wrap gap-2 md:gap-6 w-full relative rounded-2xl p-2 border border-white/10 bg-space-card/50 mb-8 justify-center">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-3 rounded-xl transition-all font-medium text-sm md:text-base ${
                  activeTab === category.id ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-neon rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>


          <div className="glass-card p-6 md:p-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                {activeCategory?.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white/90">{skill.name}</span>
                      <span className="text-neon-cyan text-sm font-mono">{skill.value}%</span>
                    </div>

                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-neon-violet to-neon-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
