"use client";

import { SectionWrapper } from '@/components/SectionWrapper';
import { DeviceMockup } from '@/components/DeviceMockup';
import { NeonButton } from '@/components/NeonButton';
import { GlowCard } from '@/components/GlowCard';
import Image from 'next/image';

export default function Download() {
  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      <SectionWrapper className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center w-full">
          
          {/* Left Content */}
          <div className="space-y-16 order-2 lg:order-1">
            <div className="space-y-8">
              <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] italic">Institutional Availability</h2>
              <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.8] mix-blend-plus-lighter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                Download <br/> Play <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Train</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-lg tracking-tight italic">
                Measure accuracy, verify recall, and track neural fatigue in real-time. Join the sovereign cognitive network.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
               <button className="flex items-center gap-8 bg-white/[0.03] border border-white/10 rounded-3xl px-12 py-6 hover:bg-white/[0.08] hover:border-cyan-400 transition-all shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group">
                  <div className="text-white text-5xl group-hover:scale-110 transition-transform"></div>
                  <div className="text-left">
                     <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1 italic">Standard iOS</div>
                     <div className="text-2xl font-black text-white tracking-tighter uppercase italic">App Store</div>
                  </div>
               </button>
               <button className="flex items-center gap-8 bg-white/[0.03] border border-white/10 rounded-3xl px-12 py-6 hover:bg-white/[0.08] hover:border-purple-400 transition-all shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group">
                  <div className="text-white text-5xl group-hover:scale-110 transition-transform">G</div>
                  <div className="text-left">
                     <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1 italic">Universal Android</div>
                     <div className="text-2xl font-black text-white tracking-tighter uppercase italic">Google Play</div>
                  </div>
               </button>
            </div>
            
            <div className="pt-12 border-t border-white/[0.03]">
               <span className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase italic">System Compliance v4.1.0</span>
               <p className="text-white/40 text-xs mt-3 font-bold uppercase tracking-widest leading-relaxed">iOS 16.0+ | Android 12+ | Neural Engine Required</p>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="flex justify-center order-1 lg:order-2 mt-[160px] lg:mt-0">
            <DeviceMockup className="scale-[0.8] animate-float shadow-[0_0_150px_rgba(0,243,255,0.15)]">
               <Image src="/images/download.jpg" alt="Memory Marbles UI" fill className="object-cover" />
            </DeviceMockup>
          </div>

        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-black/40 border-t border-white/[0.03] !py-12 md:!py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-8">
               <h2 className="text-5xl md:text-[8rem] font-black text-white uppercase italic tracking-[-0.04em] leading-[0.85] mix-blend-plus-lighter">Technical <br/> <span className="text-cyan-400">Deployment.</span></h2>
               <p className="text-xl text-white/40 font-light leading-relaxed max-w-lg italic">
                  Initialize the cognitive network locally. Use the standardized codebase to build, test, and deploy personal training nodes on any clinical-grade infrastructure.
               </p>
            </div>
            <div className="flex justify-center">
               <GlowCard color="cyan" className="p-16 w-full max-w-sm bg-white/[0.01] border-white/5 shadow-[0_0_80px_rgba(0,243,255,0.08)]">
                  <div className="space-y-10">
                    <div className="p-8 bg-black/40 rounded-2xl border border-white/10 font-mono text-sm text-cyan-400">
                      <div className="text-white/20 uppercase text-[10px] font-black tracking-widest mb-4 italic underline underline-offset-4 decoration-cyan-400/30">Development Pulse</div>
                      npm run dev
                    </div>
                    <div className="p-8 bg-black/40 rounded-2xl border border-white/10 font-mono text-sm text-purple-400">
                      <div className="text-white/20 uppercase text-[10px] font-black tracking-widest mb-4 italic underline underline-offset-4 decoration-purple-400/30">Sovereign Build</div>
                      npm run build
                    </div>
                    <div className="p-8 bg-black/40 rounded-2xl border border-white/10 font-mono text-sm text-pink-500">
                      <div className="text-white/20 uppercase text-[10px] font-black tracking-widest mb-4 italic underline underline-offset-4 decoration-pink-500/30">Live Environment</div>
                      npm start
                    </div>
                  </div>
               </GlowCard>
            </div>
         </div>
      </SectionWrapper>
      
    </div>
  );
}
