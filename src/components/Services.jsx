// src/components/Services.jsx
import { useState, useMemo } from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import {
  Cloud,
  ShieldAlert,
  GitMerge,
  Database,
  CheckCircle2,
  Server,
  Globe2,
  ActivitySquare,
  AlertTriangle
} from "lucide-react";

export default function Services() {
  const [active, setActive] = useState("deployment");

  const tabs = useMemo(() => ([
    {
      id: "deployment",
      title: "Hybrid Deployment",
      shortTitle: "Deployment",
      icon: <Cloud className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#0b1220] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-accentCyan/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Cloud className="text-accentCyan w-5 h-5" /> Cloud Log-Based
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">Network logs are collected from cloud environments (AWS/Azure) and streamed into AegisGAN for centralized monitoring of distributed infrastructure.</p>
            </div>
            <div className="bg-[#0b1220] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-accentOrange/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Server className="text-accentOrange w-5 h-5" /> LAN Network
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">Deployed within a local area network with Zeek sensors at key points to detect internal threats, lateral movement, and unauthorized access in real-time.</p>
            </div>
            <div className="bg-[#0b1220] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Database className="text-green-400 w-5 h-5" /> Batch Processing
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">Processes stored datasets (PCAP/CSV) in batch mode for academic research, forensic analysis, and model benchmarking where real-time is not required.</p>
            </div>
          </div>
        </div>
      )
    },

    {
      id: "detection",
      title: "Real-Time Detection",
      shortTitle: "Detection",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 bg-[#0b1220] border border-accentOrange/30 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">High-Performance Ensemble Engine</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our core Detection Engine applies a sliding window (size 30) to incorporate deep temporal context into raw network flows. By utilizing a weighted ensemble of an XGBoost classifier and advanced deep learning models, AegisGAN achieves robust detection against zero-day and evolving threats. 
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-accentOrange block text-2xl font-black mb-1">42ms</strong>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Avg Latency</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-accentOrange block text-2xl font-black mb-1">85ms</strong>
                <span className="text-xs text-slate-500 uppercase tracking-wider">99th Percentile</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-accentOrange block text-2xl font-black mb-1">10k+</strong>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Flows/Sec</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <strong className="text-accentOrange block text-2xl font-black mb-1">WGAN-GP</strong>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Hardened</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: "classification",
      title: "Intelligent Classification",
      shortTitle: "Classification",
      icon: <GitMerge className="w-5 h-5" />,
      content: (
        <div className="bg-[#0b1220] border border-accentCyan/30 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">Precision Threat Categorization</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            AegisGAN classifies live traffic into normal, known attack, or anomalous categories using a 10x10 multidimensional analysis approach. Thanks to our GAN-based data augmentation addressing critical class imbalance, the system successfully boosted Recall from 0.62 to 0.81 for Analysis attacks, and from 0.45 to 0.78 for rare Backdoor attacks.
          </p>
          <div className="flex flex-wrap gap-4">
             <span className="px-4 py-2 bg-accentCyan/10 text-accentCyan border border-accentCyan/20 rounded-full text-sm font-semibold">96.42% Accuracy</span>
             <span className="px-4 py-2 bg-accentCyan/10 text-accentCyan border border-accentCyan/20 rounded-full text-sm font-semibold">95.8% Precision</span>
             <span className="px-4 py-2 bg-accentCyan/10 text-accentCyan border border-accentCyan/20 rounded-full text-sm font-semibold">96.1% Recall</span>
          </div>
        </div>
      )
    },

    {
      id: "datasets",
      title: "Data & Augmentation",
      shortTitle: "Datasets",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="bg-[#0b1220] border border-white/10 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">WGAN-GP Data Augmentation</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            To combat the inherent data imbalance found in traditional ML models, AegisGAN employs a Conditional Wasserstein GAN (WGAN-GP). The Generator uses a 64-dimensional noise vector to output realistic 15-dimensional synthetic network flows, while the Critic enforces a 1-Lipschitz constraint via Gradient Penalty. This allows the system to continuously adapt and close the loop on emerging threats with minimal manual intervention.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
             <p className="text-sm text-slate-300">
               <strong>Evaluation Benchmark:</strong> Validated against a stratified 20% test split of the rigorous UNSW-NB15 dataset, proving superiority over baselines trained on purely imbalanced data.
             </p>
          </div>
        </div>
      )
    }
  ]), []);

  const activeTab = tabs.find(t => t.id === active) || tabs[0];

  return (
    <section className="bg-[#020617] py-32 px-6 lg:px-16 text-center relative min-h-screen border-t border-white/5">

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-xs font-mono text-slate-500 uppercase mb-4">
          Enterprise Arsenal
        </h2>

        <h1 className="text-4xl md:text-6xl font-black mb-16 text-white">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">Capabilities</span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-16 border-b border-white/10 pb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                active === tab.id
                  ? "bg-white text-[#0b1220]"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.title}</span>
              <span className="sm:hidden">{tab.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-cardDeep border border-white/10 rounded-3xl p-8 lg:p-12 text-left relative overflow-hidden shadow-2xl">

          <div className="relative z-10 animate-in fade-in duration-300">

            <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
              {activeTab.icon}
              {activeTab.title}
            </h2>

            {activeTab.content}

          </div>
        </div>
      </div>
    </section>
  );
}