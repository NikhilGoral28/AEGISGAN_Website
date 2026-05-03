// src/pages/Industries.jsx
import Header from "../components/Navbar";

export default function Industries() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Header />
      <div className="pt-32 px-8 lg:px-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-accentOrangeLight">Industries</h1>
        <p className="text-xl text-slate-400">Industries protected by AegisGAN.</p>
        
        {/* Placeholder for content */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-12 text-center text-slate-500 border-dashed">
          Industry-specific protection plans coming soon...
        </div>
      </div>
    </div>
  );
}
