// src/pages/Documentation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Cpu, ShieldAlert, ArrowRight, Code, Server, Database, Network, Download } from "lucide-react";
import { BACKEND_PREDICTION_TEMPLATE } from "../data/dummyTemplate";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { id: "overview", label: "Product Overview", icon: BookOpen },
    { id: "architecture", label: "System Architecture", icon: Cpu },
    { id: "api", label: "Backend Integration", icon: Code },
    { id: "requirements", label: "Deploy Requirements", icon: Server },
    { id: "installation", label: "Installation Guide", icon: Download },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans flex">

      {/* LEFT SIDEBAR - Quick Nav */}
      <aside className="w-72 hidden lg:flex flex-col border-r border-white/10 bg-[#0f172a]/50 p-8 h-screen sticky top-0 overflow-y-auto pt-24 backdrop-blur-xl">
        <h2 className="text-xl font-bold text-white mb-8 tracking-tight">Doc Center</h2>
        <nav className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === item.id
                  ? 'bg-accentCyan/10 text-accentCyan border border-accentCyan/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <Link to="/" className="flex items-center gap-2 text-sm text-accentOrange hover:text-accentOrangeLight transition-colors">
            Return to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* RIGHT CONTENT - Documentation */}
      <main className="flex-1 max-w-5xl mx-auto px-6 lg:px-16 py-24 pb-32">
        <header className="mb-16">
          <h1 className="text-5xl font-black text-white tracking-tight mb-4">AegisGAN Developer Guide</h1>
          <p className="text-xl text-slate-400">Deep integration manuals, system architectures, and deployment contracts for the Enterprise NIDS.</p>
        </header>

        {/* SECTION: OVERVIEW */}
        <section id="overview" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Product Overview</h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-lg">
            <p className="mb-6 leading-relaxed">
              <strong>AegisGAN</strong> is a comprehensive, real-time Network Intrusion Detection System (NIDS) designed to tackle the rapid expansion of digital networks and sophisticated cyber threats like DDoS, brute-force, and zero-day attacks. Modern systems struggle with performance, data imbalance, and intuitive visualization. AegisGAN solves this by integrating advanced deep learning with Generative Adversarial Networks (GANs).
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> The GAN Advantage
              </h4>
              <p className="text-sm">
                A key innovation of AegisGAN lies in its use of a Conditional Wasserstein GAN (WGAN-GP) to generate realistic and previously unseen attack samples. This synthetic data augments the training dataset, effectively addressing class imbalance and enabling dynamic, closed-loop model retraining with minimal manual intervention.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: ARCHITECTURE */}
        <section id="architecture" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">System Architecture</h2>

          <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-8 shadow-2xl relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-accentCyan via-accentOrange to-green-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-6 relative z-10">
              {/* Layer 1 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-cardDeep border border-accentCyan/30 w-full md:w-2/3 p-6 rounded-xl shadow-lg relative group hover:border-accentCyan transition-colors">
                  <div className="absolute -left-3 top-1/2 w-6 h-6 bg-accentCyan rounded-full transform -translate-y-1/2 hidden md:block shadow-[0_0_15px_#00d1ff]"></div>
                  <h3 className="text-xl font-bold text-accentCyan mb-2">1. Traffic Capture (Zeek)</h3>
                  <p className="text-sm text-slate-400 mb-2">Deployed in a Linux (WSL2) environment.</p>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
                    <li>Promiscuous mode network monitoring</li>
                    <li>Deep packet inspection</li>
                    <li>Outputs structured JSON logs (conn.log, etc.)</li>
                  </ul>
                </div>
              </div>

              {/* Arrow Mobile */}
              <div className="flex justify-center md:hidden text-slate-500">
                <ArrowRight className="w-6 h-6 transform rotate-90" />
              </div>

              {/* Layer 2 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-cardDeep border border-blue-400/30 w-full md:w-2/3 p-6 rounded-xl shadow-lg relative group hover:border-blue-400 transition-colors">
                  <div className="absolute -left-3 top-1/2 w-6 h-6 bg-blue-400 rounded-full transform -translate-y-1/2 hidden md:block shadow-[0_0_15px_#60a5fa]"></div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">2. Bridge & Stream</h3>
                  <p className="text-sm text-slate-400 mb-2">Custom socket bridge for real-time streaming.</p>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
                    <li>Continuously tails Zeek JSON logs</li>
                    <li>Streams over TCP connection</li>
                    <li>Isolates heavy capture workloads</li>
                  </ul>
                </div>
              </div>

              {/* Arrow Mobile */}
              <div className="flex justify-center md:hidden text-slate-500">
                <ArrowRight className="w-6 h-6 transform rotate-90" />
              </div>

              {/* Layer 3 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-cardDeep border border-purple-500/30 w-full md:w-2/3 p-6 rounded-xl shadow-lg relative group hover:border-purple-500 transition-colors">
                  <div className="absolute -left-3 top-1/2 w-6 h-6 bg-purple-500 rounded-full transform -translate-y-1/2 hidden md:block shadow-[0_0_15px_#a855f7]"></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">3. Feature Engineering</h3>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
                    <li>Transforms raw flows to UNSW-NB15 format</li>
                    <li>Computes derived metrics (sload, dload)</li>
                    <li>Prepares statistical features for input</li>
                  </ul>
                </div>
              </div>

              {/* Arrow Mobile */}
              <div className="flex justify-center md:hidden text-slate-500">
                <ArrowRight className="w-6 h-6 transform rotate-90" />
              </div>

              {/* Layer 4 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-cardDeep border border-accentOrange/30 w-full md:w-2/3 p-6 rounded-xl shadow-lg relative group hover:border-accentOrange transition-colors">
                  <div className="absolute -left-3 top-1/2 w-6 h-6 bg-accentOrange rounded-full transform -translate-y-1/2 hidden md:block shadow-[0_0_15px_#f97316]"></div>
                  <h3 className="text-xl font-bold text-accentOrange mb-2">4. Detection Engine</h3>
                  <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-accentOrange mt-3 border border-accentOrange/20">
                    <div className="mb-2">Sliding Window <span className="text-slate-500 text-xs ml-2">(Size 30)</span></div>
                    <div className="text-slate-500 ml-4">↓</div>
                    <div className="mb-2">Hybrid Ensemble <span className="text-slate-500 text-xs ml-2">(XGBoost + DL)</span></div>
                    <div className="text-slate-500 ml-4">↓</div>
                    <div className="mb-2">WGAN-GP Hardening <span className="text-slate-500 text-xs ml-2">(Data Augmentation)</span></div>
                    <div className="mt-4 pt-4 border-t border-accentOrange/20 text-white">
                      Output: Normal, Known Attack, or Anomalous
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Mobile */}
              <div className="flex justify-center md:hidden text-slate-500">
                <ArrowRight className="w-6 h-6 transform rotate-90" />
              </div>

              {/* Layer 5 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="bg-cardDeep border border-green-500/30 w-full md:w-2/3 p-6 rounded-xl shadow-lg relative group hover:border-green-500 transition-colors">
                  <div className="absolute -left-3 top-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-y-1/2 hidden md:block shadow-[0_0_15px_#22c55e]"></div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">5. SOC Dashboard</h3>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-5">
                    <li>React-based interface connected via WebSockets</li>
                    <li>Live traffic insights & Real-time alerts</li>
                    <li>Rapid security monitoring and visualization</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: API SCHEMA */}
        <section id="api" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Backend Integration</h2>
          <p className="text-slate-300 text-lg mb-8">
            The frontend reacts dynamically to whatever payload your backend model spits out. Standardize your Python API to emit the following exact JSON Schema, and the React UI will instantly construct the Dashboards.
          </p>

          <div className="bg-[#0b1220] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">application/json</span>
              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Expected Contract</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-slate-300">
                <code dangerouslySetInnerHTML={{ __html: JSON.stringify(BACKEND_PREDICTION_TEMPLATE, null, 2) }} />
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION: REQUIREMENTS */}
        <section id="requirements" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Deploy Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#0b1220] border border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Software Requirements</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><strong className="text-accentCyan">OS:</strong> Windows 10/11 with WSL2 (Ubuntu 20.04/22.04)</li>
                <li><strong className="text-accentCyan">Languages:</strong> Python 3.9+ (Backend), JS/ES6 (Frontend)</li>
                <li><strong className="text-accentCyan">ML Frameworks:</strong> TensorFlow 2.10+, Scikit-learn, XGBoost</li>
                <li><strong className="text-accentCyan">Backend:</strong> FastAPI, Uvicorn, WebSockets</li>
                <li><strong className="text-accentCyan">Frontend:</strong> React 18, Vite, Tailwind CSS, Recharts</li>
                <li><strong className="text-accentCyan">Network Monitor:</strong> Zeek (Bro) 5.0+</li>
                <li><strong className="text-accentCyan">Dev Tools:</strong> VS Code, Git, Node.js/npm</li>
              </ul>
            </div>
            
            <div className="bg-[#0b1220] border border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Hardware Requirements</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><strong className="text-accentOrange">Processor:</strong> Intel Core i7 / AMD Ryzen 7 (8 cores recommended)</li>
                <li><strong className="text-accentOrange">RAM:</strong> 16GB Minimum (32GB recommended for large-scale)</li>
                <li><strong className="text-accentOrange">Storage:</strong> 512GB SSD (Fast I/O for log tailing)</li>
                <li><strong className="text-accentOrange">Network:</strong> 1Gbps Ethernet Adapter (Promiscuous Mode)</li>
                <li><strong className="text-accentOrange">GPU:</strong> NVIDIA RTX Series (Optional, for offline WGAN training)</li>
              </ul>
            </div>
          </div>

        </section>

        {/* SECTION: INSTALLATION GUIDE */}
        <section id="installation" className="mb-24 scroll-mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-white/10 pb-4 gap-4">
            <h2 className="text-3xl font-bold text-white">AegisGAN Native Linux Deployment Guide</h2>
            <a href="/installer-docs.pdf" download>
              <button className="flex items-center gap-2 px-4 py-2 bg-accentCyan/10 border border-accentCyan/30 text-accentCyan rounded-lg text-sm font-semibold hover:bg-accentCyan/20 transition-all">
                <Download className="w-4 h-4" />
                Download Guide PDF
              </button>
            </a>
          </div>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            This guide contains all the commands you need to package the AegisGAN platform from your current machine and deploy it as a persistent, automatically-running background service on any other Linux machine.
          </p>

          <div className="space-y-8 text-slate-300">
            {/* Phase 1 */}
            <div className="bg-[#0b1220] border border-white/10 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:border-accentCyan/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-accentCyan"></div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 1: Package the App (On your current Windows machine)</h3>
              <p className="text-sm mb-4 leading-relaxed text-slate-400">
                Before you can move the app to a Linux server, you need to compress the entire project directory into a ZIP file. Open PowerShell and navigate to the folder containing the project, then run:
              </p>
              <pre className="bg-black/60 p-4 rounded-lg text-accentCyan font-mono text-sm overflow-x-auto border border-white/5">
                <code>
{`# Compress the AegisGAN_live folder into a zip file
Compress-Archive -Path e:\\AegisGAN_live -DestinationPath e:\\AegisGAN_live.zip`}
                </code>
              </pre>
              <p className="text-xs text-slate-500 mt-3 italic">
                (Alternatively, you can just right-click the AegisGAN_live folder in File Explorer and select "Compress to ZIP file".)
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#0b1220] border border-white/10 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:border-accentOrange/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-accentOrange"></div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 2: Transfer the App to the Linux Server</h3>
              <p className="text-sm mb-4 leading-relaxed text-slate-400">
                You need to send the AegisGAN_live.zip file to your Linux machine. You can use a tool like WinSCP, FileZilla, or the scp command in PowerShell.
              </p>
              <pre className="bg-black/60 p-4 rounded-lg text-accentOrange font-mono text-sm overflow-x-auto border border-white/5">
                <code>
{`# Example SCP command (Replace 'user' and '192.168.1.100' with your Linux details)
scp e:\\AegisGAN_live.zip user@192.168.1.100:~`}
                </code>
              </pre>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#0b1220] border border-white/10 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:border-purple-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 3: Install the App (On the target Linux machine)</h3>
              <p className="text-sm mb-4 leading-relaxed text-slate-400">
                Log into your Linux machine via SSH. The following commands will unzip the project and run the automated installer. The installer will automatically install Zeek, Python, Node.js, and configure the background system services.
              </p>
              <pre className="bg-black/60 p-4 rounded-lg text-purple-400 font-mono text-sm overflow-x-auto border border-white/5">
                <code>
{`# 1. Update package lists (Recommended before installing things)
sudo apt update

# 2. Install 'unzip' in case the Linux server doesn't have it
sudo apt install unzip -y

# 3. Unzip the project folder you transferred
unzip AegisGAN_live.zip

# 4. Navigate into the unzipped project folder
cd AegisGAN_live

# 5. Make the automated installation script executable
chmod +x installer/install.sh

# 6. Run the installer as root
sudo ./installer/install.sh`}
                </code>
              </pre>
              <p className="text-xs text-slate-500 mt-3 italic">
                *Note:* The installation might take a few minutes as it downloads dependencies and builds the React frontend.
              </p>
            </div>
            
            {/* Phase 4 */}
            <div className="bg-[#0b1220] border border-white/10 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:border-green-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
              <h3 className="text-xl font-bold text-white mb-3">Phase 4: Verify and Manage Services</h3>
              <p className="text-sm mb-4 leading-relaxed text-slate-400">
                Once the installation script finishes, AegisGAN is officially running in the background! It is managed by systemctl, meaning it will automatically start itself even if the server reboots. Here are the commands you can use to check the status or restart the system:
              </p>
              <pre className="bg-black/60 p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-white/5 mb-4">
                <code>
{`# Check the status of the FastAPI ML Backend
sudo systemctl status aegisgan-backend

# Check the status of the React Frontend
sudo systemctl status aegisgan-frontend

# Check the status of the Zeek Log Streaming Bridge
sudo systemctl status aegisgan-bridge

# Check the status of the Database Microservice
sudo systemctl status aegisgan-db`}
                </code>
              </pre>
              <p className="text-sm mb-2 text-slate-400">If you ever need to restart the entire platform:</p>
              <pre className="bg-black/60 p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-white/5 mb-4">
                <code>
{`sudo systemctl restart aegisgan-backend aegisgan-frontend aegisgan-bridge aegisgan-db`}
                </code>
              </pre>
              <p className="text-sm mb-2 text-slate-400">If you want to view the live terminal output/logs of the background ML backend:</p>
              <pre className="bg-black/60 p-4 rounded-lg text-green-400 font-mono text-sm overflow-x-auto border border-white/5">
                <code>
{`sudo journalctl -fu aegisgan-backend`}
                </code>
              </pre>
            </div>

            {/* Phase 5 */}
            <div className="bg-blue-500/10 border border-blue-500/30 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center">
              <div className="p-4 bg-blue-500/20 rounded-full shrink-0">
                <Network className="w-10 h-10 text-blue-400" />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-black text-white mb-2">Phase 5: Access the Dashboard</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The system is now sniffing network traffic in real-time and running inference! To view the live SOC Dashboard, open a web browser on any machine on the same network and navigate to the Linux server's IP address on port 5173.
                </p>
                <div className="bg-black/50 p-4 rounded-lg border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <code className="text-blue-400 font-mono text-lg">http://&lt;LINUX_SERVER_IP&gt;:5173</code>
                  <span className="text-sm text-slate-500 font-mono bg-white/5 px-3 py-1 rounded">Example: http://192.168.1.100:5173</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
