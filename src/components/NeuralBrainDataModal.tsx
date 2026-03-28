"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface NeuralBrainDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NeuralBrainDataModal({ isOpen, onClose }: NeuralBrainDataModalProps) {
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

  const dataStreams = [
    {
      title: "1. REACTION TIME (PROCESSING SPEED)",
      content: "• Measures how fast the brain processes and responds to information\n• Tracks both average speed and variability\n• High variability is an early indicator of cognitive decline"
    },
    {
      title: "2. ACCURACY (MEMORY INTEGRITY)",
      content: "• Measures correct recall performance at increasing difficulty\n• Indicates working memory strength and reliability\n• Declines signal impairment in memory systems"
    },
    {
      title: "3. MEMORY SPAN (HIPPOCAMPAL CAPACITY)",
      content: "• Tracks the maximum number of items the brain can hold and recall\n• Directly reflects hippocampal function\n• Used clinically in spatial memory testing"
    },
    {
      title: "4. ERROR PATTERNS (NEUROLOGICAL FINGERPRINT)",
      content: "Identifies how mistakes are made, revealing different brain impairments:\n\n• Sequence errors → executive dysfunction\n• Spatial errors → hippocampal deficits\n• Early errors → encoding failure\n• Late errors → capacity limits"
    },
    {
      title: "5. FATIGUE INDEX (COGNITIVE RESERVE)",
      content: "• Measures how performance changes over a session\n• Detects how quickly the brain loses efficiency\n• Indicates resilience against cognitive decline"
    },
    {
      title: "6. ABILITY USAGE (METACOGNITION)",
      content: "• Tracks how users adapt to difficulty\n• Measures awareness of their own performance\n• Detects patterns like underestimation or overcompensation"
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#010410]/95 border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(34,211,238,0.1)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-transparent">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic line-clamp-1">
                   NEURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">BRAIN DATA</span>
                </h2>
                <div className="flex items-center gap-4">
                   <div className="h-px w-8 bg-cyan-500/20" />
                   <p className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                     How Game Data Creates a Snapshot of the Human Brain
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
            <div className="flex-1 overflow-y-auto p-10 md:p-16 space-y-20 custom-scrollbar">
              {/* Intro Text */}
              <div className="max-w-3xl">
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light italic tracking-tight mb-8">
                  "Every time a user plays Memory Marbles, the system captures a real-time behavioral snapshot of the brain. This is not game data — it is a multi-domain cognitive scan expressed through interaction."
                </p>
              </div>

              {/* Data Streams Grid */}
              <div className="space-y-12">
                <h3 className="text-sm font-black text-cyan-400 uppercase tracking-[0.4em] italic mb-8 flex items-center gap-4">
                  <div className="h-px w-6 bg-cyan-400/20" />
                  The Six Core Data Streams
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {dataStreams.map((stream, idx) => (
                    <div key={idx} className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors group/stream">
                      <h4 className="text-xs font-black text-white uppercase italic tracking-wider leading-none border-b border-white/5 pb-2">
                        {stream.title}
                      </h4>
                      <p className="text-white/40 leading-relaxed font-light text-[13px] whitespace-pre-wrap italic">
                        {stream.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CCS and Biomarkers Segment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-white/5">
                 <div className="space-y-6">
                    <h3 className="text-lg font-black text-white uppercase italic tracking-widest border-l-2 border-cyan-500/50 pl-6">COGNITIVE COMPOSITE SCORE (CCS)</h3>
                    <p className="text-white/40 text-sm leading-relaxed italic">
                      All six data streams combine into one real-time cognitive profile: Memory + Accuracy + Speed + Error Control + Fatigue Index.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-lg font-black text-white uppercase italic tracking-widest border-l-2 border-purple-500/50 pl-6">DIGITAL BIOMARKERS</h3>
                    <p className="text-white/40 text-sm leading-relaxed italic">
                      Continuous monitoring detects cognitive decline 10–15 years before symptoms through behavioral patterns linked to neurological conditions.
                    </p>
                 </div>
              </div>

              {/* Diagnostic Comparison Segment */}
              <div className="pt-20 space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 uppercase italic tracking-tighter">THE CLINICAL RESULT</h3>
                  <div className="flex justify-center gap-4">
                    <div className="px-6 py-2 rounded-full border border-cyan-500/20 text-[9px] font-black text-cyan-400 uppercase tracking-widest italic">Continuous Monitoring</div>
                    <div className="px-6 py-2 rounded-full border border-purple-500/20 text-[9px] font-black text-purple-400 uppercase tracking-widest italic">Behavioral Diagnostics</div>
                  </div>
                </div>
                <div className="max-w-2xl mx-auto text-center">
                   <p className="text-white/60 leading-relaxed font-light italic tracking-tight text-lg">
                     Memory Marbles is a functional brain scan delivered through play. It turns invisible cognitive patterns into daily functional intelligence for physicians and patients.
                   </p>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
               <button 
                 onClick={onClose}
                 className="px-12 py-5 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-cyan-500 hover:text-white transition-all shadow-2xl italic group"
               >
                 Close Data Registry <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
