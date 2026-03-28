"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './GlowCard';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface TactileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TactileModal({ isOpen, onClose }: TactileModalProps) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#050B1B] to-[#010410] border border-white/10 shadow-[0_0_100px_rgba(0,243,255,0.15)] flex flex-col"
          >
            {/* Header */}
            <div className="px-10 py-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <div className="space-y-1">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">
                   Tactile <span className="text-cyan-400">Engine</span>
                </h2>
                <p className="text-xs font-bold text-white/30 uppercase tracking-[0.4em]">Technical & Cognitive Analysis</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Container (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-10 py-12 space-y-16 custom-scrollbar">
              
              {/* SECTION 1: OVERVIEW */}
              <section className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-[10px] font-black tracking-widest uppercase">
                  01 // Overview
                </div>
                <p className="text-2xl text-white/70 font-light leading-relaxed italic">
                  An integrated, multi-layered sensory architecture that fuses 3D physics, haptic feedback, and cognitively engineered interference patterns into a unified neuro-interactive experience.
                </p>
              </section>

              {/* SECTION 2: 3D PHYSICS */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-cyan-400 text-sm font-mono tracking-normal not-italic">02</span>
                  3D Physics Simulation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Real-time Physics", desc: "NVIDIA PhysX integration for mass, friction, and bounce coefficients." },
                    { title: "Spatial Memory", desc: "Activates hippocampal spatial maps through 3D environmental complexity." },
                    { title: "Engagement", desc: "Hippocampal memory scores improved by ~12% in 3D environments." }
                  ].map((item, i) => (
                    <GlowCard key={i} color="cyan" className="p-8 bg-white/[0.02]">
                      <div className="text-white font-black text-lg mb-2 italic uppercase">{item.title}</div>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlowCard>
                  ))}
                </div>
              </section>

              {/* SECTION 3: HAPTIC FEEDBACK */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-purple-400 text-sm font-mono tracking-normal not-italic">03</span>
                  Haptic Feedback System
                </h3>
                <GlowCard color="purple" className="p-10 bg-purple-950/[0.05] border-purple-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="text-white font-black text-xl italic uppercase">Taptic Architecture</div>
                      <ul className="space-y-3">
                        {['Core Haptics API Integration', 'Low-Latency Transients', 'Dynamic Intensity Scaling'].map((li, i) => (
                          <li key={i} className="flex items-center gap-4 text-white/50 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="text-white font-black text-xl italic uppercase">The Jar Shake</div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        A haptic disruption event every 45-60s that redirects attention and activates sympathetic arousal during cognitive fatigue.
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </section>

              {/* SECTION 4: MULTISENSORY INTEGRATION */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-pink-400 text-sm font-mono tracking-normal not-italic">04</span>
                  Multisensory Integration
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="text-white font-black text-xl italic uppercase">Triple Signal Loop</div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Synchronized Visual + Auditory + Haptic signals arrive at identical timestamps, multiplying encoding depth beyond single-modality conditions.
                    </p>
                  </div>
                  <div className="flex-1 p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="text-white font-black text-xl italic uppercase">Spatial Binding</div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Crossmodal stimulus binding reinforces 3D spatial coordinates in memory through three corroborating sensory votes.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: CONTEXTUAL INTERFERENCE */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-pink-400 text-sm font-mono tracking-normal not-italic">05</span>
                  Contextual Interference
                </h3>
                <GlowCard color="pink" className="p-10 bg-pink-950/[0.05] border-pink-500/20">
                  <div className="space-y-6">
                    <p className="text-white/60 leading-relaxed italic">
                      "High contextual interference significantly improves retention over low-interference training through Reconstruction and Elaborative Processing."
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Random Layouts', 'Shake Events', 'Color Shifts', 'Explosion Reshuffles'].map((ci, i) => (
                        <div key={i} className="px-4 py-3 rounded-xl bg-pink-500/10 border border-pink-400/20 text-pink-400 text-[10px] font-black uppercase text-center tracking-tight">
                          {ci}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </section>

              {/* SECTION 6: ABILITY SYSTEM */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-cyan-400 text-sm font-mono tracking-normal not-italic">06</span>
                  Scaffolded Ability System
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Pinpoint', cost: '3pt', desc: 'Attention Focus' },
                    { name: 'Quad Honing', cost: '1pt', desc: 'Chunking Assist' },
                    { name: 'Flash Reveal', cost: '3pt', desc: 'Iconic Buffer' },
                    { name: 'Redo', cost: '2pt', desc: 'Error Recovery' }
                  ].map((ability, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all text-center space-y-2 group">
                      <div className="text-white font-black italic uppercase text-lg group-hover:text-cyan-400 transition-colors">{ability.name}</div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{ability.cost} // {ability.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 7: DATA & CLINICAL VALUE */}
              <section className="space-y-8">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
                  <span className="text-green-400 text-sm font-mono tracking-normal not-italic">07</span>
                  Data & Clinical Value
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold shrink-0">RT</div>
                      <div>
                        <div className="text-white font-black uppercase italic mb-1">Reaction Latency</div>
                        <p className="text-white/40 text-xs">Captures deliberation time — a highly sensitive early-warning metric for cognitive decline.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold shrink-0">FI</div>
                      <div>
                        <div className="text-white font-black uppercase italic mb-1">Fatigue Index</div>
                        <p className="text-white/40 text-xs">Measures cognitive reserve depletion rate over sustained session load.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 rounded-3xl bg-green-500/[0.03] border border-green-500/10 space-y-4">
                    <div className="text-white font-black uppercase italic">Clinical Utility</div>
                    <p className="text-white/40 text-sm leading-relaxed italic">
                      Passive monitoring of working memory accuracy, attentional control, and metacognitive calibration for Alzheimer's and TBI patients.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: WHY IT MATTERS */}
              <section className="space-y-6 text-center py-12 border-t border-white/5">
                <p className="text-3xl font-black text-white italic uppercase tracking-tighter max-w-2xl mx-auto leading-tight">
                  Training the brain <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">through the body</span>
                </p>
                <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
                  Memory Marbles turns everyday physical play into a high-fidelity clinical diagnostic instrument. It is a full-body sensory input loop designed for the future of digital therapeutics.
                </p>
              </section>

            </div>

            {/* Footer / CTA */}
            <div className="px-10 py-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
              <button 
                onClick={onClose}
                className="px-12 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-colors"
              >
                Restore System Baseline
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
