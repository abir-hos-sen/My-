"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "StudyNook",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      tech: ["Next.js", "Tailwind", "MongoDB", "Express"],
      github: "https://github.com/abir-hos-sen",
      live: "https://studynook-client-chi.vercel.app/"
    },
    {
      id: 2,
      title: "SunCart",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/abir-hos-sen",
      live: "https://assignment-08-sigma.vercel.app/"
    },
    {
      id: 3,
      title: "KeenKeepr",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/abir-hos-sen",
      live: "https://assignment07-mxci.vercel.app/"
    },
    {
      id: 4,
      title: "DigiTools",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
      tech: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/abir-hos-sen",
      live: "https://assignment-06-pink.vercel.app/"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-space-mid/20 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 tracking-widest text-sm uppercase"
          >
            My Recent Work
          </motion.p>
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                filter === cat 
                  ? "bg-neon-violet text-white border-neon-violet shadow-[0_0_15px_rgba(124,58,237,0.5)]" 
                  : "bg-transparent text-white/60 border-white/20 hover:border-neon-cyan/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>


        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group [perspective:1000px]"
              >
                <div className="relative w-full h-80 rounded-2xl overflow-hidden glass-card transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(5deg)_rotateY(-5deg)]">
                  <Image
                    fill
                    alt={project.title}
                    className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.image}
                  />
                  

                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/60 to-transparent opacity-80 z-10"></div>
                  

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-neon-cyan text-xs font-mono mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/5 text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <a 
                        href={project.github} 
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-neon-violet text-white backdrop-blur-md text-xs font-bold transition-colors"
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        className="px-4 py-2 rounded-lg bg-white/10 hover:bg-neon-cyan text-white backdrop-blur-md flex items-center gap-1 text-xs font-bold transition-colors"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
