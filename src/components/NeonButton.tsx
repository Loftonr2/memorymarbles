import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'cyan' | 'purple' | 'pink' | 'white' | 'gradient';
}

export function NeonButton({ children, className = '', color = 'cyan', ...props }: NeonButtonProps) {
  const styles = {
    cyan: 'bg-cyan-900/40 border-cyan-400/50 text-white hover:bg-cyan-500/40 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]',
    purple: 'bg-purple-900/40 border-purple-400/50 text-white hover:bg-purple-500/40 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]',
    pink: 'bg-pink-900/40 border-pink-400/50 text-white hover:bg-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]',
    white: 'bg-white/10 border-white/40 text-white hover:bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]',
    gradient: 'bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 text-white border-white/20 shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:shadow-[0_0_60px_rgba(147,51,234,0.8)]'
  };

  return (
    <button 
      className={`px-12 py-5 rounded-2xl font-black tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] active:scale-[0.96] backdrop-blur-xl border flex items-center justify-center gap-4 uppercase text-xs ${styles[color]} ${className}`} 
      {...props}
    >
      {selectedIcon(color)}
      {children}
    </button>
  );
}

function selectedIcon(color: string) {
  if (color === 'gradient') return <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />;
  return null;
}
