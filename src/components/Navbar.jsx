// src/components/Navbar.jsx

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">

      {/* Brand */}
      <Link to="/" className="cursor-pointer">
        <h2 className="font-black text-2xl text-white tracking-wide hover:opacity-80 transition-opacity">
          Aegis<span className="text-accentCyan">GAN</span>
        </h2>
      </Link>

      {/* LINKS */}
      <div className="flex gap-4 md:gap-6 items-center">

        {/* DOWNLOAD PACKAGE */}
        <a
          href="https://drive.google.com/file/d/10TFkJKwHjRRT_wBd0fH0fY9WjdIWvl3O/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-accentCyan/10 border border-accentCyan/30 text-accentCyan rounded-lg text-sm font-semibold hover:bg-accentCyan/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          <span className="hidden md:inline">Download Package</span>
        </a>

        <Link
          to="/documentation"
          className="text-slate-300 font-medium text-sm hover:text-accentCyan transition-colors"
        >
          Documentation
        </Link>

      </div>
    </nav>
  );
}

