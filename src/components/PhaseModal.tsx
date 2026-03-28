"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PhaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  phase: {
    name: string;
    subtitle: string;
    body: string;
    icon: string;
    color: string;
  } | null;
}

export function PhaseModal({ isOpen, onClose, phase }: PhaseModalProps) {
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

  if (!phase) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12 overflow-hidden">
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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl bg-[#010410]/95 border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          >
            {/* Header / Accent Glow */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-${phase.color}-400 to-transparent opacity-50`} />
            
            <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-8">
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              {/* Icon Section */}
              <div className="relative group/icon mt-4">
                <div className="text-8xl mb-2 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover/icon:scale-110 transition-transform duration-700">
                  {phase.icon}
                </div>
                <div className={`absolute inset-0 bg-${phase.color}-400/20 blur-[50px] rounded-full -z-10 animate-pulse`} />
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {phase.name}
                </h2>
                <div className="flex items-center justify-center gap-4">
                   <div className="h-px w-6 bg-white/10" />
                   <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] italic">{phase.subtitle}</p>
                   <div className="h-px w-6 bg-white/10" />
                </div>
              </div>

              {/* Body Copy */}
              <div className="max-w-md">
                <p className="text-white/60 leading-relaxed font-light text-base md:text-lg italic tracking-tight">
                  {phase.body}
                </p>
              </div>

              {/* Footer Action */}
              <div className="pt-4">
                 <button 
                   onClick={onClose}
                   className="px-12 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all italic shadow-2xl"
                 >
                   Return to Rules
                 </button>
              </div>
            </div>

            {/* Corner Glows */}
            <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-${phase.color}-500/10 blur-[60px] rounded-full pointer-events-none`} />
            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${phase.color}-500/10 blur-[60px] rounded-full pointer-events-none`} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
