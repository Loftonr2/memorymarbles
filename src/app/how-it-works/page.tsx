import { PageTransition } from '@/components/PageTransition';

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background z-[-1]" />
      <PageTransition>
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300 drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]">
          Master Memory.<br/>One Marble at a Time.
        </h1>
        <div className="glass-card w-full p-12 md:p-16">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-12">
            Memory Marbles challenges your working memory through a five-phase system:
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block" />
            
            {["Drop", "Memorize", "Reveal", "Recall", "Select"].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-4 bg-background/50 p-4 rounded-full border border-white/5 backdrop-blur-md hover:scale-110 hover:border-primary/50 transition-all cursor-default">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/80 to-blue-500 flex items-center justify-center text-2xl font-bold shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase text-white/80">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center border-t border-white/10 pt-12">
            Each level increases cognitive load and strengthens memory pathways.
          </p>
        </div>
      </PageTransition>
    </div>
  );
}
