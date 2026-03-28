"use client";

import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Support() {
  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      {/* Hero Section - Mission Driven */}
      <SectionWrapper className="min-h-[600px] !py-12 md:!py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none scale-110">
           <Image src="/images/fundraising.jpg" alt="Mission" fill className="object-cover blur-3xl" />
        </div>
        
        <div className="flex flex-col items-center text-center space-y-12 relative z-10 pt-10">
          <div className="space-y-6">
            <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] italic animate-pulse">Neural Sovereignty Mission</h2>
            <h1 className="text-7xl md:text-[11rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.85] mix-blend-plus-lighter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              Support <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">The Core.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed tracking-tight italic">
              We are scaling clinical cognitive infrastructure. Your support directly accelerates our phase-2 human preservation trials.
            </p>
          </div>

          <div className="w-full max-w-5xl relative">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16">
               <NeonButton color="pink" className="min-w-[260px] !text-2xl !py-8 !rounded-3xl shadow-[0_25px_50px_-10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_80px_rgba(236,72,153,0.6)]">Indiegogo</NeonButton>
               <NeonButton color="purple" className="min-w-[260px] !text-2xl !py-8 !rounded-3xl shadow-[0_25px_50px_-10px_rgba(147,51,234,0.3)] hover:shadow-[0_0_80px_rgba(147,51,234,0.6)]">GoFundMe</NeonButton>
            </div>

            {/* Central Progress Ecosystem */}
            <div className="relative flex justify-center py-16 mt-6">
               <div className="absolute inset-x-[-20%] inset-y-0 flex justify-center items-center opacity-30">
                  <div className="w-full h-full bg-cyan-500/5 blur-[150px] rounded-full animate-pulse-glow" />
               </div>
               
               <GlowCard color="cyan" className="w-full max-w-lg p-16 bg-black/60 relative z-10 border-white/[0.05] shadow-[0_0_120px_rgba(0,243,255,0.1)]">
                  <div className="flex justify-between items-end mb-10">
                     <div className="text-left">
                        <span className="text-6xl font-black text-white tracking-[-0.05em]">$254,000</span>
                        <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.4em] mt-3 italic">Pledged Capital to Date</p>
                     </div>
                     <div className="text-right pb-1">
                        <span className="text-sm font-black text-white/40 tracking-[0.3em] uppercase italic">$375K GOAL</span>
                     </div>
                  </div>
                  
                  <div className="w-full h-6 bg-white/[0.02] rounded-full overflow-hidden p-1 border border-white/5 relative">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '67%' }}
                       transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                       className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-white to-purple-600 shadow-[0_0_40px_rgba(0,243,255,1)] relative"
                     >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                     </motion.div>
                  </div>
                  
                  <div className="mt-16">
                     <NeonButton color="white" className="w-full !py-7 !text-3xl bg-white text-black font-black italic">
                        Initialize Donation
                     </NeonButton>
                  </div>
               </GlowCard>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Institutional Support Section */}
      <SectionWrapper className="bg-black/40 border-t border-white/[0.03] !py-12 md:!py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-8">
               <h2 className="text-5xl md:text-[8rem] font-black text-white uppercase italic tracking-[-0.04em] leading-[0.85] mix-blend-plus-lighter">Equity <br/> <span className="text-purple-500">Pool.</span></h2>
               <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg italic">
                  For institutional investors and clinical nodes, we offer equity-based partnerships and data-syndication models for global market scaling.
               </p>
               <Link href="/contact">
                  <NeonButton color="white" className="scale-90 bg-white/5 border-white/10 uppercase tracking-[0.4em] text-[10px] font-black">Request Investor Deck</NeonButton>
               </Link>
            </div>
            <div className="flex justify-center">
               <GlowCard color="purple" className="p-16 w-full max-w-sm text-center bg-white/[0.01] border-white/5 shadow-[0_0_80px_rgba(147,51,234,0.08)]">
                  <div className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase mb-6 italic">Audit Phase 1.0</div>
                  <div className="text-5xl font-black text-white mb-4 italic tracking-tighter">COMPLETE</div>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-4">10,000 Nodes Established</p>
                  <div className="mt-8 pt-6 border-t border-white/[0.03]">
                     <span className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[9px] italic">Memory Marbles Institutional Hub</span>
                  </div>
               </GlowCard>
            </div>
         </div>
      </SectionWrapper>

    </div>
  );
}
