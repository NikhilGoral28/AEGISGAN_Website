// src/pages/Insights.jsx
import Navbar from "../components/Navbar";

export default function Insights() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans flex flex-col">
      <Navbar />

      <div className="flex-1 pt-12 sm:pt-24 lg:pt-32 px-4 sm:px-8 lg:px-20 max-w-5xl mx-auto text-center w-full flex flex-col justify-center pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-blue-400">
          Insights
        </h1>

        <p className="text-base sm:text-xl text-slate-400 mb-8">
          AI security research, GAN trends & threat intelligence reports.
        </p>

        {/* Content Placeholder */}
        <div className="mt-8 sm:mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-12 text-slate-500 border-dashed">
          <p className="text-sm tracking-wide">
            New insights coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}