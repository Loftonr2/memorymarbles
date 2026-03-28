"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ClinicalStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClinicalStudiesModal({ isOpen, onClose }: ClinicalStudiesModalProps) {
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
      title: "GAMEPLAY AS NEUROSCIENCE",
      content: "Memory Marbles is built around a five-phase cognitive loop:\n\n• Drop → passive visual attention\n• Memorize → hippocampal encoding\n• Reveal → rapid visual encoding\n• Recall → working memory reconstruction\n• Select → serial order recall (clinically significant)\n\nEach phase maps directly to validated cognitive functions used in neuropsychological testing."
    },
    {
      title: "CORE BRAIN SYSTEMS ENGAGED",
      content: "The game activates:\n\n• Hippocampus → memory formation and spatial mapping\n• Prefrontal Cortex → decision-making and working memory\n\nThese are the same regions that degrade earliest in Alzheimer’s disease."
    },
    {
      title: "VISUOSPATIAL MEMORY TRAINING",
      content: "Memory Marbles trains visuospatial working memory (VSWM):\n\n• Binding color + position + number\n• Maintaining patterns under pressure\n• Reconstructing sequences without cues\n\nThis mirrors clinical tests used to detect early Alzheimer’s and Mild Cognitive Impairment."
    },
    {
      title: "CLINICAL VALIDATION",
      content: "Research shows:\n\n• Brain training improves memory, processing speed, and attention\n• Adaptive difficulty increases neuroplasticity\n• Game-based cognitive assessments can detect early Alzheimer’s signals years before symptoms\n\nA major 20-year study showed a 25% reduction in dementia risk from structured cognitive training."
    },
    {
      title: "TRAUMATIC BRAIN INJURY (TBI)",
      content: "Digital cognitive interventions show:\n\n• Significant improvement in global cognition\n• Improved executive function and attention\n• Better rehabilitation adherence through gamification\n\nMemory Marbles aligns directly with these validated treatment models."
    },
    {
      title: "ALZHEIMER’S & EARLY DETECTION",
      content: "Game-based cognitive testing can rival blood tests for early Alzheimer’s detection, identifying cognitive decline 10–15 years before symptoms. Tracking progression continuously instead of episodically provides early intervention opportunities."
    },
    {
      title: "THE COGNITIVE COMPOSITE SCORE (CCS)",
      content: "The CCS creates a continuous health profile by measuring:\n\n• Memory Score → hippocampal function\n• Accuracy → working memory integrity\n• Reaction Time → processing speed\n• Error Rate → cognitive control\n• Fatigue Index → cognitive endurance"
    },
    {
      title: "CLINICAL IMPACT",
      content: "Memory Marbles enables earlier detection of cognitive decline, better physician decision-making, and improved patient outcomes. It transforms cognitive healthcare from reactive to proactive through continuous monitoring and at-home accessibility."
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#010410]/95 border border-white/10 rounded-[3.5rem] shadow-[0_0_120px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-10 md:p-14 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic line-clamp-1">
                   CLINICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">STUDIES</span>
                </h2>
                <div className="flex items-center gap-4">
                   <div className="h-px w-10 bg-cyan-500/20" />
                   <p className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                     Clinical Evidence for Memory Improvement & Medical Applications
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
            <div className="flex-1 overflow-y-auto p-12 md:p-20 space-y-20 custom-scrollbar relative">
              {/* Intro Text */}
              <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light italic tracking-tight mb-10 border-l-2 border-cyan-500/30 pl-8">
                  Memory Marbles is a cognitive training system that functions as both a brain-training game and a clinical-grade assessment platform. Each session generates a Cognitive Composite Score (CCS) based on accuracy, reaction time, error rate, and memory span, allowing physicians to track cognitive performance over time.
                </p>
              </div>

              {/* Sections Stack */}
              <div className="space-y-24">
                {sections.map((section, idx) => (
                  <section key={idx} className="space-y-8 max-w-3xl group/section">
                    <div className="flex items-center gap-6">
                      <span className="text-white/10 font-black text-4xl italic tracking-tighter leading-none group-hover/section:text-cyan-400/20 transition-colors">0{idx + 1}</span>
                      <h3 className="text-xl font-black text-white uppercase italic tracking-[0.1em] border-b border-white/5 pb-2 w-full">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-white/50 leading-relaxed font-light text-base whitespace-pre-wrap pl-12 md:pl-20 border-l border-white/5 italic">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              {/* Impact Footer Segment */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-10 md:p-14 text-center space-y-6">
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">WHY THIS MATTERS</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Traditional Testing</p>
                    <ul className="text-white/40 text-sm space-y-2 italic">
                      <li>• Is expensive</li>
                      <li>• Happens too late</li>
                      <li>• Is limited to clinics</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">Memory Marbles</p>
                    <ul className="text-cyan-200/60 text-sm space-y-2 italic font-bold">
                      <li>• Continuous monitoring</li>
                      <li>• At-home accessibility</li>
                      <li>• Clinically relevant behavior data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
               <button 
                 onClick={onClose}
                 className="px-12 py-5 rounded-2xl bg-cyan-500 text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl italic group"
               >
                 Return to Clinical Hub <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
