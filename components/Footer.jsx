"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050510] pt-16 pb-10 mt-20 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-neon-violet flex items-center justify-center text-white font-black text-2xl shadow-[0_0_15px_rgba(124,58,237,0.4)]">
              A
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-xl leading-tight tracking-wide">
                <span className="text-neon-violet">ABIR</span> <span className="text-white">HOSSEN</span>
              </h2>
              <p className="text-white/50 text-sm font-medium mt-0.5">UI/UX Designer & Developer</p>
            </div>
          </div>


          <div className="flex gap-6 md:gap-8 text-white/60 text-sm font-medium">
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>


          <div className="flex gap-4">
            <a href="https://github.com/abir-hos-sen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-neon-violet hover:bg-neon-violet/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/abir-hos-sen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://x.com/ABIRHOSSENN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://www.facebook.com/ABIRH0SSEN.official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>

        </div>


        <div className="w-full h-px bg-white/5 mb-8"></div>


        <div className="text-center text-white/40 text-sm font-medium">
          &copy; {new Date().getFullYear()} Abir Hossen. Crafted with <span className="text-red-500 mx-1">♥</span> in Bangladesh.
        </div>

      </div>
    </footer>
  );
}
