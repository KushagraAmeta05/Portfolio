import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const About = () => (
  <section id="about" className="bg-[#e5e5e5] text-[#111] py-32 px-6 md:px-20">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="flex justify-between items-baseline mb-24 border-b border-[#bbb] pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">ABOUT</h2>
        <span className="font-mono text-xs text-gray-500">WHO I AM</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Left - Bio */}
        <motion.div variants={fadeUp}>
          <p className="font-mono text-xs uppercase text-gray-500 mb-4 tracking-widest">— Bio</p>
          <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight mb-8">
            A curious engineer who builds at the intersection of <span className="italic">AI</span> and <span className="italic">web</span>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm Kushagra Ameta, a final-year B.Tech student in Information Technology at BVM Engineering College, Vadodara. I specialize in backend development with Python and building intelligent ML/DL systems that solve real problems.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My research internship at IITRAM resulted in a paper accepted at ICITSIF 2026, where I built a hybrid CNN + Transformer model for retinal disease diagnosis achieving 99% validation accuracy. I've also interned at IIT Jodhpur working on deep learning for handwriting recognition.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me swimming, strumming guitar, or on the badminton court.
          </p>
        </motion.div>

        {/* Right - Details */}
        <motion.div variants={fadeUp} className="flex flex-col gap-8">
          <div>
            <p className="font-mono text-xs uppercase text-gray-500 mb-4 tracking-widest">— Education</p>
            <div className="border border-[#ccc] p-6 bg-white/40">
              <p className="font-bold text-lg">B.Tech — Information Technology</p>
              <p className="font-mono text-sm text-gray-600 mt-1">Birla Vishvakarma Mahavidyalaya (BVM)</p>
              <p className="font-mono text-xs text-gray-400 mt-1">2022 – 2026 · Vadodara, Gujarat</p>
            </div>
            <div className="border border-[#ccc] border-t-0 p-6 bg-white/40">
              <p className="font-bold text-lg">CBSE XII — 77%</p>
              <p className="font-mono text-sm text-gray-600 mt-1">Sanskar International School, Sikar</p>
            </div>
            <div className="border border-[#ccc] border-t-0 p-6 bg-white/40">
              <p className="font-bold text-lg">CBSE X — 86%</p>
              <p className="font-mono text-sm text-gray-600 mt-1">BBVN, Sikar</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase text-gray-500 mb-4 tracking-widest">— Quick Facts</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Role", val: "Backend + ML Dev" },
                { label: "Location", val: "Vadodara, IN" },
                { label: "Status", val: "Open to Work" },
                { label: "Focus", val: "Python · AI/ML" },
              ].map(item => (
                <div key={item.label} className="border border-[#ccc] p-4 bg-white/40">
                  <p className="font-mono text-xs text-gray-400 uppercase mb-1">{item.label}</p>
                  <p className="font-bold text-sm">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
