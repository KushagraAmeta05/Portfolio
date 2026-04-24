import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kushagraameta500@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#111] text-[#e5e5e5] min-h-screen flex flex-col justify-between p-6 md:p-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="flex flex-col h-full justify-between flex-1"
      >
        {/* Top CTA */}
        <motion.div variants={fadeUp} className="flex justify-between items-start mt-20">
          <div>
            <p className="font-mono text-xs uppercase mb-4 text-gray-500 tracking-widest">Have an idea?</p>
            <a href="mailto:kushagraameta500@gmail.com">
              <h2 className="text-[7vw] font-bold leading-[0.9] tracking-tighter hover:text-gray-400 transition-colors cursor-pointer">
                LET'S BUILD <br /> THE FUTURE.
              </h2>
            </a>
          </div>
          <a href="mailto:kushagraameta500@gmail.com" className="hidden md:block hover:opacity-50 transition-opacity mt-4">
            <ArrowUpRight size={48} />
          </a>
        </motion.div>

        {/* Contact Actions */}
        <motion.div variants={fadeUp} className="mt-16 flex flex-col md:flex-row gap-4">
          <a
            href="mailto:kushagraameta500@gmail.com"
            className="border border-[#e5e5e5] text-[#e5e5e5] font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#e5e5e5] hover:text-[#111] transition-all flex items-center gap-3"
          >
            Send Email <ArrowUpRight size={16} />
          </a>
          <button
            onClick={copyEmail}
            className="border border-[#444] text-gray-400 font-mono text-sm uppercase tracking-widest px-8 py-4 hover:border-[#666] hover:text-gray-200 transition-all"
          >
            {copied ? '✓ Copied!' : 'Copy Email'}
          </button>
          <a
            href="https://www.linkedin.com/in/kushagra-ameta-668b81247/"
            target="_blank"
            rel="noreferrer"
            className="border border-[#444] text-gray-400 font-mono text-sm uppercase tracking-widest px-8 py-4 hover:border-[#666] hover:text-gray-200 transition-all flex items-center gap-3"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Footer Grid */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#333] pt-12 mt-20">
          <div>
            <p className="font-mono text-xs uppercase mb-4 text-gray-500 tracking-widest">Socials</p>
            <div className="flex flex-col gap-2 font-bold text-lg">
              <a
                href="https://www.linkedin.com/in/kushagra-ameta-668b81247/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition-opacity flex items-center gap-2"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/KushagraAmeta05"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition-opacity flex items-center gap-2"
              >
                Github <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase mb-4 text-gray-500 tracking-widest">Contact</p>
            <a
              href="mailto:kushagraameta500@gmail.com"
              className="font-bold text-lg hover:underline block"
            >
              kushagraameta500@gmail.com
            </a>
            <a
              href="tel:+917849941898"
              className="font-mono text-sm text-gray-400 hover:text-white transition-colors block mt-2"
            >
              +91 7849941898
            </a>
          </div>
          <div className="md:text-right flex flex-col justify-end">
            <p className="font-mono text-xs text-gray-600">
              © 2025 KUSHAGRA AMETA <br /> DESIGNED & DEVELOPED
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Contact;
