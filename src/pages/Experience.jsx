import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const experiences = [
  {
    id: "01",
    role: "Summer Research Intern — SRIP 2025",
    org: "IITRAM — Institute of Infrastructure, Technology, Research and Management",
    location: "Ahmedabad, India",
    period: "May 2025 – Jun 2025",
    type: "Research Internship",
    points: [
      "Spearheaded a hybrid CNN + Transformer fusion model (DeiT + ResNet18) for automated multi-class retinal disease diagnosis from OCT images.",
      "Achieved 99% validation accuracy, surpassing baseline CNN models by 12%.",
      "Research paper accepted at ICITSIF 2026 — 'Automated Multi-Class Retinal Disease Diagnosis from OCT Images using Fusion Based Deep Learning Approach'."
    ]
  },
  {
    id: "02",
    role: "Machine Learning Intern",
    org: "IIT Jodhpur — Indian Institute of Technology",
    location: "Jodhpur, India",
    period: "Jun 2024 – Jul 2024",
    type: "ML Internship",
    points: [
      "Engineered CNN-based deep learning models for large-scale handwriting and sentence recognition.",
      "Implemented custom data preprocessing pipelines for noise reduction across 84k+ samples.",
      "Optimized image pipeline resulting in 20% reduction in noise, significantly improving model performance."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="bg-[#111] text-[#e5e5e5] py-32 px-6 md:px-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div variants={fadeUp} className="flex justify-between items-baseline mb-24 border-b border-[#333] pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">EXPERIENCE</h2>
        <span className="font-mono text-xs text-gray-500">(02)</span>
      </motion.div>

      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="group border-b border-[#333] py-16 grid md:grid-cols-[1fr_2fr] gap-12"
          >
            {/* Left */}
            <div>
              <span className="font-mono text-xs text-gray-500">{exp.id}</span>
              <p className="font-mono text-xs text-gray-500 mt-4 uppercase tracking-widest">{exp.period}</p>
              <div className="mt-4">
                <span className="inline-block border border-gray-600 font-mono text-[10px] uppercase tracking-widest px-2 py-1 text-gray-400">
                  {exp.type}
                </span>
              </div>
              <p className="font-mono text-xs text-gray-600 mt-4">{exp.location}</p>
            </div>

            {/* Right */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                {exp.role}
              </h3>
              <p className="font-mono text-sm text-gray-400 mb-8">{exp.org}</p>
              <ul className="flex flex-col gap-4">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex gap-4 text-gray-400 text-sm leading-relaxed">
                    <span className="text-gray-600 mt-1 shrink-0">→</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div variants={fadeUp} className="mt-24">
        <p className="font-mono text-xs uppercase text-gray-500 mb-8 tracking-widest">— Certifications</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Artificial Intelligence Fundamentals",
              org: "IBM SkillsBuild",
              date: "Dec 2025",
              id: "ID: 9932e1e3-c19d-446d-a1f4-512ac4b639b5"
            },
            {
              title: "AI Dashboards using Microsoft Power BI",
              org: "Skill Nation",
              date: "Jan 2025",
              id: "Certified Workshop"
            }
          ].map((cert, i) => (
            <div key={i} className="border border-[#333] p-6 hover:border-gray-500 transition-colors">
              <p className="font-bold text-lg mb-1">{cert.title}</p>
              <p className="font-mono text-sm text-gray-400">{cert.org} · {cert.date}</p>
              <p className="font-mono text-xs text-gray-600 mt-2">{cert.id}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Experience;
