import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';

// Projects defined here — App.jsx stays untouched
const PROJECTS = [
  {
    id: "01",
    title: "Weather Prediction AI",
    category: "Machine Learning",
    img: "/w1.jpeg",
    desc: "Regression-based forecasting system predicting temperature, humidity and rainfall from NOAA historical climate datasets. 15% accuracy improvement over baseline.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    id: "02",
    title: "Retinal-AI",
    category: "Deep Learning",
    img: "/retinal-ai.png",
    desc: "Cloud-based medical diagnostic platform classifying retinal OCT scans into 4 disease classes using ResNet18 + DeiT-Small fusion with Grad-CAM explainability. 99% accuracy.",
    stack: ["Python", "PyTorch", "React", "Flutter", "FastAPI", "Supabase"]
  },
  {
    id: "03",
    title: "Movers & Packers",
    category: "Full Stack",
    img: "/w3.png",
    desc: "Service-based logistics platform with role-based authentication for 3 user tiers. Fully automated booking and tracking pipeline.",
    stack: ["HTML", "CSS", "JavaScript", "SQL", "PHP"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

// ── Project detail data (extra info for modal) ──────────────────────────────
const PROJECT_DETAILS = {
  "01": {
    period: "Dec 2024 – Jun 2025",
    summary: "A machine learning based weather forecasting system that predicts temperature, humidity, and rainfall by processing NOAA historical climate datasets. The system uses regression models trained on multi-parameter climate data to deliver accurate short-term weather forecasts with a subscription-based web interface.",
    highlights: [
    "15% accuracy improvement over the baseline model",
    "Processes NOAA historical climate datasets for training",
    "Multi-parameter prediction: temperature, humidity & rainfall",
    "Streamlined feature engineering pipeline",
    "Subscription-based dashboard with Free, Pro & Enterprise tiers"
    ],
    architecture: [
    { label: "Models", val: "Regression (Scikit-learn)" },
    { label: "Data Source", val: "NOAA Climate Datasets" },
    { label: "Processing", val: "Pandas + NumPy Pipeline" },
    { label: "Outputs", val: "Temp · Humidity · Rainfall" },
    { label: "Interface", val: "Web Dashboard" },
    { label: "Improvement", val: "+15% over baseline" },
    ],
    github: null,
    live: null,
    },
    "02": {
    period: "June 2025 – Dec 2025",
    summary: "Retinal-AI is a cloud-based medical diagnostic platform built during my Summer Research Internship at IITRAM, Ahmedabad. It classifies retinal OCT scans into 4 disease categories — CNV, DME, DRUSEN, and NORMAL — using a hybrid deep learning architecture combining CNNs and Vision Transformers.",
    highlights: [
    "99% validation accuracy, surpassing baseline CNN models by 12%",
    "Dual-branch ResNet18 + DeiT-Small fusion architecture",
    "Grad-CAM explainability for visual diagnosis heatmaps",
    "Deployed on React web + Flutter mobile with <3s inference time",
    "Research paper accepted at ICITSIF 2026"
    ],
    architecture: [
    { label: "Model", val: "ResNet18 + DeiT-Small Fusion" },
    { label: "Explainability", val: "Grad-CAM Visualization" },
    { label: "Backend", val: "FastAPI + Supabase" },
    { label: "Frontend", val: "React Web + Flutter Mobile" },
    { label: "AI Assistant", val: "Gemini API Integration" },
    { label: "Accuracy", val: "99% Validation" },
    ],
    github: "https://github.com/KushagraAmeta05/RETINALAI",
    live: "https://retinalai.netlify.app",
    },    
  "03": {
    period: "July 2024 – Dec 2024",
    summary: "GetPackGo is a full-stack service-based logistics platform enabling customers to book and track delivery services. The platform features role-based authentication for 3 distinct user tiers — customer, driver, and admin — each with a dedicated dashboard and access controls built with HTML, CSS, JS and SQL.",
    highlights: [
      "Role-based authentication for 3 user tiers (Customer, Driver, Admin)",
      "Fully automated booking and tracking pipeline",
      "Real-time order status updates for customers",
      "Admin dashboard for complete booking oversight",
      "SQL-backed structured data handling for multi-user operations"
    ],
    architecture: [
      { label: "Frontend", val: "HTML · CSS · JavaScript" },
      { label: "Database", val: "SQL (MySQL)" },
      { label: "Auth", val: "Role-Based (3 Tiers)" },
      { label: "Users", val: "Customer · Driver · Admin" },
      { label: "Features", val: "Booking + Tracking" },
      { label: "Type", val: "Full Stack Web App" },
    ],
    github: "https://github.com/KushagraAmeta05/GetPackGo",
    live: null,
  },
  "04": {
    period: "Dec 2023 – Jun 2024",
    summary: "A web-based organizational system that automates transportation and accommodation management for travel companies. Employing structured SQL schemas for multi-user data handling, it eliminates manual trip planning overhead through a refined scheduling workflow.",
    highlights: [
      "Automates transportation and accommodation management",
      "Structured SQL schemas for multi-user data handling",
      "Elimination of manual trip planning overhead",
      "Refined scheduling workflow for faster bookings",
      "Multi-user support with session management"
    ],
    architecture: [
      { label: "Frontend", val: "HTML · CSS · JavaScript" },
      { label: "Database", val: "SQL (MySQL)" },
      { label: "Features", val: "Transport + Accommodation" },
      { label: "Users", val: "Multi-user Support" },
      { label: "Workflow", val: "Automated Scheduling" },
      { label: "Type", val: "Full Stack Web App" },
    ],
    github: "https://github.com/KushagraAmeta05",
    live: null,
  }
};

// ── Modal Component ──────────────────────────────────────────────────────────
const ProjectModal = ({ project, detail, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl mx-4 my-12 bg-[#111] text-[#e5e5e5]"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Hero Image */}
          <div className="w-full h-[300px] overflow-hidden relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute bottom-8 left-10 z-20">
              <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">{project.category}</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{project.title}</h2>
            </div>
            <div className="absolute top-6 left-10 z-20">
              <span className="font-mono text-xs text-gray-500">{project.id}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-10">

            {/* Period + Buttons row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-[#333]">
              <div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                <p className="font-mono text-sm text-gray-300">{detail.period}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {detail.github && (
                  <a
                    href={detail.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-[#444] text-gray-300 font-mono text-xs uppercase tracking-widest px-5 py-3 hover:border-white hover:text-white transition-all"
                  >
                    <Github size={14} /> Github
                  </a>
                )}
                {detail.live && (
                  <a
                    href={detail.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-black font-mono text-xs uppercase tracking-widest px-5 py-3 hover:bg-gray-200 transition-all"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {!detail.github && !detail.live && (
                  <span className="border border-dashed border-[#444] text-gray-600 font-mono text-xs uppercase tracking-widest px-5 py-3">
                    Private / Local
                  </span>
                )}
              </div>
            </div>

            {/* Summary */}
            <div className="mb-12">
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">— Project Summary</p>
              <p className="text-gray-300 leading-relaxed text-base">{detail.summary}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">— Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map(s => (
                  <span
                    key={s}
                    className="border border-[#444] font-mono text-xs uppercase tracking-widest px-4 py-2 text-gray-300 hover:border-white hover:text-white transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">— Key Highlights</p>
              <div className="flex flex-col gap-3">
                {detail.highlights.map((pt, i) => (
                  <div key={i} className="flex gap-4 items-start border-b border-[#222] pb-3">
                    <span className="font-mono text-xs text-gray-600 mt-1 shrink-0">0{i + 1}</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture / Details Grid */}
            <div>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">— Architecture & Details</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                {detail.architecture.map((item, i) => (
                  <div key={i} className="border border-[#222] p-5">
                    <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="font-bold text-sm text-gray-200">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Work Section ────────────────────────────────────────────────────────
const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
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
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group flex flex-col md:flex-row gap-12 items-start cursor-pointer"
                onClick={() => openModal(project)}
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
                    View Case <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          detail={PROJECT_DETAILS[selectedProject.id]}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Work;