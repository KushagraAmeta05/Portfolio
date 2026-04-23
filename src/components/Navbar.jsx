import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
      <Link to="/" className="font-bold text-xl tracking-tight uppercase">Code by Kushagra</Link>
      <div className="hidden md:flex gap-8 font-mono text-[9px] uppercase tracking-widest items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/experience" className="hover:underline">Experience</Link>
        <Link to="/work" className="hover:underline">Projects</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/achievements" className="hover:underline">Achievements</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/contact" className="font-bold border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">Let's talk</Link>
      </div>
    </nav>
  );
}