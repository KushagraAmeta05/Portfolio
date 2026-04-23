import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { DATA } from '../App';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Work = () => (
  <section id="work" className="bg-[#e5e5e5] text-[#111] py-32 px-6 md:px-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div variants={fadeUp} className="flex justify-between items-baseline mb-24 border-b border-[#bbb] pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">SELECTED WORK</h2>
        <span className="font-mono text-xs text-gray-500">(04)</span>
      </motion.div>

      <div className="flex flex-col gap-32">
        {DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="group flex flex-col md:flex-row gap-12 items-start cursor-pointer"
          >
            <div className="w-full md:w-3/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10" />
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col pt-4">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-gray-400">{project.id}</span>
                <div className="h-[1px] w-12 bg-gray-400"></div>
                <span className="font-mono text-xs text-gray-400 uppercase">{project.category}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(s => (
                  <span key={s} className="border border-[#bbb] font-mono text-[10px] uppercase tracking-widest px-2 py-1 text-gray-500">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                View Project <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Work;
