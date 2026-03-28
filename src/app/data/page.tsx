"use client";

import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Data() {
  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      {/* Market / Hero Section */}
      <SectionWrapper className="bg-black/20 min-h-[800px] flex items-center">
        <div className="flex flex-col items-center text-center w-full">
           <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] mb-12 italic animate-pulse">Neural Node Infrastructure</h2>
           <h1 className="text-8xl md:text-[12rem] font-black text-white tracking-[-0.06em] uppercase italic leading-[0.8] mb-12 mix-blend-plus-lighter drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              $114B <span className="text-4xl md:text-6xl text-white/20 not-italic block md:inline mt-4 md:mt-0 tracking-[0.5em]">MARKET</span>
           </h1>
           <p className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed mb-20 tracking-tight">
              Memory Marbles sits at the global epicenter of gaming engagement and clinical data integrity. We are building the sovereign layer for human cognitive tracking.
           </p>
           
           <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_150px_rgba(0,243,255,0.1)] group">
              <Image src="/images/data.jpg" alt="Visualization" fill className="object-cover opacity-90 transition-transform duration-[3000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-16 left-16 text-left">
                 <div className="text-cyan-400 font-black text-[11px] tracking-[0.4em] uppercase mb-3 italic">Data Integrity v1.0.42</div>
                 <div className="text-white text-4xl font-black tracking-tighter uppercase italic">Neural Network Node Mapping</div>
              </div>
           </div>
        </div>
      </SectionWrapper>

      {/* Metrics Grid */}
      <SectionWrapper className="border-t border-white/[0.03]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            <div className="space-y-16">
               <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">Institutional <br/> <span className="text-purple-500">Integrity.</span></h2>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: 'Network Latency', value: '<5ms', color: 'cyan' },
                    { label: 'Data Points', value: '42M/day', color: 'purple' },
                    { label: 'System Uptime', value: '99.99%', color: 'white' },
                    { label: 'Oracle Nodes', value: '12', color: 'pink' }
                  ].map((stat, i) => (
                    <GlowCard key={i} color={stat.color as any} className="p-10 text-center bg-white/[0.01]">
                       <div className="text-[10px] text-white/30 font-black tracking-[0.4em] uppercase mb-4 italic">{stat.label}</div>
                       <div className="text-4xl font-black text-white tracking-tighter italic">{stat.value}</div>
                    </GlowCard>
                  ))}
               </div>
               
               <p className="text-xl text-white/30 leading-relaxed font-light italic">
                  Every micro-gesture is captured. Every latency is measured. We providing clinical-grade neural fidelity from the palm of your hand.
               </p>
            </div>
            
            <div className="relative h-full min-h-[500px]">
               <GlowCard color="purple" className="h-full p-20 bg-blue-950/[0.05] relative z-10 border-white/[0.05]">
                  <div className="text-white font-black text-2xl mb-12 uppercase tracking-tight italic">Market Projections (2024-2030)</div>
                  
                  {/* Production Chart Design */}
                  <div className="h-80 border-l border-b border-white/10 flex items-end gap-5 p-8 relative">
                     {[35, 50, 45, 65, 90, 100].map((h, i) => (
                       <motion.div 
                         key={i} 
                         initial={{ height: 0 }} 
                         whileInView={{ height: `${h}%` }}
                         transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                         className="flex-1 bg-gradient-to-t from-cyan-400 via-purple-600 to-pink-500 rounded-t-md shadow-[0_0_30px_rgba(147,51,234,0.3)] relative group/bar" 
                       >
                         <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                       </motion.div>
                     ))}
                     <svg className="absolute inset-0 w-full h-full stroke-white/5 opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,85 Q20,65 40,75 T80,35 T100,0" fill="none" strokeWidth="1" />
                     </svg>
                  </div>
                  
                  <div className="mt-16 flex justify-between items-center">
                     <span className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase hover:text-white transition-colors cursor-pointer italic underline">Institutional Audit v4.1</span>
                     <NeonButton color="white" className="scale-90 bg-white text-black">Inquire Early Access</NeonButton>
                  </div>
               </GlowCard>
               {/* Background Glow */}
               <div className="absolute inset-x-[-20%] bottom-[-20%] top-1/2 bg-purple-500/10 blur-[150px] pointer-events-none animate-pulse-glow" />
            </div>
         </div>
      </SectionWrapper>

    </div>
  );
}
