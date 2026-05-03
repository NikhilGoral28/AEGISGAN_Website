// src/components/Expectations.jsx
import hero2 from "../assets/hero2.png";

export default function Expectations() {
  const features = [
    {
      title: "Zero-Day Threat Detection",
      desc: "Detects unknown malware through behavioral anomaly analysis — no signatures needed."
    },
    {
      title: "GAN-Powered Behavior Modeling",
      desc: "Learns normal system patterns and identifies subtle malicious deviations."
    },
    {
      title: "Continuous Learning Engine",
      desc: "Adapts and improves automatically as new logs and threat data arrive."
    },
    {
      title: "Real-Time Intrusion Alerts",
      desc: "Instant notifications with detailed attack context and severity scoring."
    },
  ];

  return (
    <section className="bg-bgDeep py-24 px-8 lg:px-20 text-white relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accentOrange/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-20 relative z-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-accentOrangeLight">AegisGAN Exceeds</span> <br /> 
            Modern Cybersecurity Expectations
          </h1>

          <div className="text-lg text-slate-300 leading-relaxed font-medium space-y-6">
            <p className="text-xl text-white font-semibold border-l-4 border-accentOrange pl-4">
              Advanced AI that detects unknown threats — not just known signatures.
            </p>
            <p>
              Traditional antivirus systems rely on signatures and fail against
              zero-day attacks. AegisGAN uses generative models to analyze system
              behavior and detect malicious deviations instantly. It adapts
              continuously, defending your infrastructure from evolving threats.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="w-full lg:w-1/2 perspective-1000">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accentOrange to-accentCyan rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <img
              src={hero2}
              alt="Cybersecurity Illustration"
              className="relative w-full rounded-2xl shadow-xl shadow-accentOrange/10 border border-white/10 object-cover transform transition-transform duration-700 group-hover:rotate-1"
            />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((f, index) => (
          <div
            key={index}
            className="group bg-cardDeep border border-white/10 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-white/5 hover:border-accentOrange/30 hover:-translate-y-2 hover:shadow-accentOrange/20"
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentOrange to-accentOrangeLight mb-4 group-hover:scale-[1.02] transition-transform origin-left">
              {f.title}
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
