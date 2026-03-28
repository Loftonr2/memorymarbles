"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface NeuralSymbiosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NeuralSymbiosisModal({ isOpen, onClose }: NeuralSymbiosisModalProps) {
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

  const sections = [
    {
      title: "WHAT IS NEURAL SYMBIOSIS",
      content: "Neural Symbiosis is a two-way relationship:\n\n• The brain gives data through behavior\n• The game transforms behavior into cognitive signals\n• The data informs physicians\n• The physician improves patient outcomes\n\nThis creates a continuous loop:\nPlayer → Game → Data → Doctor → Patient"
    },
    {
      title: "WHY IT MATTERS",
      content: "Most health technologies fail because they produce data without meaning. People do not respond to numbers — they respond to understanding.\n\nNeural Symbiosis translates complex neuroscience into something human, actionable, and accessible."
    },
    {
      title: "HUMAN-CENTERED DESIGN",
      content: "Memory Marbles is built for real people:\n\n• Aging users\n• Caregivers\n• Patients outside clinical environments\n\nThe experience is designed to feel like a game — not a test — while still producing clinically valuable insights."
    },
    {
      title: "DEMOCRATIZING BRAIN HEALTH",
      content: "Traditional cognitive testing is expensive and inaccessible. Memory Marbles brings cognitive monitoring to any smartphone:\n\n• Daily use\n• No clinic required\n• Scalable to millions"
    },
    {
      title: "THE HUMAN STORY",
      content: "Every data point represents a real person. This system allows:\n\n• Earlier detection\n• Better conversations between doctor and patient\n• Empowered caregivers"
    },
    {
      title: "THE BRIDGE",
      content: "Memory Marbles connects:\nBrain → Behavior → Data → Insight → Human understanding\n\nIt transforms invisible cognitive patterns into meaningful human narratives."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#010410]/95 border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(147,51,234,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header / Banner */}
            <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-transparent">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic line-clamp-1">
                   NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">SYMBIOSIS</span>
                </h2>
                <div className="flex items-center gap-4">
                   <div className="h-px w-8 bg-purple-500/20" />
                   <p className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                     The Bridge Between the Brain and the Human Being
                   </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-10 md:p-16 space-y-16 custom-scrollbar">
              {/* Intro Text */}
              <div className="max-w-3xl">
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light italic tracking-tight mb-8">
                  "There is a moment that defines the true purpose of Memory Marbles. It is not when a player taps their first marble. It is not when a physician reads a report. It is the moment a person plays naturally, without pressure, and unknowingly reveals the most honest picture of their cognitive health."
                </p>
                <p className="text-lg text-cyan-400 font-bold uppercase tracking-widest mb-4">This is Neural Symbiosis.</p>
                <p className="text-white/50 leading-relaxed">
                  Memory Marbles captures real human behavior and transforms it into meaningful clinical insight without disrupting everyday life.
                </p>
              </div>

              {/* Sections Grid/Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {sections.map((section, idx) => (
                  <section key={idx} className="space-y-6 group/section">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                      <h3 className="text-lg font-black text-white uppercase italic tracking-wider leading-none">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-white/50 leading-relaxed font-light text-sm whitespace-pre-wrap pl-6 italic">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              {/* Conclusion Section */}
              <div className="pt-16 border-t border-white/5 text-center space-y-8">
                <div className="flex justify-center items-center gap-8">
                   <span className="text-white font-black italic uppercase tracking-tighter text-2xl">Brain</span>
                   <span className="text-white/20">→</span>
                   <span className="text-white font-black italic uppercase tracking-tighter text-2xl">Behavior</span>
                   <span className="text-white/20">→</span>
                   <span className="text-white font-black italic uppercase tracking-tighter text-2xl font-outline-2">Data</span>
                   <span className="text-white/20">→</span>
                   <span className="text-white font-black italic uppercase tracking-tighter text-2xl">Insight</span>
                   <span className="text-white/20">→</span>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-black italic uppercase tracking-tighter text-3xl drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]">Human understanding</span>
                </div>
                <p className="text-white/30 font-bold uppercase tracking-[0.2em] italic text-xs">
                  It transforms invisible cognitive patterns into meaningful human narratives.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
               <button 
                 onClick={onClose}
                 className="px-10 py-4 rounded-xl bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-purple-600 hover:text-white transition-all shadow-xl italic"
               >
                 Close Analysis
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
