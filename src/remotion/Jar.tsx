import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const Jar: React.FC<{ fillProgress: number }> = ({ fillProgress }) => {
  const frame = useCurrentFrame();
  
  // Dynamic glow based on fill progress
  const glowOpacity = interpolate(fillProgress, [0, 1], [0.1, 0.8], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ position: 'relative', width: 400, height: 450 }}>
      {/* Background glow behind jar */}
      <div 
        style={{
          position: 'absolute',
          inset: -30,
          background: `radial-gradient(ellipse at center, rgba(147, 51, 234, ${glowOpacity}), transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: -1
        }} 
      />
      <svg width="400" height="450" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glassGradient" x1="0" y1="0" x2="400" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.3" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.02" />
            <stop offset="1" stopColor="#00f3ff" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="glassEdge" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f3ff" stopOpacity="0.9" />
            <stop offset="0.1" stopColor="white" stopOpacity="0.1" />
            <stop offset="0.9" stopColor="white" stopOpacity="0.1" />
            <stop offset="1" stopColor="#00f3ff" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="metallicLid" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e2e8f0" />
            <stop offset="0.2" stopColor="#94a3b8" />
            <stop offset="0.5" stopColor="#f8fafc" />
            <stop offset="0.8" stopColor="#64748b" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="lidShadow" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.8" />
            <stop offset="1" stopColor="black" stopOpacity="0.4" />
          </linearGradient>
          <filter id="bloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Back rim */}
        <ellipse cx="200" cy="40" rx="140" ry="20" fill="url(#glassGradient)" stroke="url(#glassEdge)" strokeWidth="4" opacity="0.6" />
        
        {/* Jar body - Mason style curvy bottom */}
        <path d="M60 100 C60 180 30 220 30 380 C30 430 100 440 200 440 C300 440 370 430 370 380 C370 220 340 180 340 100 Z" fill="url(#glassGradient)" stroke="url(#glassEdge)" strokeWidth="6" style={{ backdropFilter: 'blur(3px)' }} filter="url(#bloom)" />
        
        {/* Top Metallic Lid / Rim - Double layered */}
        <rect x="65" y="25" width="270" height="25" rx="4" fill="url(#metallicLid)" />
        <rect x="65" y="25" width="270" height="25" rx="4" fill="url(#lidShadow)" style={{ mixBlendMode: 'overlay' }} />
        
        <rect x="60" y="55" width="280" height="20" rx="4" fill="url(#metallicLid)" />
        <rect x="60" y="55" width="280" height="20" rx="4" fill="url(#lidShadow)" style={{ mixBlendMode: 'overlay' }} />

        <rect x="58" y="75" width="284" height="15" rx="4" fill="url(#metallicLid)" opacity="0.8" />

        {/* Specular highlights on glass */}
        <path d="M50 200 C40 250 40 380 70 410" stroke="#00f3ff" strokeWidth="8" strokeLinecap="round" opacity="0.7" filter="url(#bloom)" />
        <path d="M350 200 C360 250 360 380 330 410" stroke="#00f3ff" strokeWidth="8" strokeLinecap="round" opacity="0.7" filter="url(#bloom)" />
        <path d="M80 430 C120 438 280 438 320 430" stroke="#00f3ff" strokeWidth="6" strokeLinecap="round" opacity="0.8" filter="url(#bloom)" />
      </svg>
    </div>
  );
};
