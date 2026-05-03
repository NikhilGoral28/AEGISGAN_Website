// src/components/Stats.jsx
import React from "react";

export default function Stats() {
  const stats = {
    total_files: 150,
    total_analyzed: 500000,
    overall_attack_percentage: 14,
    avg_model_confidence: 0.99,
    threats_neutralized: 25000
  };

  const displayStats = [
    { id: "accuracy", number: "96.4%", label: "Detection Accuracy" },
    { id: "latency", number: "42ms", label: "Average Latency" },
    { id: "throughput", number: "10k+", label: "Flows/sec Processed" },
    { id: "realtime", number: "Active", label: "Threat Monitoring" },
  ];

  return (
    <section className="bg-bgDeep py-12 px-4 sm:px-8 lg:px-20 border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accentOrange/5 via-transparent to-accentCyan/5 pointer-events-none" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10 max-w-7xl mx-auto">
        {displayStats.map((s) => (
          <div
            key={s.id}
            className="bg-cardDeep border border-white/10 rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 hover:shadow-accentOrange/10 group flex flex-col justify-center items-center h-full"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-accentOrange to-accentOrangeLight group-hover:scale-105 transition-transform">
              {s.number || "0"}
            </h2>
            <p className="text-slate-400 font-medium text-xs sm:text-sm tracking-wide uppercase">
              {s.label || ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}