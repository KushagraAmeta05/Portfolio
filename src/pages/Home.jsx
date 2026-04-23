import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative h-screen w-full flex overflow-hidden">
      <div className="w-1/2 h-full bg-[#111] flex flex-col justify-center px-16 relative">
         <div className="mb-4">
            <h1 className="text-white/60 font-mono text-sm uppercase tracking-widest mb-2">Kushagra Ameta</h1>
            <h2 className="text-white text-3xl font-bold uppercase tracking-tight">Software Development Engineer</h2>
         </div>
         <div className="absolute top-[35%] right-0 z-10 text-white/[0.08] text-[10vw] font-extrabold leading-none tracking-tighter pointer-events-none">KUSH</div>
      </div>
      <div className="w-1/2 h-full bg-[#e5e5e5] flex items-center justify-start relative">
         <div className="absolute top-[35%] left-0 z-10 text-black/[0.08] text-[10vw] font-extrabold leading-none tracking-tighter pointer-events-none">AGRA</div>
         <div className="absolute top-1/2 right-20 z-20 w-1/3 text-black">
            <div className="flex items-center gap-2 mb-4 opacity-50"><div className="w-8 h-[1px] bg-black"></div>— ABOUT</div>
            <p className="font-mono text-sm leading-relaxed">I design and build performant, visually engaging web experiences with a focus on AI integration.</p>
         </div>
      </div>
      <img src="KUSH1.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] z-30 grayscale" />
    </section>
  );
}