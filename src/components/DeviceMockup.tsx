import React from 'react';
import { GlowCard } from './GlowCard';

interface DeviceMockupProps {
  type?: 'phone' | 'tablet' | 'laptop';
  children?: React.ReactNode;
  className?: string;
}

export function DeviceMockup({ type = 'phone', children, className = '' }: DeviceMockupProps) {
  if (type === 'phone') {
    return (
      <div className={`relative perspective-[1200px] transform-style-3d ${className}`}>
        {/* Phone Body with Real Depth */}
        <div className="w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-[#1a1a2e] rounded-[3.5rem] p-4 border-[6px] border-[#2a2a3e] shadow-[0_0_100px_rgba(147,51,234,0.3),20px_40px_60px_rgba(0,0,0,0.5)] transform rotate-y-[-20deg] rotate-x-[5deg] relative overflow-hidden group">
           {/* Screen */}
           <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative border border-white/10">
              {children || (
                <div className="w-full h-full bg-gradient-to-b from-blue-900/40 to-black flex flex-col items-center justify-center p-8 text-center">
                   <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                      <div className="w-12 h-12 rounded-full border-2 border-cyan-400 animate-pulse" />
                   </div>
                   <div className="text-white font-bold text-lg mb-2 uppercase tracking-widest italic">Memory Marbles</div>
                   <div className="text-white/40 text-xs">Waiting for device Link...</div>
                </div>
              )}
              {/* Screen Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-screen" />
           </div>
           
           {/* Reflection */}
           <div className="absolute top-0 right-0 w-[50%] h-[150%] bg-white/5 skew-x-[-20deg] pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        {/* Reflection on Ground */}
        <div className="absolute bottom-[-10%] w-[120%] left-[-10%] h-[20%] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
    );
  }

  return null;
}
