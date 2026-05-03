// src/pages/About.jsx
import Header from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans">
      <Header />
      <div className="pt-32 px-8 lg:px-20 max-w-md mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">Contact</h1>
        <p className="text-xl text-slate-400 mb-12">Reach us at <a href="mailto:support@aegisgan.com" className="text-accentCyan hover:underline">support@aegisgan.com</a></p>
        
        <form className="bg-cardDeep border border-white/10 rounded-2xl p-8 shadow-xl flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accentCyan transition-colors" />
          <input type="email" placeholder="Your Email" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accentCyan transition-colors" />
          <textarea placeholder="Your Message" rows="4" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-accentCyan transition-colors resize-none"></textarea>
          <button type="button" className="bg-gradient-to-r from-accentCyan to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accentCyan/20 transition-all">Send Message</button>
        </form>
      </div>
    </div>
  );
}
