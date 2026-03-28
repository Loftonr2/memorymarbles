"use client";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({ children, className = '', id, dark = false }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 relative overflow-hidden transition-colors duration-1000 ${dark ? 'bg-[#010410]' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {children}
      </div>
      
      {/* Dynamic Background Halos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
