// src/components/FAQ.jsx
import { useState } from "react";

export default function FAQ() {
  const faqData = [
    {
      q: "What is AegisGAN?",
      a: "AegisGAN is an AI-driven intrusion detection system that uses Generative Adversarial Networks to identify abnormal system behavior, detect unknown malware, and prevent zero-day attacks."
    },
    {
      q: "How does AegisGAN detect zero-day attacks?",
      a: "Instead of using signatures, AegisGAN models normal system operations and flags any suspicious deviation as a potential threat — making it highly effective against newly created malware."
    },
    {
      q: "Can AegisGAN work with real-time system logs?",
      a: "Yes. AegisGAN continuously analyzes live logs, network flow, and behavioral metrics to detect attacks instantly, with minimal overhead."
    },
    {
      q: "Does AegisGAN replace traditional antivirus systems?",
      a: "AegisGAN does not replace traditional antivirus; it enhances security by detecting unknown and behavior-based threats that signature-based antivirus cannot recognize."
    },
    {
      q: "How is AegisGAN trained on threat datasets?",
      a: "It is trained on both normal and malicious behavioral samples. The GAN learns to distinguish real patterns from anomalies, improving detection capability over time."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-bgDeep py-20 px-8 lg:px-64 text-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">Questions</span>
        </h2>
        <p className="text-slate-400">Everything you need to know about our detection models.</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto relative z-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-cardDeep border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-accentCyan/30 hover:bg-white/5 cursor-pointer ${
              openIndex === index ? "ring-1 ring-accentCyan/50 shadow-lg shadow-accentCyan/10" : ""
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold text-slate-200">{item.q}</h3>
              <span className={`text-2xl text-accentCyan transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                +
              </span>
            </div>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-slate-400 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
