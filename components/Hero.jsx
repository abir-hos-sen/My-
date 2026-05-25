"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { Download, ArrowRight, Code2, Layers, Cpu } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            🚀 Welcome to my cosmic universe
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan text-glow">
              Abir Hossen
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-white/80 h-10"
          >
            I build{" "}
            <TypeAnimation
              sequence={[
                "Modern Interfaces",
                2000,
                "Scalable Backends",
                2000,
                "Web Experiences",
                2000,
                "UI/UX Designs",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-neon-cyan font-mono"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/60 text-lg max-w-lg"
          >
            Transforming ideas into exceptional digital experiences through elegant code and intuitive design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-neon-violet to-neon-cyan shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>


            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm overflow-hidden"
            >

              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-violet to-neon-cyan p-[1.5px]">
                <span className="absolute inset-0 rounded-2xl bg-space-dark group-hover:bg-white/5 transition-all duration-300"></span>
              </span>
              <Download size={18} className="relative z-10 text-neon-cyan group-hover:text-white transition-colors duration-200" />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan group-hover:text-white transition-all duration-200">Download CV</span>
            </a>
          </motion.div>
        </div>


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >

            <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-violet/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-neon-cyan/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            

            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-space-card bg-space-mid shadow-[0_0_50px_rgba(124,58,237,0.3)]">

              <div className="w-full h-full bg-gradient-to-br from-space-card to-neon-violet/20 flex items-center justify-center">
                <Image 
                  src="/images/8ce5c828-004b-4f78-b172-ecdba3eaa9e9.jpg" 
                  alt="Abir Hossen"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>


            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-card p-3 rounded-2xl flex items-center gap-2"
            >
              <Code2 className="text-neon-cyan" size={24} />
              <span className="font-mono text-xs font-bold">React/Next.js</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -left-6 glass-card p-3 rounded-2xl flex items-center gap-2"
            >
              <Layers className="text-neon-pink" size={24} />
              <span className="font-mono text-xs font-bold">UI/UX Design</span>
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 glass-card p-3 rounded-2xl flex items-center gap-2"
            >
              <Cpu className="text-neon-violet" size={24} />
              <span className="font-mono text-xs font-bold">Node.js</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
