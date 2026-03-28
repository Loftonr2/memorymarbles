"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';
import { NeuralSymbiosisModal } from '@/components/NeuralSymbiosisModal';
import { ClinicalStudiesModal } from '@/components/ClinicalStudiesModal';
import { NeuralBrainDataModal } from '@/components/NeuralBrainDataModal';
import Image from 'next/image';

export default function Clinical() {
  const [isSymbiosisOpen, setIsSymbiosisOpen] = useState(false);
  const [isStudiesOpen, setIsStudiesOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      {/* Hero / Clinical Banner */}
      <SectionWrapper className="min-h-[700px] relative overflow-hidden flex items-center">
         <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none scale-110">
            <Image src="/images/clinical.jpg" alt="Clinical Banner" fill className="object-cover transition-transform duration-[4000ms] group-hover:scale-105" />
         </div>
         <div className="max-w-5xl relative z-10 space-y-12">
            <h2 className="text-purple-400 font-black tracking-[0.5em] uppercase text-[10px] italic underline underline-offset-8">Research Data & Protocol</h2>
            <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.8] mix-blend-plus-lighter drop-shadow-[0_0_50px_rgba(147,51,234,0.3)]">
              Clinical <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500">Validation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl italic tracking-tight">
              We providing clinical-grade neural fidelity through high-granularity 3D interaction. Memory Marbles is the bridge between user engagement and scientific integrity.
            </p>
         </div>
         <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-cyan-500/10 to-transparent blur-[150px] pointer-events-none animate-pulse-glow" />
      </SectionWrapper>

      {/* Inquiry Form & Resources */}
      <SectionWrapper className="bg-black/40 border-y border-white/[0.03]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            
            {/* Form Side */}
            <div className="space-y-16">
               <h2 className="text-5xl md:text-[6rem] font-black text-white uppercase italic tracking-tighter leading-[0.9]">Request <br/> <span className="text-cyan-400">Clinical Data</span> Access</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <input type="text" placeholder="Full Name" className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest" />
                     <input type="email" placeholder="Professional Email" className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest" />
                  </div>
                  <input type="text" placeholder="Institution / Research Practice" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest" />
                  <textarea placeholder="Outline your technical requirements..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white h-48 focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest resize-none" />
                  <NeonButton color="gradient" className="w-full !py-7 !text-2xl shadow-[0_30px_60px_-15px_rgba(147,51,234,0.3)]">Submit Inquiry</NeonButton>
               </form>
            </div>

            {/* Resources Side */}
            <div className="space-y-16">
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'Neural Symbiosis', desc: 'The bridge between the brain and the human being. Tap for deep-dive.', icon: '🧠', action: () => setIsSymbiosisOpen(true) },
                    { title: 'Clinical Studies', desc: 'Clinical evidence for memory improvement & medical applications.', icon: '📖', action: () => setIsStudiesOpen(true) },
                    { title: 'Neural Brain Data', desc: 'How game data creates a functional snapshot of the human brain.', icon: '🛡️', action: () => setIsDataOpen(true) }
                  ].map((res, i) => (
                    <GlowCard 
                      key={i} 
                      color="cyan" 
                      className="p-10 flex items-center gap-10 bg-white/[0.01] hover:bg-white/[0.03] cursor-pointer group shadow-[0_0_50px_rgba(0,243,255,0.05)] border-white/[0.05]"
                      onClick={res.action}
                    >
                       <div className="text-5xl group-hover:scale-110 transition-transform">{res.icon}</div>
                       <div>
                          <h4 className="text-white font-black text-xl italic uppercase tracking-tighter mb-2">{res.title}</h4>
                          <p className="text-white/30 text-xs font-bold uppercase tracking-widest leading-relaxed">{res.desc}</p>
                       </div>
                       <div className="ml-auto text-[10px] font-black text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em]">Analysis +</div>
                    </GlowCard>
                  ))}
               </div>
               <div className="pt-8 flex justify-between items-center px-4">
                  <span className="text-white/10 text-[9px] font-black tracking-[0.6em] uppercase italic">Architecture v1.0.4.2</span>
                  <span className="text-cyan-400 font-black tracking-[0.4em] uppercase text-[10px] italic border-b border-cyan-400 pb-1 cursor-pointer hover:text-white hover:border-white transition-all">Institutional API Hub →</span>
               </div>
            </div>

         </div>
      </SectionWrapper>

      <NeuralSymbiosisModal 
        isOpen={isSymbiosisOpen} 
        onClose={() => setIsSymbiosisOpen(false)} 
      />

      <ClinicalStudiesModal 
        isOpen={isStudiesOpen} 
        onClose={() => setIsStudiesOpen(false)} 
      />

      <NeuralBrainDataModal 
        isOpen={isDataOpen} 
        onClose={() => setIsDataOpen(false)} 
      />
    </div>
  );
}
