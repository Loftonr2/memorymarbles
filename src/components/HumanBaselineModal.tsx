"use client";

import { motion, AnimatePresence } from 'framer-motion';

interface HumanBaselineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HumanBaselineModal = ({ isOpen, onClose }: HumanBaselineModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#010410]/90 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white/[0.02] border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-10 right-10 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all uppercase text-[10px] font-black tracking-widest"
            >
              ✕
            </button>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-12 md:p-20 space-y-20">
              
              {/* Header */}
              <div className="space-y-6">
                <div className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] italic animate-pulse">Human Baseline Protocol</div>
                <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Preserving the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">Human Baseline.</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl italic">
                  Transforming complex neurological data into an intuitive, high-end experience users trust.
                </p>
              </div>

              {/* Sections */}
              <div className="grid grid-cols-1 gap-20">
                
                {/* Section 1 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-cyan-400 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: HOW MEMORY MARBLES BUILDS THE BASELINE</h3>
                  <div className="space-y-6 text-xl text-white/40 font-light leading-relaxed italic">
                    <p>Memory Marbles does not test the brain.</p>
                    <p>It observes it in motion.</p>
                    <p>Every session generates structured behavioral data across multiple cognitive domains.</p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-purple-400 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: REPETITION CREATES SIGNAL</h3>
                  <div className="space-y-8">
                    <div className="text-xl text-white/40 font-light italic leading-relaxed mb-8">Each play session produces:</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Reaction time arrays",
                        "Accuracy rates",
                        "Memory span limits",
                        "Error sequences",
                        "Fatigue curves",
                        "Adaptation behaviors"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/80 font-bold uppercase text-[10px] tracking-[0.2em] italic">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="pt-8 text-xl text-white/40 font-light italic leading-relaxed">
                      Individually, these are data points. Repeated over time, they become patterns.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-pink-500 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: BASELINE FORMATION</h3>
                  <div className="space-y-8">
                    <div className="text-xl text-white/40 font-light italic leading-relaxed mb-8">After repeated sessions (typically 5–15), the system stabilizes around:</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Average reaction time",
                        "Typical variability range",
                        "Consistent memory capacity",
                        "Predictable fatigue thresholds",
                        "Normal error distribution"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/80 font-bold uppercase text-[10px] tracking-[0.2em] italic">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-8 space-y-4 text-xl text-white/40 font-light italic leading-relaxed">
                      <p>This forms a statistical center of gravity for cognition.</p>
                      <p className="text-white font-black text-2xl uppercase tracking-tighter not-italic">This is the baseline.</p>
                      <p>Not static. But stable enough to measure change against.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-cyan-400 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: THE SCIENCE BEHIND IT</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic border-b border-white/10 pb-2">Neuroplasticity + Repetition</h4>
                      <ul className="space-y-4 text-[11px] text-white/50 font-bold uppercase tracking-widest leading-relaxed">
                        <li>• Repeated cognitive tasks strengthen neural pathways</li>
                        <li>• Hippocampus → memory encoding</li>
                        <li>• Prefrontal cortex → decision-making</li>
                        <li>• Parietal regions → spatial processing</li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic border-b border-white/10 pb-2">Intraindividual Variability (IIV)</h4>
                      <ul className="space-y-4 text-[11px] text-white/50 font-bold uppercase tracking-widest leading-relaxed">
                        <li>• The brain is compared to itself over time</li>
                        <li>• Variability increases before failure appears</li>
                        <li>• Early cognitive decline is detected through inconsistency</li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic border-b border-white/10 pb-2">Cognitive Load Theory</h4>
                      <ul className="space-y-4 text-[11px] text-white/50 font-bold uppercase tracking-widest leading-relaxed">
                        <li>• Tracks when performance begins to degrade</li>
                        <li>• Measures cognitive ceiling and endurance</li>
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-white font-black uppercase text-[10px] tracking-widest italic border-b border-white/10 pb-2">Behavioral Biomarkers</h4>
                      <ul className="space-y-4 text-[11px] text-white/50 font-bold uppercase tracking-widest leading-relaxed">
                        <li>• Behavior reflects neural function</li>
                        <li>• Reaction time → processing speed</li>
                        <li>• Errors → working memory disruption</li>
                        <li>• Fatigue → cognitive reserve</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-purple-400 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: HOW THE BASELINE IS USED</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-cyan-400/30 transition-all">
                      <div className="text-white font-black uppercase text-[10px] tracking-widest italic">Detecting Change</div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest leading-relaxed">Each session is compared to baseline identifier subtle deviations early.</p>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-purple-400/30 transition-all">
                      <div className="text-white font-black uppercase text-[10px] tracking-widest italic">Tracking Trends</div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest leading-relaxed">Builds long-term cognitive timelines. Reveals patterns over weeks and months.</p>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-pink-500/30 transition-all">
                      <div className="text-white font-black uppercase text-[10px] tracking-widest italic">Early Detection</div>
                      <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest leading-relaxed">Identifies cognitive decline before symptoms. Detects stress and recovery patterns.</p>
                    </div>
                  </div>
                  <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl">
                        <div className="text-white font-black uppercase text-[10px] tracking-widest italic mb-4">Personalization Engine</div>
                        <ul className="space-y-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                           <li>• Dynamically adjusts difficulty</li>
                           <li>• Targets weak cognitive domains</li>
                           <li>• Optimizes training intensity</li>
                        </ul>
                     </div>
                     <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl">
                        <div className="text-white font-black uppercase text-[10px] tracking-widest italic mb-4">Clinical Translation</div>
                        <ul className="space-y-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                           <li>• Provides physicians with objective data</li>
                           <li>• Enables early intervention</li>
                           <li>• Tracks treatment response</li>
                        </ul>
                     </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl italic font-light">
                  <h3 className="text-pink-500 font-black tracking-[0.4em] uppercase text-xs italic not-italic">SECTION: IMPROVING MEMORY THROUGH THE BASELINE</h3>
                  <div className="space-y-8 text-white/60">
                    <div>
                      <span className="text-white font-black uppercase text-[10px] tracking-widest block mb-2 not-italic underline underline-offset-4">Progressive Overload</span>
                      Increasing difficulty strengthens neural pathways.
                    </div>
                    <div>
                      <span className="text-white font-black uppercase text-[10px] tracking-widest block mb-2 not-italic underline underline-offset-4">Reinforcement Learning</span>
                      Improves encoding speed and recall accuracy.
                    </div>
                    <div>
                      <span className="text-white font-black uppercase text-[10px] tracking-widest block mb-2 not-italic underline underline-offset-4">Cognitive Reserve Building</span>
                      Enhances resilience against cognitive fatigue.
                    </div>
                  </div>
                  <div className="pt-10 flex flex-wrap justify-center items-center gap-6 text-[10px] font-black tracking-[0.3em] uppercase italic not-italic">
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5">Player</span>
                    <span>→</span>
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5 text-cyan-400">Gameplay</span>
                    <span>→</span>
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5">Data</span>
                    <span>→</span>
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5 text-purple-400">Baseline</span>
                    <span>→</span>
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5">Adaptation</span>
                    <span>→</span>
                    <span className="px-6 py-3 bg-white/5 rounded-xl border border-white/5 text-pink-500">Improvement</span>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-3xl">
                  <h3 className="text-cyan-400 font-black tracking-[0.4em] uppercase text-xs italic">SECTION: WHY USERS TRUST IT</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase text-[10px] italic tracking-widest">Invisible Complexity</h4>
                      <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-relaxed italic">Advanced science, simple experience.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase text-[10px] italic tracking-widest">Natural Interaction</h4>
                      <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-relaxed italic">No testing environment. Just gameplay.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase text-[10px] italic tracking-widest">Personal Relevance</h4>
                      <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-relaxed italic">Data reflects the individual brain.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-black uppercase text-[10px] italic tracking-widest">Consistency</h4>
                      <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest leading-relaxed italic">Daily engagement builds trust.</p>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="space-y-8 p-16 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 border border-white/10 rounded-3xl text-center">
                  <h3 className="text-white font-black tracking-[0.4em] uppercase text-xs italic">SECTION: THE RESULT</h3>
                  <div className="space-y-12">
                    <div className="space-y-4 text-3xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mix-blend-plus-lighter drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        Memory Marbles transforms:
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[10px] font-black tracking-[0.5em] uppercase italic text-white/60">
                      <div className="space-y-4">
                        <div className="text-cyan-400 text-6xl group-hover:scale-110 transition-transform mb-6">🧠</div>
                        <div>Behavior <br/> into <br/> intelligence</div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-purple-400 text-6xl group-hover:scale-110 transition-transform mb-6">📊</div>
                        <div>Data <br/> into <br/> understanding</div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-pink-500 text-6xl group-hover:scale-110 transition-transform mb-6">🎮</div>
                        <div>Gameplay <br/> into <br/> cognitive insight</div>
                      </div>
                    </div>
                    <div className="pt-12 border-t border-white/5">
                        <span className="text-white font-black text-2xl uppercase italic tracking-tighter">It preserves the human baseline.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Glow Fades */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#010410] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#010410] to-transparent pointer-events-none z-10" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
