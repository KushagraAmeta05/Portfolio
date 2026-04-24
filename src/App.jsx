import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import WorkPage from './pages/Work';


const DATA = {
  name: "Kushagra Ameta",
  role: "SOFTWARE DEVELOPMENT ENGINEER",
  tagline: "Backend-focused developer skilled in Python and SQL, with hands-on experience in building applications and working on machine learning projects",
  location: "Vadodara, IN",
  projects: [
    {
      id: "01",
      title: "Weather Prediction AI",
      category: "Machine Learning",
      img: "/w1.jpeg"
    },
    {
      id: "02",
      title: "Disease Risk AI",
      category: "Deep Learning",
      img: "/retinal-ai.png"
    },
    {
      id: "03",
      title: "Movers & Packers",
      category: "Full Stack",
      img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
    }
  ]
};

const Navbar = () => (
  <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
    <div className="font-bold text-xl tracking-tight uppercase">Code by Kushagra</div>
    <div className="hidden md:flex gap-6 font-mono text-[10px] uppercase tracking-widest">
      <a href="#home" className="hover:underline">Home</a>
      <a href="#about" className="hover:underline">About</a>
      <a href="#experience" className="hover:underline">Experience</a>
      <a href="#work" className="hover:underline">Projects</a>
      <a href="#skills" className="hover:underline">Skills</a>
      <a href="#achievements" className="hover:underline">Achievements</a>
      <a href="#contact" className="hover:underline">Contact</a>
      <a href="mailto:kushagraameta500@gmail.com" className="font-bold text-white bg-black px-2 py-1">Let's talk</a>
    </div>
    <div className="font-mono text-xs uppercase md:hidden">Menu</div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen w-full flex overflow-hidden">
    
    {/* LEFT SIDE (BLACK) */}
    <div className="w-1/2 h-full bg-[#111] flex flex-col justify-center px-10 relative">
       <div className="mb-4">
          <h1 className="text-white/60 font-mono text-sm uppercase tracking-widest">{DATA.name}</h1>
          <h2 className="text-white text-2xl font-bold uppercase tracking-tight">{DATA.role}</h2>
       </div>
       
       <div className="absolute top-[35%] right-0 z-10 text-white/[0.06] text-[10vw] font-extrabold leading-none tracking-tighter pointer-events-none select-none">
         KUSH
       </div>
       
       <div className="absolute bottom-10 left-10 text-white font-mono text-xs z-20 flex flex-col gap-2">
          <p className="opacity-50">BASED IN</p>
          <p>{DATA.location}</p>
       </div>
    </div>

    {/* RIGHT SIDE (WHITE) */}
    <div className="w-1/2 h-full bg-[#e5e5e5] flex items-center justify-start relative">
       <div className="absolute top-[35%] left-0 z-10 text-black/[0.06] text-[10vw] font-extrabold leading-none tracking-tighter pointer-events-none select-none">
         AGRA
       </div>
       
       <div className="absolute top-1/2 right-10 z-20 w-1/3 text-black">
          <p className="font-mono text-sm leading-relaxed">{DATA.tagline}</p>
       </div>

       <div className="absolute bottom-10 right-10 text-black font-mono text-xs z-20 text-right flex flex-col gap-2">
          <p className="opacity-50">SPECIALIZATION</p>
          <p>BACKEND • CORE SDE</p>
       </div>
    </div>

    {/* CENTER IMAGE */}
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[75vh] md:h-[85vh] z-30 pointer-events-none"
    >
      <img 
        src="KUSH1.png" 
        alt="Kushagra" 
        className="h-full w-auto object-cover grayscale drop-shadow-2xl"
      />
    </motion.div>

  </section>
);

const Work = () => (
  <section id="work" className="bg-[#111] text-[#e5e5e5] py-32 px-6 md:px-20">
    <div className="flex justify-between items-baseline mb-24 border-b border-[#333] pb-8">
       <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">SELECTED WORK</h2>
       <span className="font-mono text-xs text-gray-500">(03)</span>
    </div>

    <div className="flex flex-col gap-32">
       {DATA.projects.map((project, idx) => (
         <div key={idx} className="group flex flex-col md:flex-row gap-12 items-center cursor-pointer">
            <div className="w-full md:w-3/5 overflow-hidden relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"/>
               <img src={project.img} className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
            </div>
            <div className="w-full md:w-2/5 flex flex-col">
               <div className="flex items-center gap-4 mb-6">
                 <span className="font-mono text-xs text-gray-500">0{idx+1}</span>
                 <div className="h-[1px] w-12 bg-gray-700"></div>
                 <span className="font-mono text-xs text-gray-500 uppercase">{project.category}</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight group-hover:text-white transition-colors">{project.title}</h3>
               <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  View Case <ArrowUpRight size={16}/>
               </div>
            </div>
         </div>
       ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#e5e5e5] text-[#111] h-screen flex flex-col justify-between p-6 md:p-20">
     <div className="flex justify-between items-start mt-20">
        <div>
           <p className="font-mono text-xs uppercase mb-4 opacity-50">Have an idea?</p>
           <a href="mailto:kushagraameta500@gmail.com">
             <h2 className="text-[8vw] font-bold leading-[0.9] tracking-tighter hover:opacity-70 transition-opacity cursor-pointer">
               LET'S BUILD <br/> THE FUTURE.
             </h2>
           </a>
        </div>
        <a href="mailto:kushagraameta500@gmail.com" className="hidden md:block hover:opacity-50 transition-opacity">
           <ArrowUpRight size={48} />
        </a>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#ccc] pt-12">
        <div>
           <p className="font-mono text-xs uppercase mb-4 opacity-50">Socials</p>
           <div className="flex flex-col gap-2 font-bold text-lg">
              <a href="https://www.linkedin.com/in/kushagra-ameta-668b81247/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">LinkedIn</a>
              <a href="https://github.com/KushagraAmeta05" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">Github</a>
              <a href="https://leetcode.com/u/1BDAhW8Djt/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">Leetcode</a>
           </div>
        </div>
        <div>
           <p className="font-mono text-xs uppercase mb-4 opacity-50">Contact</p>
           <a href="mailto:kushagraameta500@gmail.com" className="font-bold text-lg hover:underline">
             kushagraameta500@gmail.com
           </a>
        </div>
        <div className="md:text-right flex flex-col justify-end">
           <p className="font-mono text-xs opacity-50">
             © 2026 KUSHAGRA AMETA <br/>              
           </p>
        </div>
     </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#e5e5e5] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <WorkPage />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}