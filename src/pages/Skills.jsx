import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const skillGroups = [
  {
    category: "Languages & Frameworks",
    icon: "{ }",
    skills: ["Python", "FastAPI", "HTML", "CSS"]
  },
  {
    category: "AI / ML & Deep Learning",
    icon: "⬡",
    skills: ["CNN", "Vision Transformers (DeiT)", "NLP"]
  },
  {
    category: "Libraries & Tools",
    icon: "◈",
    skills: ["Pandas", "NumPy", "Git","Gemini API"]
  },
  {
    category: "Databases & Cloud",
    icon: "⬡",
    skills: ["SQL", "Supabase", "Mongodb"]
  }
];

const Skills = () => (
  <section id="skills" className="bg-[#111] text-[#e5e5e5] py-32 px-6 md:px-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.div variants={fadeUp} className="flex justify-between items-baseline mb-24 border-b border-[#333] pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">SKILLS</h2>
        <span className="font-mono text-xs text-gray-500">TECH STACK</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-1">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="border border-[#333] p-8 hover:border-gray-500 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-2xl text-gray-600 group-hover:text-gray-400 transition-colors">{group.icon}</span>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500">{group.category}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="text-sm font-bold border border-[#444] px-3 py-2 hover:bg-white hover:text-black hover:border-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <motion.div variants={fadeUp} className="mt-16 border border-[#333] p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">— Currently Exploring</p>
        <div className="flex flex-wrap gap-3">
          {["System Design", "LLM", "Machine Learning", "GenAI",].map(skill => (
            <span key={skill} className="font-mono text-xs border border-dashed border-[#444] px-3 py-2 text-gray-500">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
