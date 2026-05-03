// src/pages/Contact.jsx
import Header from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-bgDeep text-white font-sans flex flex-col">
      <Header />
      <div className="flex-1 pt-12 sm:pt-24 lg:pt-32 px-4 sm:px-8 lg:px-20 max-w-md mx-auto text-center w-full flex flex-col justify-center pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">Contact</h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-8 sm:mb-12">
          Reach us at{" "}
          <a href="mailto:support@aegisgan.com" className="text-accentCyan hover:underline">
            support@aegisgan.com
          </a>
        </p>
        
        <form className="bg-cardDeep border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl flex flex-col gap-4 text-left">
          <input type="text" placeholder="Your Name" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-accentCyan transition-colors" />
          <input type="email" placeholder="Your Email" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-accentCyan transition-colors" />
          <textarea placeholder="Your Message" rows="4" className="bg-bgDeep border border-white/20 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-accentCyan transition-colors resize-none"></textarea>
          <button type="button" className="bg-gradient-to-r from-accentCyan to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accentCyan/20 transition-all text-sm sm:text-base">Send Message</button>
        </form>
      </div>
    </div>
  );
}

