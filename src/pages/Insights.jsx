import Navbar from "../components/Navbar";

export default function Insights() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Navbar />

      <div className="pt-32 px-6 lg:px-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-blue-400">
          Insights
        </h1>

        <p className="text-lg md:text-xl text-slate-400">
          AI security research, GAN trends & threat intelligence reports.
        </p>

        {/* Content Placeholder */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-12 text-slate-500 border-dashed">
          <p className="text-sm tracking-wide">
            New insights coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}