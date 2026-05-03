// src/components/HeroCard.jsx
import React from 'react'

export default function HeroCard({title, value}){
  return (
    <div className="bg-cardDeep border border-white/10 rounded-xl p-5 flex items-center gap-4 transition-all hover:bg-white/5 hover:border-white/20 hover:shadow-lg shadow-black/50">
      <div className="flex items-center justify-center w-12 h-12 bg-accentCyan/10 text-accentCyan rounded-full shrink-0" aria-hidden>
        <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none">
          <path d="M3 12h18M12 3v18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{title}</div>
        <div className="text-xl font-bold text-white tracking-tight">{value}</div>
      </div>
    </div>
  )
}
