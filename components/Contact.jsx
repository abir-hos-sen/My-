"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-violet">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 tracking-widest text-sm uppercase"
          >
            Let's Work Together
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Feel free to reach out to me for any project or collaboration. I am always open to discussing new ideas and opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-space-card/80 border border-white/5 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-white/50 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-white group-hover:text-neon-cyan transition-colors">abirkhan0495@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-space-card/80 border border-white/5 flex items-center justify-center text-neon-violet group-hover:bg-neon-violet/20 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-white/50 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-white group-hover:text-neon-violet transition-colors">+8801813990122</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-space-card/80 border border-white/5 flex items-center justify-center text-neon-pink group-hover:bg-neon-pink/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-white/50 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-white group-hover:text-neon-pink transition-colors">Sirajganj, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <form className="glass-card p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-white/70 text-sm font-medium ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-space-dark/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all group-hover:border-white/20 backdrop-blur-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-white/70 text-sm font-medium ml-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-space-dark/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-violet/50 focus:ring-1 focus:ring-neon-violet/50 transition-all group-hover:border-white/20 backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative group">
                <label className="text-white/70 text-sm font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-space-dark/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all group-hover:border-white/20 backdrop-blur-sm"
                />
              </div>
              
              <div className="flex flex-col gap-2 relative group">
                <label className="text-white/70 text-sm font-medium ml-1">Message</label>
                <textarea 
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full bg-space-dark/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-violet/50 focus:ring-1 focus:ring-neon-violet/50 transition-all group-hover:border-white/20 backdrop-blur-sm resize-y"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="mt-4 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-xl text-white font-bold flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full md:w-max self-start"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
