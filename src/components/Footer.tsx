const IconInstagram = ({className}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const IconFacebook = ({className}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IconTikTok = ({className}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>;
const IconYoutube = ({className}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
const IconTwitter = ({className}: {className?: string}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.03] bg-[#010410]/80 backdrop-blur-3xl py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-12 text-center">
        
        <div className="space-y-4">
           <h3 className="text-4xl font-black tracking-[-0.05em] text-white italic uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Memory Marbles</h3>
           <p className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase italic">The Sovereign Cognitive Layer</p>
        </div>
        
        <div className="flex gap-12 items-center justify-center">
          {[
            { icon: IconInstagram, label: 'Instagram', glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]' },
            { icon: IconFacebook, label: 'Facebook', glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' },
            { icon: IconTikTok, label: 'TikTok', glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' },
            { icon: IconYoutube, label: 'YouTube', glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]' },
            { icon: IconTwitter, label: 'Twitter', glow: 'hover:shadow-[0_0_30px_rgba(29,155,240,0.5)]' }
          ].map((social, i) => (
            <a 
              key={i}
              href="#" 
              aria-label={social.label} 
              className={`text-white/20 hover:text-white p-3 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:scale-125 ${social.glow}`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="w-20 h-px bg-white/10" />

        <p className="text-white/20 text-[9px] font-black tracking-[0.4em] uppercase italic">
          © {new Date().getFullYear()} Memory Marbles. Institutional Grade Cognitive Tracking.
        </p>
      </div>
    </footer>
  );
}
