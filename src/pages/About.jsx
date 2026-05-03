// src/pages/About.jsx
import Header from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Header />
      <div className="pt-32 px-8 lg:px-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">About</h1>
        <p className="text-xl text-slate-400 mb-12">AegisGAN – AI-powered intrusion detection system.</p>
        
        <div className="bg-cardDeep border border-white/10 rounded-2xl p-8 shadow-xl text-left">
          <p className="text-slate-300 leading-relaxed text-lg">
            AegisGAN represents the next generation of intrusion detection, combining the sequential learning capabilities of LSTM networks, the spatial feature extraction of CNNs, and the adversarial robustness of GANs. Our mission is to secure networks against unpredictable, zero-day threats through continuous, autonomous learning.
          </p>
        </div>
      </div>
    </div>
  );
}
