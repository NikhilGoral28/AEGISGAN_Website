// src/pages/Industries.jsx
import Header from "../components/Navbar";

export default function Industries() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans flex flex-col">
      <Header />
      <div className="flex-1 pt-12 sm:pt-24 lg:pt-32 px-4 sm:px-8 lg:px-20 max-w-4xl mx-auto text-center w-full flex flex-col justify-center pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-accentOrangeLight">Industries</h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-8">Industries protected by AegisGAN.</p>
        
        {/* Placeholder for content */}
        <div className="mt-8 sm:mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-12 text-center text-slate-500 border-dashed">
          Industry-specific protection plans coming soon...
        </div>
      </div>
    </div>
  );
}

