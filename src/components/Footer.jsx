// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-bgDeep text-slate-300 px-8 lg:px-20 py-16 border-t border-white/10 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accentCyan/30 to-transparent" />
      
      <div className="flex flex-wrap justify-between gap-12 lg:gap-8 mb-16 max-w-7xl mx-auto">
        {/* BRAND */}
        <div className="w-full md:w-[30%] min-w-[200px]">
          <h2 className="font-black text-2xl text-white tracking-wide mb-4">
            Aegis<span className="text-accentCyan">GAN</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI-powered intrusion detection using GAN technology to secure
            systems against evolving cyber threats.
          </p>
        </div>

        {/* TECHNOLOGY */}
        <div className="w-full md:w-[30%] min-w-[200px]">
          <h3 className="text-white font-semibold text-lg mb-4">Technology</h3>
          <ul className="space-y-3">
            <li className="text-sm hover:text-accentCyan cursor-pointer transition-colors">GAN Engine</li>
            <li className="text-sm hover:text-accentCyan cursor-pointer transition-colors">Threat Modeling</li>
            <li className="text-sm hover:text-accentCyan cursor-pointer transition-colors">Real-time Intrusion Monitoring</li>
            <li className="text-sm hover:text-accentCyan cursor-pointer transition-colors">Behavioral Analysis</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="w-full md:w-[30%] min-w-[200px]">
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li className="text-sm">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentCyan transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-sm">
              <a
                href="https://github.com/NikhilGoral28/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accentCyan transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-white/10 pt-8 mt-8 text-sm text-slate-500 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2025 AegisGAN — All Rights Reserved.</span>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
        </div>
      </div>
    </footer>
  );
}

