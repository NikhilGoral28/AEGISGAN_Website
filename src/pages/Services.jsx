// src/pages/Services.jsx
import Header from "../components/Navbar";
import { Shield, Cpu, Activity, Database, Cloud, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Real-Time Threat Detection",
      description:
        "AI-powered monitoring system that detects anomalies in network traffic within milliseconds.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
    },
    {
      title: "GAN-Based Attack Simulation",
      description:
        "Generative Adversarial Networks simulate advanced cyberattacks to strengthen defensive models.",
      icon: <Zap className="w-8 h-8 text-accentOrange" />,
    },
    {
      title: "Deep Learning IDS Engine",
      description:
        "Hybrid CNN-LSTM architecture for identifying complex intrusion patterns in real time.",
      icon: <Cpu className="w-8 h-8 text-accentCyan" />,
    },
    {
      title: "Big Data Security Analytics",
      description:
        "Process and analyze large-scale network datasets for behavioral threat intelligence.",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: "Cloud Security Integration",
      description:
        "Secure VPC-based deployment with full cloud telemetry and event tracking.",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Live Anomaly Monitoring",
      description:
        "Continuous real-time visualization of threats, scores, and system behavior trends.",
      icon: <Activity className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Header />

      <div className="pt-32 px-6 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-blue-400">
            Services
          </h1>
          <p className="text-slate-400 text-lg">
            Our GAN-powered cybersecurity and AI threat intelligence services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}