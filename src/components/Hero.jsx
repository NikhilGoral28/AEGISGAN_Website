// src/components/Hero.jsx
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-20 py-12 md:py-20 min-h-[90vh] relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accentCyan/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accentOrange/20 blur-[100px] rounded-full pointer-events-none" />

      {/* LEFT TEXT */}
      <div className="max-w-2xl z-10 text-center lg:text-left mb-12 lg:mb-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-black leading-tight tracking-tight text-white mb-6">
          Aegis<span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">GAN</span>
          <br className="hidden sm:inline" />
          Intelligent Intrusion
          <br className="hidden sm:inline" />
          Detection System
        </h1>

        <p className="text-base md:text-xl text-slate-300 font-medium opacity-90 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
          Protect organizations from cyber threats with advanced GAN-powered
          detection, intrusion response, and managed security services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mb-6">
          {/* LAUNCH PLATFORM */}
          <Link to="/documentation" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-accentOrange to-accentOrangeLight text-white rounded-xl text-base sm:text-lg font-bold shadow-lg shadow-accentOrange/30 transition-all duration-300 hover:shadow-accentOrange/50 hover:-translate-y-1 active:translate-y-0">
              Launch Platform
            </button>
          </Link>

          {/* MODEL OVERVIEW BUTTON */}
          <Link to="/model-overview" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/20 text-white rounded-xl text-base sm:text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:translate-y-0">
              Model Overview
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full max-w-xl lg:w-1/2 z-10 perspective-1000">
        <img
          src={heroImage}
          alt="Cybersecurity Hero"
          className="w-full rounded-2xl shadow-2xl shadow-accentCyan/10 border border-white/5 transform transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
}


