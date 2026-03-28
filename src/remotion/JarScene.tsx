import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Img, staticFile } from 'remotion';
import { Marble } from './Marble';

const MARBLES_COUNT = 32;
const COLORS = ['#ef4444', '#eab308', '#22c55e', '#3b82f6', '#06b6d4', '#a855f7', '#f97316'];
const SPECIAL_MARBLE_INDEX = 18;

export const JarScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const marbles = Array.from({ length: MARBLES_COUNT }).map((_, i) => {
    const delay = i * 4; 
    const dropSpring = spring({
      frame: frame - delay,
      fps,
      config: { damping: 14, mass: 0.9, stiffness: 80 },
    });

    const settleY = 280 - (i * 7) + (i % 3) * 15;
    const y = interpolate(dropSpring, [0, 1], [-300, settleY], {
      extrapolateRight: 'clamp',
    });
    
    const startX = 140 + (i % 5) * 30;
    const settleX = 80 + (i % 6) * 40 - (i % 3) * 10;
    const x = interpolate(dropSpring, [0, 1], [startX, settleX], {
      extrapolateRight: 'clamp',
    });

    const isNumbered = i === SPECIAL_MARBLE_INDEX;
    const color = isNumbered ? '#ffffff' : COLORS[i % COLORS.length];
    
    return { id: i, x, y, color, isNumbered };
  });

  const totalDuration = MARBLES_COUNT * 4 + 40; 
  const fillProgress = interpolate(frame, [0, totalDuration], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const glowOpacity = interpolate(fillProgress, [0, 1], [0.1, 0.8], {
    extrapolateRight: 'clamp',
  });
  const parallaxTranslateY = interpolate(frame, [0, 300], [0, -20]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#05050f', overflow: 'hidden' }}>
      
      {/* 4. DEPTH PARALLAX: Background scaled (1.05) and slightly darker for balance */}
      <AbsoluteFill>
         <Img src={staticFile('bg.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25, transform: 'scale(1.05)', userSelect: 'none' }} />
      </AbsoluteFill>

      {/* 4. ATMOSPHERIC PARTICLES: Slow floating, low opacity */}
      <AbsoluteFill style={{ opacity: 0.2 }}>
        {Array.from({length: 30}).map((_, i) => {
           const px = (i * 37) % 100;
           const py = (i * 53) % 100;
           const animY = Math.sin((frame + i * 15) / 50) * 40;
           return (
             <div key={i} style={{
               position: 'absolute', left: `${px}%`, top: `calc(${py}% + ${animY}px)`,
               width: i % 2 === 0 ? 2 : 1, height: i % 2 === 0 ? 2 : 1,
               backgroundColor: '#40e0d0', borderRadius: '50%',
               boxShadow: '0 0 10px 2px rgba(64, 224, 208, 0.4)',
               filter: 'blur(0.5px)'
             }} />
           );
        })}
      </AbsoluteFill>

      {/* Jar Assembly Container */}
      <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Glow Parallax Tracker */}
        <div style={{ position: 'relative', width: 400, height: 450, transform: `scale(1.3) translateY(calc(-9.5% + ${parallaxTranslateY}px))`, zIndex: 10 }}>

          {/* 1. LAYER A (Tight Glow): Small radius, strong intensity directly under Jar, shifted 5% off center with nested falloff */}
          <div style={{ position: 'absolute', top: '80%', left: '15%', width: '70%', height: '15%', background: 'radial-gradient(ellipse at 45% 50%, rgba(0, 243, 255, 0.95) 0%, transparent 55%), radial-gradient(ellipse at 60% 45%, rgba(0, 243, 255, 0.4) 0%, transparent 50%)', filter: 'blur(15px)', zIndex: 1 }} />
          
          {/* 1. LAYER B (Mid Glow): Wider spread, softer opacity, organic asymmetry */}
          <div style={{ position: 'absolute', top: '70%', left: '10%', width: '80%', height: '25%', background: 'radial-gradient(ellipse at 42% 48%, rgba(147, 51, 234, 0.6) 0%, transparent 65%), radial-gradient(ellipse at 58% 55%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)', filter: 'blur(55px)', zIndex: 0 }} />

          {/* 1. LAYER C (Ambient Wash): Very large blur, tight background fill */}
          <div style={{ position: 'absolute', inset: -150, background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, rgba(0, 243, 255, 0.05) 50%, transparent 70%)', filter: 'blur(80px)', mixBlendMode: 'screen', zIndex: -1, pointerEvents: 'none' }} />

          {/* 2. LIGHT SOURCE SIMULATION (Top-Left Highlight & Right Edge Rim Light) */}
          <div style={{ 
            position: 'absolute', inset: '0', zIndex: 50, pointerEvents: 'none', borderRadius: '30%', mixBlendMode: 'screen',
            boxShadow: 'inset 25px 25px 50px -10px rgba(255, 255, 255, 0.08), inset -8px 0px 15px -2px rgba(0, 243, 255, 0.15), inset 0px -40px 60px -20px rgba(0, 0, 0, 0.8)' 
          }} />

          {/* 5. JAR SHADOW IMPROVEMENT (Merged contact shadow with singular soft ambient falloff) */}
          <Img src={staticFile('jar.png')} style={{ 
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, 
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.95)) drop-shadow(0 40px 60px rgba(0,0,0,0.55))' 
          }} />

          {/* Layer 3: Animated Marbles Overlay (with optical glass physics) */}
          {marbles.map((m) => {
            const distanceFromCenter = Math.abs(m.x - 175) / 175;
            const depthInJar = Math.max(0, (m.y - 150) / 150);
            
            const brightness = 1 - (distanceFromCenter * 0.25) - (depthInJar * 0.15);
            const contrast = 1 - (depthInJar * 0.2);
            const blur = distanceFromCenter * 1.5 + depthInJar * 0.8;

            return (
              <div key={m.id} style={{ 
                position: 'absolute', top: m.y, left: m.x, 
                zIndex: m.isNumbered ? 5 : Math.floor(m.y / 10) + 3,
                filter: `brightness(${brightness}) contrast(${contrast}) blur(${blur}px)`,
                transform: `scale(${1 - (distanceFromCenter * 0.05)})`
              }}>
                <Marble color={m.color} size={m.isNumbered ? 55 : 50} isNumbered={m.isNumbered} />
              </div>
            );
          })}

          {/* OPTICAL DISTORTION/LIGHT WARP (Dynamic ambient refraction tracing the glass volume) */}
          <div style={{ 
            position: 'absolute', inset: 0, zIndex: 55, pointerEvents: 'none', borderRadius: '35%', mixBlendMode: 'overlay',
            background: `linear-gradient(${135 + Math.sin(frame / 30) * 15}deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 35%, rgba(0,243,255,0.05) 70%, rgba(255,255,255,0.1) 100%)`,
            filter: 'blur(3px)'
          }} />
          
          {/* Layer 4: Glow + Lighting Effects */}
          <div style={{ 
            position: 'absolute', 
            inset: -100, 
            background: `radial-gradient(circle at center, rgba(147, 51, 234, ${glowOpacity * 0.7}), transparent 65%)`, 
            mixBlendMode: 'screen',
            pointerEvents: 'none',
            zIndex: 20 
          }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};;
