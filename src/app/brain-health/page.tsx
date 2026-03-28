"use client";

import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HumanBaselineModal } from '@/components/HumanBaselineModal';

export default function BrainHealth() {
  const [isBaselineModalOpen, setIsBaselineModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      {/* Hero Section - Humans + Tech */}
      <SectionWrapper className="min-h-[700px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-10">
            <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] italic">Institutional Cognitive Care</h2>
            <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase italic leading-[0.85]">
              Neural <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Symbiosis.</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-lg">
              We believe technology is only as powerful as the impact it has on real lives. Memory Marbles is an intuitive bridge between complex neural data and the person behind the screen.
            </p>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(147,51,234,0.15)] bg-blue-950/20 p-3 border border-white/10 group">
            <Image src="/images/clinical.jpg" alt="Practice" width={1000} height={1200} className="object-cover rounded-[3.5rem] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </SectionWrapper>

      {/* Stats / HUD Section */}
      <SectionWrapper className="bg-black/40 border-y border-white/[0.03]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
             <GlowCard color="cyan" className="p-16 bg-blue-950/20 border-cyan-400/20">
                <div className="text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10 italic">Real-Time Neural HUD v4.0</div>
                <div className="text-8xl font-black text-white mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] tracking-[-0.05em] italic">85<span className="text-2xl text-white/30 not-italic ml-4 uppercase tracking-[0.5em]">AQ</span></div>
                
                <div className="space-y-10">
                  {[
                    { label: "Memory Retention", color: "bg-pink-500", value: 82 },
                    { label: "Focus Stability", color: "bg-purple-500", value: 79 },
                    { label: "Spatial Awareness", color: "bg-cyan-500", value: 89 },
                    { label: "Neural Fatigue", color: "bg-yellow-400", value: 60 }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between text-[11px] text-white/40 font-black uppercase tracking-[0.4em] italic">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.value}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-white/[0.03] rounded-full overflow-hidden p-0.5 border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full ${stat.color} rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
             </GlowCard>
          </div>
          <div className="order-1 lg:order-2 space-y-12">
             <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">Your Brain <br/> in <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,243,255,0.4)]">High Def.</span></h2>
             <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg">
               Our proprietary Accuracy Quotient (AQ) is calculated using billions of data points collected during high-fidelity 3D sessions, providing the most granular cognitive baseline in digital health.
             </p>
             <div className="pt-8 flex gap-8">
               <div className="flex flex-col">
                  <span className="text-white font-black text-3xl uppercase italic tracking-tighter">1.2ms</span>
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Data Jitter</span>
               </div>
               <div className="w-px h-12 bg-white/10" />
               <div className="flex flex-col">
                  <span className="text-white font-black text-3xl uppercase italic tracking-tighter">4.8M</span>
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Daily Nodes</span>
               </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom Quote / Final CTA */}
      <SectionWrapper className="text-center bg-gradient-to-b from-transparent to-[#010410]">
         <GlowCard 
           color="white" 
           className="p-24 bg-white/[0.01] border-white/5 cursor-pointer hover:bg-white/[0.03] hover:scale-[1.01] transition-all group"
           onClick={() => setIsBaselineModalOpen(true)}
         >
            <h3 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-10 leading-[0.9]">
               Preserving the <br/> <span className="text-cyan-400 group-hover:drop-shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">Human Baseline.</span>
            </h3>
            <p className="text-white/30 max-w-2xl mx-auto font-light leading-relaxed mb-16 uppercase tracking-tight text-lg group-hover:text-white/50 transition-all">
               Transforming complex neurological data into an intuitive, high-end experience that users actually trust.
            </p>
            <div className="flex justify-center gap-10">
               <div className="w-20 h-px bg-white/10 self-center" />
               <span className="text-white/40 font-black tracking-[0.6em] uppercase text-[10px] italic group-hover:text-cyan-400 transition-all">Analysis +</span>
               <div className="w-20 h-px bg-white/10 self-center" />
            </div>
         </GlowCard>
      </SectionWrapper>

      <HumanBaselineModal 
        isOpen={isBaselineModalOpen} 
        onClose={() => setIsBaselineModalOpen(false)} 
      />

    </div>
  );
}
