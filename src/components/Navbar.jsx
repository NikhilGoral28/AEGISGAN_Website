// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Model Overview", to: "/model-overview" },
    { label: "Documentation", to: "/documentation" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <Link to="/" className="cursor-pointer">
          <h2 className="font-black text-xl sm:text-2xl text-white tracking-wide hover:opacity-80 transition-opacity">
            Aegis<span className="text-accentCyan">GAN</span>
          </h2>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-slate-300 font-medium text-sm hover:text-accentCyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* DOWNLOAD PACKAGE */}
          <a
            href="https://drive.google.com/file/d/10TFkJKwHjRRT_wBd0fH0fY9WjdIWvl3O/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-accentCyan/10 border border-accentCyan/30 text-accentCyan rounded-lg text-sm font-semibold hover:bg-accentCyan/20 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Package</span>
          </a>
        </div>

        {/* Tablet / Mobile Layout: Minimal Right Header Links */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://drive.google.com/file/d/10TFkJKwHjRRT_wBd0fH0fY9WjdIWvl3O/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accentCyan/10 border border-accentCyan/30 text-accentCyan rounded-lg text-xs font-semibold hover:bg-accentCyan/20 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Download</span>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden bg-[#0b1220] border-b border-white/10 px-4 py-4 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 font-medium text-sm hover:text-accentCyan transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}


