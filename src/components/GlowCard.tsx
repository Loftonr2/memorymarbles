import React from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'cyan' | 'purple' | 'pink' | 'white';
}

export function GlowCard({ children, className = '', color = 'cyan', ...props }: GlowCardProps) {
  const glows = {
    cyan: 'shadow-[0_0_50px_rgba(0,243,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.1)] border-cyan-400/20 hover:shadow-[0_0_80px_rgba(0,243,255,0.2)] hover:border-cyan-400/40',
    purple: 'shadow-[0_0_50px_rgba(147,51,234,0.08),inset_0_1px_1px_rgba(255,255,255,0.1)] border-purple-400/20 hover:shadow-[0_0_80px_rgba(147,51,234,0.2)] hover:border-purple-400/40',
    pink: 'shadow-[0_0_50px_rgba(236,72,153,0.08),inset_0_1px_1px_rgba(255,255,255,0.1)] border-pink-400/20 hover:shadow-[0_0_80px_rgba(236,72,153,0.2)] hover:border-pink-400/40',
    white: 'shadow-[0_0_50px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.1)] border-white/10 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:border-white/30',
  };

  return (
    <div 
      className={`bg-white/[0.02] backdrop-blur-3xl border rounded-[2.5rem] transition-all duration-700 overflow-hidden relative group ${glows[color]} ${className}`}
      {...props}
    >
      {/* Inner Glow Halo */}
      <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none ${
        color === 'cyan' ? 'bg-cyan-400' : color === 'purple' ? 'bg-purple-600' : color === 'pink' ? 'bg-pink-500' : 'bg-white'
      }`} />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
