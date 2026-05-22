"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AppNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-neon flex items-center justify-center text-xl font-bold shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            A
          </div>
          <p className="font-bold text-xl tracking-tight hidden sm:block">
            Abir<span className="text-neon-cyan">Hossen</span>
          </p>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <a
                href={item.href}
                className="text-white/60 hover:text-white transition-all duration-200 text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden lg:block text-white/50 hover:text-neon-cyan transition-colors text-sm font-semibold tracking-widest uppercase"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="relative px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide overflow-hidden group"
          >
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet p-[1.5px]">
              <span className="absolute inset-0 rounded-xl bg-space-dark group-hover:bg-transparent transition-all duration-300"></span>
            </span>
            {/* Text */}
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet group-hover:text-white transition-all duration-300">
              Hire Me
            </span>
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
