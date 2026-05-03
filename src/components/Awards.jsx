// src/components/Awards.jsx
import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";

export default function Awards() {
  const awards = [
    { img: award1, title: "Best AI Security Innovation – 2024" },
    { img: award2, title: "Top Zero-Day Detection System" },
    { img: award3, title: "Excellence in Threat Intelligence" },
  ];

  return (
    <section className="bg-bgDeep py-24 px-8 lg:px-20 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgDeepGradient opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black mb-16 tracking-tight">
          Recognized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentOrange">Excellence</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 lg:gap-20 flex-wrap">
          {awards.map((a, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-accentCyan/20 w-64"
            >
              <div className="mb-6 p-4 rounded-full bg-gradient-to-b from-white/10 to-transparent">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-center font-medium text-slate-300 group-hover:text-white transition-colors">
                {a.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
