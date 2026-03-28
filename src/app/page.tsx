"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';
import { DeviceMockup } from '@/components/DeviceMockup';
import { TactileModal } from '@/components/TactileModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isTactileModalOpen, setIsTactileModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#010410]">
      
      {/* 1. HERO (PRODUCTION POLISH) */}
      <section className="relative h-screen min-h-[900px] w-full flex items-center justify-center overflow-hidden">
        {/* HD Hero Image background with layered gradients */}
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/data.jpg" 
             alt="Memory Marbles Brain Infrastructure" 
             fill
             className="object-cover opacity-60 scale-105"
             priority
           />
           {/* Layered production-grade gradients for contrast */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#010410] via-transparent to-[#010410]" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#010410]/60 via-transparent to-[#010410]/60" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#010410_100%)] opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="inline-block px-6 py-2 rounded-full border border-cyan-400/40 bg-cyan-900/10 backdrop-blur-3xl text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-[0_0_30px_rgba(0,243,255,0.1)]"
           >
             The Neural Gaming System
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="text-7xl md:text-9xl lg:text-[11rem] font-black text-white tracking-[-0.05em] leading-[0.85] uppercase italic text-glow-white mb-10"
           >
             Train<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 filter drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]">Your Brain</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.4 }}
             className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed mb-16 tracking-tight"
           >
             A cinematic clinical-grade infrastructure designed to map, track, and preserve your cognitive baseline through high-fidelity neural session gameplay.
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-8"
           >
             <Link href="/download">
               <NeonButton color="gradient" className="min-w-[280px]">Download Protocol</NeonButton>
             </Link>
             <Link href="/support">
               <NeonButton color="white" className="min-w-[280px] bg-white/5 border-white/10">Project Mission</NeonButton>
             </Link>
           </motion.div>
        </div>
        
        {/* Floor Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/4 bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 blur-[200px] rounded-full animate-pulse-glow" />
      </section>

      {/* 2. COGNITIVE IQ SECTION */}
      <SectionWrapper className="relative overflow-hidden bg-[#010410]">
         {/* Background Layer (Debug Mode: High Visibility) */}
         <div className="absolute inset-0 z-0">
            <Image 
              src="/images/mission-brain.png" 
              alt="Neural Mission Background" 
              fill 
              className="object-cover opacity-90 brightness-[0.8] scale-105"
              priority
            />
            {/* Lighter Overlay for Verification */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#010410]/80 via-transparent to-[#010410]/80 z-10" />
            
            {/* Subtle Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen z-10" />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px]">Cognitive Mastery v1.0</span>
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase italic text-glow-white">
                     Total <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Accuracy.</span>
                  </h2>
               </div>
               <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg">
                  Memory Marbles isn't just a training tool; it's a diagnostic-ready infrastructure that captures thousands of data points to map your neural baseline with clinical-grade granularity.
               </p>
               <div className="grid grid-cols-1 gap-6">
                  {['Real-time pattern recognition', 'Neural fatigue tracking', 'Interactive session metrics'].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 text-white/80 font-bold group hover:translate-x-2 transition-transform">
                       <div className="w-8 h-px bg-cyan-500 group-hover:w-16 transition-all" /> 
                       <span className="uppercase tracking-[0.2em] text-xs italic">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <GlowCard color="purple" className="p-16 relative overflow-hidden group/card shadow-[0_0_120px_rgba(147,51,234,0.12)] backdrop-blur-3xl bg-blue-900/10 border-blue-400/20">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
               <p className="text-3xl md:text-4xl text-white leading-[1.1] font-black uppercase italic text-center drop-shadow-2xl relative z-10">
                 "Our mission is to provide actionable data from interactive gameplay improving memory."
               </p>
               <div className="mt-12 flex justify-center gap-4 relative z-10">
                  <div className="w-16 h-px bg-white/10" />
                  <div className="w-2 h-2 rounded-full border border-purple-400/40 animate-pulse" />
                  <div className="w-16 h-px bg-white/10" />
               </div>
               {/* Inner Glow Fix */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 blur-[60px] rounded-full" />
            </GlowCard>
         </div>
      </SectionWrapper>

      {/* 3. DATA ANCHOR SECTION */}
      <SectionWrapper className="bg-black/40 border-y border-white/[0.03]">
         <div className="flex flex-col items-center text-center mb-16 relative">
            <h3 className="text-cyan-400 font-black tracking-[0.6em] uppercase text-[11px] mb-8 animate-pulse">Global Infrastructure Scaling</h3>
            <h2 className="text-8xl md:text-[14rem] font-black text-white tracking-[-0.05em] drop-shadow-[0_0_50px_rgba(255,255,255,0.4)] leading-none italic uppercase mix-blend-plus-lighter">
               $114B
            </h2>
            <p className="text-white/40 font-black tracking-[0.5em] uppercase text-xs mt-6 italic">Projected Digital Health Market CAP</p>
            {/* Background Halo */}
            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-125 pointer-events-none" />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { label: 'Projected Growth', value: '+18.4%', desc: 'Annual scaling in cognitive tech infrastructure' },
              { label: 'Clinical Accuracy', value: '99.4%', desc: 'Proprietary node-based data collection protocol' },
              { label: 'Network Nodes', value: '1,250+', desc: 'Active neural data validator nodes worldwide' }
            ].map((stat, i) => (
              <GlowCard key={i} className="p-10 text-center bg-white/[0.01] hover:bg-white/[0.03]">
                 <div className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase mb-4 italic">{stat.label}</div>
                 <div className="text-5xl font-black text-white mb-6 tracking-tighter italic">{stat.value}</div>
                 <div className="text-[10px] text-white/40 leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest font-bold">{stat.desc}</div>
              </GlowCard>
            ))}
         </div>

         {/* Data Visualization Plate */}
         <div className="mt-16 relative w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,243,255,0.08)] group">
            <Image src="/images/data.jpg" alt="Data Dashboard" fill className="object-cover opacity-90 transition-transform duration-[2000ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
               <div className="space-y-4">
                  <div className="text-cyan-400 font-black tracking-[0.4em] text-[10px] uppercase italic text-glow-cyan">Neural Cloud Integration v2.1</div>
                  <div className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Institutional Market Visualization</div>
               </div>
               <Link href="/data">
                 <NeonButton color="white" className="min-w-[220px] bg-white text-black font-black">View Deck</NeonButton>
               </Link>
            </div>
         </div>
      </SectionWrapper>

      {/* 4. DESIGN / EXPERIENCE */}
      <SectionWrapper>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,243,255,0.1)] group border border-white/10">
               <Image src="/images/app-screen.jpg" alt="Memory Marbles in Practice" width={1200} height={1600} className="object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/10 mix-blend-overlay" />
            </div>
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase italic underline decoration-cyan-400 decoration-4 underline-offset-8">
                     Clinical <br/> <span className="text-glow-purple">Physics.</span>
                  </h2>
               </div>
               <p className="text-xl text-white/50 font-light leading-relaxed">
                  Every interaction is engineered for maximum data fidelity. The tactile response of 3D glass physics ensures engagement while providing billions of precise neural data points.
               </p>
               <GlowCard 
                 color="cyan" 
                 className="p-10 bg-cyan-950/[0.05] border-cyan-400/20 cursor-pointer hover:bg-cyan-900/10 transition-colors group/tactile"
                 onClick={() => setIsTactileModalOpen(true)}
               >
                  <div className="flex gap-10 items-center">
                     <div className="w-20 h-20 rounded-[2rem] bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-5xl group-hover/tactile:scale-110 transition-transform duration-500">📱</div>
                     <div>
                        <div className="text-white font-black text-2xl mb-1 italic uppercase tracking-tighter group-hover/tactile:text-cyan-400 transition-colors">Tactile Engine</div>
                        <p className="text-white/30 text-xs font-bold uppercase tracking-widest">High-Latency Micro-Gesture Capture</p>
                     </div>
                  </div>
               </GlowCard>
            </div>
         </div>
      </SectionWrapper>

      {/* 5. APP DOWNLOAD */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[#010410]">
         <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-10 order-2 md:order-1">
               <h2 className="text-7xl md:text-[10rem] font-black text-white tracking-[-0.05em] leading-[0.8] uppercase italic">Deploy <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Global.</span></h2>
               <p className="text-2xl text-white/30 font-light max-w-md leading-relaxed uppercase tracking-tight italic">
                  Join the high-performance network. Start your baseline protocol today.
               </p>
               <div className="flex flex-wrap gap-8 pt-8">
                 <button className="flex items-center gap-6 bg-white/[0.03] border border-white/10 rounded-3xl px-10 py-5 hover:bg-white/[0.08] hover:border-cyan-400 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group">
                    <div className="text-white text-4xl group-hover:scale-110 transition-transform"></div>
                    <div className="text-left">
                       <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Standard iOS</div>
                       <div className="text-xl font-black text-white tracking-tight uppercase italic">App Store</div>
                    </div>
                 </button>
                 <button className="flex items-center gap-6 bg-white/[0.03] border border-white/10 rounded-3xl px-10 py-5 hover:bg-white/[0.08] hover:border-purple-400 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group">
                    <div className="text-white text-4xl group-hover:scale-110 transition-transform">G</div>
                    <div className="text-left">
                       <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Universal Android</div>
                       <div className="text-xl font-black text-white tracking-tight uppercase italic">Google Play</div>
                    </div>
                 </button>
               </div>
            </div>
            
            <div className="flex-1 flex justify-center order-1 md:order-2">
               <DeviceMockup className="animate-float">
                  <Image src="/images/download.jpg" alt="App UI" fill className="object-cover" />
               </DeviceMockup>
            </div>
         </div>
      </SectionWrapper>

      {/* 6. FUNDRAISING PROGRESS */}
      <SectionWrapper className="bg-[#050B1B]/40 relative overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none scale-125">
            <Image src="/images/fundraising.jpg" alt="Atmosphere" fill className="object-cover blur-2xl" />
         </div>
         
         <div className="flex flex-col items-center text-center space-y-8 relative z-10">
            <div className="space-y-4">
               <span className="text-purple-400 font-black tracking-[0.5em] uppercase text-[10px]">Project Equity Protocol</span>
               <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none italic uppercase">
                  Seed <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Acceleration.</span>
               </h2>
            </div>
            
            <div className="w-full max-w-3xl space-y-8">
               <div className="flex justify-between items-end px-8">
                  <div className="text-left">
                     <span className="text-6xl font-black text-white tracking-[-0.05em]">$254,000</span>
                     <p className="text-[11px] text-white/30 uppercase font-black tracking-[0.4em] mt-2 italic">Total Pledged Capital</p>
                  </div>
                  <div className="text-right pb-2">
                     <span className="text-lg font-black text-white/50 tracking-widest italic uppercase">$375K PHASE II GOAL</span>
                  </div>
               </div>
               
               <div className="w-full h-8 bg-white/[0.03] rounded-full p-1.5 border border-white/5 shadow-inner relative group">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '67%' }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-white to-purple-600 shadow-[0_0_40px_rgba(0,243,255,0.6)] relative"
                  >
                     <div className="absolute inset-0 bg-white/20 animate-pulse-glow rounded-full" />
                  </motion.div>
                  {/* Phase Marker */}
                  <div className="absolute left-[80%] top-[-40px] text-[10px] font-black text-white/40 uppercase tracking-[0.5em] border-l border-white/20 pl-4 h-20" />
               </div>
               
               <div className="flex flex-col sm:flex-row justify-center gap-10">
                  <NeonButton color="cyan" className="min-w-[240px] !text-xl !py-7 !rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,243,255,0.3)]">Indiegogo</NeonButton>
                  <NeonButton color="purple" className="min-w-[240px] !text-xl !py-7 !rounded-3xl shadow-[0_20px_40px_-10px_rgba(147,51,234,0.3)]">GoFundMe</NeonButton>
               </div>
            </div>
         </div>
      </SectionWrapper>

      {/* 7. CLINICAL FOOTER SECTION */}
      <SectionWrapper dark className="border-t border-white/5 relative bg-[#010410]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <span className="text-cyan-400 font-black tracking-[0.4em] uppercase text-[10px]">Clinical Research v2.4</span>
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] italic uppercase">
                     Human <br/> <span className="text-glow-cyan">Centric.</span>
                  </h2>
               </div>
               <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg">
                  Memory Marbles bridges the gap between digital interaction and clinical validity. Our engagement-first philosophy ensures higher data fidelity and long-term user participation.
               </p>
               <Link href="/clinical">
                  <button className="text-white/80 font-black tracking-[0.4em] uppercase text-xs border-b-2 border-cyan-400 pb-3 hover:text-white hover:border-white transition-all italic">Explore Institutional Studies →</button>
               </Link>
            </div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(147,51,234,0.08)] bg-blue-950/20 p-3 border border-white/10 group">
               <Image src="/images/clinical.jpg" alt="Clinical Environment" width={1000} height={1200} className="object-cover rounded-[3rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#010410] via-transparent to-transparent opacity-60" />
            </div>
         </div>
      </SectionWrapper>

      <TactileModal 
        isOpen={isTactileModalOpen} 
        onClose={() => setIsTactileModalOpen(false)} 
      />
    </div>
  );
}
