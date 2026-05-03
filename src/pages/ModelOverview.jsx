// src/pages/ModelOverview.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Database, Cpu, Activity, ShieldCheck } from "lucide-react";

export default function ModelOverview() {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accentCyan/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accentOrange/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 pt-16 lg:pt-24 pb-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-center">
          Model <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">Overview</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 text-center max-w-3xl mx-auto mb-16">
          AegisGAN employs a hybrid deep learning approach combined with advanced generative adversarial networks to provide state-of-the-art intrusion detection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Base Model */}
          <div className="bg-cardDeep border border-white/10 p-5 sm:p-8 rounded-2xl shadow-lg hover:border-accentCyan/30 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accentCyan/10 rounded-lg text-accentCyan">
                <Cpu size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Base Model Architecture</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Our core detection engine utilizes a hybrid approach combining <strong className="text-accentCyan">XGBoost</strong> and <strong className="text-accentCyan">CNN-LSTM</strong> networks. The XGBoost algorithm handles structured feature selection and rapid classification, while the CNN-LSTM captures deep sequential patterns and temporal dependencies in network traffic flows, ensuring high accuracy in identifying complex threats.
            </p>
          </div>

          {/* Generative Model */}
          <div className="bg-cardDeep border border-white/10 p-5 sm:p-8 rounded-2xl shadow-lg hover:border-accentOrange/30 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accentOrange/10 rounded-lg text-accentOrange">
                <Activity size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">WCGAN-GP for Data Generation</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To address class imbalance and zero-day threat variants, AegisGAN uses a <strong className="text-accentOrange">Wasserstein Conditional GAN with Gradient Penalty (WCGAN-GP)</strong>. This generates highly realistic synthetic attack data, drastically improving the model's robustness and generalization without suffering from mode collapse during training.
            </p>
          </div>
        </div>

        {/* Datasets */}
        <div className="bg-cardDeep border border-white/10 p-5 sm:p-8 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
              <Database size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Training Datasets</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
            The model was comprehensively trained and validated using industry-standard benchmark datasets to ensure robust real-world performance:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">UNSW-NB15</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                A comprehensive dataset featuring a hybrid of real modern normal activities and contemporary synthesized attack behaviors, used to validate temporal feature extraction.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">NSL-KDD</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                A refined dataset that solves some inherent problems of the original KDD cup. It ensures our model maintains robust baseline detection capabilities across standard attack vectors.
              </p>
            </div>
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-cardDeep border border-white/10 p-5 sm:p-8 rounded-2xl shadow-lg mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
              <ShieldCheck size={28} className="sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">System Pipeline & Modules</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
            AegisGAN bridges low-level packet monitoring with high-level analytics through a real-time streaming pipeline composed of five key modules:
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">1. Traffic Capture</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Deployed in a Linux (WSL2) environment, this module uses Zeek in promiscuous mode to perform deep packet inspection, generating structured JSON logs (conn.log, http.log, dns.log) for processing.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">2. Bridge & Stream</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                A custom socket bridge continuously tails Zeek logs, parses JSON entries, and streams them over TCP to the analysis engine, minimizing latency and isolating workloads.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">3. Feature Engineering</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The Feature Builder transforms raw network flows into the UNSW-NB15 feature format, computing derived metrics such as source load (sload) and destination load (dload) for model input.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">4. Detection Engine</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Applies a sliding window (size 30) for temporal context, utilizing a weighted ensemble of XGBoost and deep learning models hardened by WGAN-GP to improve robustness against evolving threats.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">5. SOC Dashboard</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                A React-based web interface connecting via WebSockets (FastAPI backend) to provide real-time alerts, live traffic insights, and visualizations for rapid security monitoring.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}