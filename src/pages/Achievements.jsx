import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const achievements = [
  {
    id: "01",
    title: "Research Paper Accepted — ICITSIF 2026",
    desc: "\"Automated Multi-Class Retinal Disease Diagnosis from OCT Images using Fusion Based Deep Learning Approach\" accepted at the International Conference on Information Technology, Science, Innovation and Future (ICITSIF 2026).",
    tag: "Publication",
    year: "2026"
  },
  {
    id: "02",
    title: "SRIP 2025 — IITRAM Ahmedabad",
    desc: "Selected for the prestigious national competitive Summer Research Internship Program (SRIP 2025) at the Institute of Infrastructure, Technology, Research and Management, Ahmedabad.",
    tag: "Research",
    year: "2025"
  },
  {
    id: "03",
    title: "99% Validation Accuracy — Retinal AI",
    desc: "Achieved 99% validation accuracy on the retinal disease classification model, surpassing baseline CNN models by 12%. Model deployed across web (React) and mobile (Flutter) platforms with <3s inference time.",
    tag: "Engineering",
    year: "2025"
  },
  {
    id: "04",
    title: "IIT Jodhpur ML Internship",
    desc: "Secured a Machine Learning internship at one of India's premier institutions, IIT Jodhpur, working on large-scale handwriting recognition across 84k+ samples.",
    tag: "Internship",
    year: "2024"
  }
];

const Achievements = () => (
  <section id="achievements" className="bg-[#e5e5e5] text-[#111] py-32 px-6 md:px-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.div variants={fadeUp} className="flex justify-between items-baseline mb-24 border-b border-[#bbb] pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">ACHIEVEMENTS</h2>
        <span className="font-mono text-xs text-gray-500">(04)</span>
      </motion.div>

      <div className="flex flex-col">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="group border-b border-[#bbb] py-12 grid md:grid-cols-[120px_1fr] gap-8 hover:bg-black/5 px-4 -mx-4 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-gray-400">{ach.id}</span>
              <span className="font-mono text-xs text-gray-400">{ach.year}</span>
              <span className="inline-block border border-[#bbb] font-mono text-[10px] uppercase tracking-widest px-2 py-1 text-gray-500 w-fit mt-2">
                {ach.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-black transition-colors">
                {ach.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ach.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interests */}
      <motion.div variants={fadeUp} className="mt-24">
        <p className="font-mono text-xs uppercase text-gray-500 mb-8 tracking-widest">— Beyond Code</p>
        <div className="flex gap-6 flex-wrap">
          {[
            { label: "Swimming", emoji: "🏊" },
            { label: "Guitar", emoji: "🎸" },
            { label: "Badminton", emoji: "🏸" }
          ].map(item => (
            <div key={item.label} className="border border-[#bbb] px-6 py-4 flex items-center gap-3 hover:bg-[#111] hover:text-white hover:border-[#111] transition-all cursor-default">
              <span className="text-xl">{item.emoji}</span>
              <span className="font-bold tracking-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Achievements;
