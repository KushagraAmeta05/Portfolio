import os

# Define the file structure
files = {
    "package.json": """
{
  "name": "portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.8"
  }
}
""",
    "vite.config.js": """
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
""",
    "tailwind.config.js": """
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Syne"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        'accent': '#444444', 
      }
    },
  },
  plugins: [],
}
""",
    "postcss.config.js": """
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
""",
    "index.html": """
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kushagra Ameta | Creative Technologist</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
""",
    "src/main.jsx": """
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
""",
    "src/index.css": """
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #f0f0f0;
}

/* Hide scrollbar */
::-webkit-scrollbar { width: 0px; }

::selection {
    background: black;
    color: white;
}
""",
    "src/App.jsx": """
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const DATA = {
  name: "Kushagra Ameta",
  role: "CREATIVE TECHNOLOGIST & ML RESEARCHER",
  location: "Vadodara, IN",
  projects: [
    {
      id: "01",
      title: "Weather Prediction AI",
      category: "Machine Learning",
      img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
      link: "https://github.com/KushagraAmeta05/weather-prediction"
    },
    {
      id: "02",
      title: "Disease Risk AI",
      category: "Deep Learning",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
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
    <div className="hidden md:flex gap-12 font-mono text-xs uppercase tracking-widest">
      <a href="#work" className="hover:underline">Index</a>
      <a href="#about" className="hover:underline">Information</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </div>
    <div className="font-mono text-xs uppercase md:hidden">Menu</div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full flex overflow-hidden">
    
    {/* LEFT SIDE (BLACK) */}
    <div className="w-1/2 h-full bg-[#111] flex items-center justify-end relative">
       <div className="absolute top-[40%] right-[-4vw] z-10 text-white mix-blend-difference text-[10vw] font-extrabold leading-none tracking-tighter">
         KUSH
       </div>
       <div className="absolute bottom-10 left-10 text-white font-mono text-xs z-20 flex flex-col gap-2">
          <p className="opacity-50">BASED IN</p>
          <p>{DATA.location}</p>
       </div>
    </div>

    {/* RIGHT SIDE (WHITE) */}
    <div className="w-1/2 h-full bg-[#e5e5e5] flex items-center justify-start relative">
       <div className="absolute top-[40%] left-[-4vw] z-10 text-black text-[10vw] font-extrabold leading-none tracking-tighter">
         AGRA
       </div>
       <div className="absolute bottom-10 right-10 text-black font-mono text-xs z-20 text-right flex flex-col gap-2">
          <p className="opacity-50">SPECIALIZATION</p>
          <p>CREATIVE DEV & ML</p>
       </div>
    </div>

    {/* CENTER IMAGE (POPPING OUT) */}
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[75vh] md:h-[85vh] z-30 pointer-events-none"
    >
      {/* REPLACE THIS SRC WITH YOUR PHOTO */}
      <img 
        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" 
        alt="Kushagra" 
        className="h-full w-auto object-cover grayscale drop-shadow-2xl"
      />
    </motion.div>

    {/* FLOATING BADGE */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 mix-blend-exclusion text-white text-center">
       <p className="font-mono text-xs tracking-[0.2em] uppercase mb-2">Portfolio 2025</p>
       <div className="w-[1px] h-12 bg-white mx-auto"></div>
    </div>

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
           <h2 className="text-[8vw] font-bold leading-[0.9] tracking-tighter">
             LET'S BUILD <br/> THE FUTURE.
           </h2>
        </div>
        <div className="hidden md:block">
           <ArrowUpRight size={48} />
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#ccc] pt-12">
        <div>
           <p className="font-mono text-xs uppercase mb-4 opacity-50">Socials</p>
           <div className="flex flex-col gap-2 font-bold text-lg">
              <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Github</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
           </div>
        </div>
        <div>
           <p className="font-mono text-xs uppercase mb-4 opacity-50">Contact</p>
           <a href={`mailto:kushagraameta500@gmail.com`} className="font-bold text-lg hover:underline">
             kushagraameta500@gmail.com
           </a>
        </div>
        <div className="md:text-right flex flex-col justify-end">
           <p className="font-mono text-xs opacity-50">
             © 2026 KUSHAGRA AMETA <br/> DESIGNED 
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
      <Work />
      <Footer />
    </div>
  );
}
"""
}

# Ensure directories exist
os.makedirs("src", exist_ok=True)
os.makedirs("public", exist_ok=True)

# Write files
for filepath, content in files.items():
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Created {filepath}")

print("Setup complete! Now run: npm install && npm run dev")

