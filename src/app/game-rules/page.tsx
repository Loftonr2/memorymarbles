"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';
import { RulebookModal } from '@/components/RulebookModal';
import { PhaseModal } from '@/components/PhaseModal';
import { motion } from 'framer-motion';
import Image from 'next/image';

const phases = [
  { 
    name: 'DROP', 
    subtitle: 'Neural physics engine initializes state', 
    d: 'Neural physics engine initializes state',
    body: 'DROP is the beginning of the sequence. Marbles enter the jar and the game engine establishes the visual field the player must study. This phase creates the physical arrangement that becomes the foundation of memory, attention, and later decision-making.',
    icon: '💧', 
    color: 'cyan' 
  },
  { 
    name: 'ENCODE', 
    subtitle: 'Optical processing & pattern memorization',
    d: 'Optical processing & pattern memorization', 
    body: 'ENCODE is the observation phase. The player studies marble positions, colors, numbers, and spacing while the brain begins converting visual information into short-term memory. This stage trains pattern recognition, focus, and rapid information capture.',
    icon: '👁️', 
    color: 'purple' 
  },
  { 
    name: 'REVEAL', 
    subtitle: 'Network pattern decryption protocol',
    d: 'Network pattern decryption protocol', 
    body: 'REVEAL transitions the player from passive viewing to active interpretation. The visible pattern begins to shift from a simple image into a cognitive challenge, forcing the mind to organize what was seen into something retrievable and usable.',
    icon: '✨', 
    color: 'pink' 
  },
  { 
    name: 'RECALL', 
    subtitle: 'Cognitive re-activation across nodes',
    d: 'Cognitive re-activation across nodes', 
    body: 'RECALL is the internal reconstruction phase. The player must mentally reactivate the stored pattern and hold it under pressure. This stage strengthens memory retention, concentration, and the ability to recover information without direct visual support.',
    icon: '🧠', 
    color: 'white' 
  },
  { 
    name: 'SELECT', 
    subtitle: 'Final data verification & decision',
    d: 'Final data verification & decision', 
    body: 'SELECT is the execution phase. The player applies memory in real time by choosing the correct marbles in the correct order. This final stage tests accuracy, confidence, speed, and decision-making under cognitive pressure.',
    icon: '🎯', 
    color: 'cyan' 
  }
];

export default function GameRules() {
  const [isRulebookOpen, setIsRulebookOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<typeof phases[0] | null>(null);

  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      {/* Mastery Section */}
      <SectionWrapper className="min-h-screen flex flex-col items-center justify-center">
         <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative z-10">
            {/* Left Content */}
            <div className="flex-1 space-y-10 text-center lg:text-left relative z-20 order-2 lg:order-1">
               <div className="space-y-4">
                  <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[11px] italic underline underline-offset-8 inline-block">Cognitive Mastery Protocol</h2>
                  <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.8] mix-blend-plus-lighter drop-shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                    Gaming <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-600">Rules</span>
                  </h1>
               </div>
               <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-tight italic">
                 Memory Marbles is engineered to isolate five distinct neural processing zones. Master the procedural sequence to lock your baseline integrity.
               </p>
               <div className="pt-8">
                  <NeonButton 
                    color="gradient" 
                    className="min-w-[280px] !py-6 !text-xl !rounded-2xl shadow-[0_30px_60px_-15px_rgba(147,51,234,0.4)]"
                    onClick={() => setIsRulebookOpen(true)}
                  >
                    Rule Book
                  </NeonButton>
               </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 relative z-20 group">
               <div className="relative w-full max-w-[520px] transition-transform duration-1000 group-hover:scale-[1.05]">
                  <Image 
                    src="/images/game-rules-phone.png" 
                    alt="Gaming Rules Gameplay" 
                    width={520}
                    height={800}
                    className="object-contain drop-shadow-[0_0_40px_rgba(120,80,255,0.3)]" 
                    priority
                  />
               </div>
               {/* Orbital Glow */}
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
            </div>
         </div>
         
         {/* Background Halo */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-white/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      </SectionWrapper>

      {/* 5 Phases Procedural Grid */}
      <SectionWrapper className="border-t border-white/[0.03]">
         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full relative group">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block z-0 pointer-events-none" />
            
            {phases.map((phase, i) => (
              <GlowCard 
                key={i} 
                color={phase.color as any} 
                className="p-10 flex flex-col items-center justify-between min-h-[380px] bg-white/[0.02] relative z-10 group/item hover:scale-[1.08] hover:z-20 transition-all duration-700 shadow-[0_0_60px_rgba(0,243,255,0.05)] border-white/[0.05] cursor-pointer hover:bg-white/[0.05]"
                onClick={() => setSelectedPhase(phase)}
              >
                 <div className="text-6xl mb-8 group-hover/item:scale-110 transition-transform filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">{phase.icon}</div>
                 <div className="space-y-4">
                    <div className="text-white font-black text-5xl italic tracking-tighter opacity-40 group-hover/item:opacity-100 transition-opacity">{i + 1}</div>
                    <div className="font-black text-white tracking-[0.3em] text-sm italic uppercase">{phase.name}</div>
                 </div>
                 <p className="text-[10px] text-white/70 font-bold mt-10 tracking-[0.1em] leading-relaxed uppercase italic max-w-[120px]">{phase.d}</p>
                 <div className="mt-8 w-12 h-0.5 bg-white/30 group-hover/item:bg-cyan-500 transition-all group-hover/item:shadow-[0_0_10px_rgba(0,243,255,1)]" />
                 
                 {/* Click Hint */}
                 <div className="absolute top-4 right-4 text-[8px] font-black text-white/10 group-hover/item:text-cyan-400 uppercase tracking-widest transition-colors">Details +</div>
              </GlowCard>
            ))}
         </div>

      </SectionWrapper>


       <RulebookModal 
         isOpen={isRulebookOpen} 
         onClose={() => setIsRulebookOpen(false)} 
       />

       <PhaseModal 
         isOpen={!!selectedPhase}
         onClose={() => setSelectedPhase(null)}
         phase={selectedPhase}
       />
    </div>
  );
}
