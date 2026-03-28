"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface RulebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RulebookModal({ isOpen, onClose }: RulebookModalProps) {
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
      title: "SECTION 1 — THE EXPERIENCE",
      content: "Memory Marbles is not just a game. It is a real-time cognitive training system designed to improve:\n\n• Memory retention\n• Pattern recognition\n• Focus under pressure\n• Decision-making speed\n\nEvery interaction inside the jar reflects how your brain processes information."
    },
    {
      title: "SECTION 2 — ACCOUNT SETUP",
      content: "• Upload profile photo\n• Create account (email + password)\n• Select region (State / Country)\n\nEnables:\n• Global ranking\n• Performance tracking\n• Personalized progression"
    },
    {
      title: "SECTION 3 — CORE GAME LOOP",
      content: "1. DROP: Marbles fall into the jar\n2. MEMORIZE: Observe positions, colors, numbers\n3. REVEAL: Pattern disappears\n4. RECALL: Reconstruct mentally\n5. SELECT: Tap marbles in correct order"
    },
    {
      title: "SECTION 4 — LIVE GAMEPLAY",
      content: "• Active timer\n• Difficulty scaling\n• Increasing cognitive pressure\n\nExample:\n\"Tap marbles in order: 1 → 30\""
    },
    {
      title: "SECTION 5 — ABILITIES",
      content: "**PINPOINT**\n→ Highlights one correct marble\n→ Improves focus\n\n**QUAD HONING**\n→ Highlights 4 marbles\n→ Improves pattern recognition\n\n**FLASH REVEAL**\n→ Brief sequence reveal\n→ Improves encoding speed\n\n**REDO**\n→ Retry last move\n→ Improves learning"
    },
    {
      title: "SECTION 6 — PRESSURE SYSTEM",
      content: "• Countdown timers\n• Shake mechanics\n• Increasing density\n• Ability cooldowns\n\nSimulates real-world decision pressure"
    },
    {
      title: "SECTION 7 — RANKING",
      content: "• State\n• Country\n• Global\n\nTracked by:\n• Level\n• Time\n• Accuracy\n• Ability usage"
    },
    {
      title: "SECTION 8 — COGNITIVE SCORING",
      content: "• Memory score\n• Accuracy\n• Fatigue tracking\n\nBuilds a long-term cognitive profile"
    },
    {
      title: "SECTION 9 — REWARDS",
      content: "• Performance-based payouts\n• Engagement tracking\n• Tier system\n\nExample:\nState Rank #1 → eligible earnings"
    },
    {
      title: "SECTION 10 — CLINICAL APPLICATION",
      content: "• Cognitive decline research\n• Memory rehabilitation\n• Behavioral data tracking\n• Clinical trials\n\nBridges:\nGaming + Neuroscience + Data"
    },
    {
      title: "SECTION 11 — PROGRESSION",
      content: "• 99 Levels\n• Increasing difficulty\n• More marbles\n• Faster sequences\n\nGoal:\nCognitive mastery"
    },
    {
      title: "SECTION 12 — STRATEGY",
      content: "• Chunk patterns\n• Focus zones\n• Use abilities wisely\n• Stay calm\n• Train daily"
    },
    {
      title: "SECTION 13 — VISION",
      content: "Memory Marbles evolves into:\n\n• Cognitive health platform\n• Competitive system\n• Clinical data engine"
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
            className="absolute inset-0 bg-black/80 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#010410]/95 border border-white/10 rounded-[3rem] shadow-[0_0_80px_rgba(0,243,255,0.1)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic line-clamp-1">
                   MEMORY <span className="text-cyan-400">MARBLES</span>
                </h2>
                <div className="flex items-center gap-3">
                   <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Rulebook & Gameplay Guide</p>
                   <div className="h-px w-8 bg-white/10" />
                   <p className="text-[10px] font-bold text-cyan-400/50 uppercase tracking-[0.2em] italic">"Master Memory. One Marble at a Time."</p>
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
            <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar lg:p-16">
              {sections.map((section, idx) => (
                <section key={idx} className="space-y-6 relative group/section">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
                    <h3 className="text-lg font-black text-white uppercase italic tracking-wider">{section.title}</h3>
                  </div>
                  <div className="pl-6 border-l border-white/5">
                    <p className="text-white/50 leading-relaxed font-light text-sm whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                  {idx !== sections.length - 1 && (
                    <div className="pt-12">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02] flex justify-center">
               <button 
                 onClick={onClose}
                 className="px-10 py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-cyan-400 hover:text-white transition-all shadow-xl italic"
               >
                 Close Rulebook
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
