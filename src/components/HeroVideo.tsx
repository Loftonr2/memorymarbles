"use client";

import React, { useRef, useEffect, useState } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth binding
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || !videoRef.current || videoDuration === 0) return;
        const { height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // scrollable area 
        const maxScroll = height - windowHeight;
        const currentScroll = window.scrollY;
        
        const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
        
        // Bind frame time
        videoRef.current.currentTime = progress * videoDuration;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [videoDuration]);

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] pointer-events-none transition-opacity duration-1000" />

        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', zIndex: 1 }} />

        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          className="w-full h-full object-cover absolute inset-0 z-0"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => {
            if (videoRef.current) setVideoDuration(videoRef.current.duration);
          }}
        />
        
        {/* Foreground Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-2xl mb-6 transform -translate-y-16">
             Memory Marbles
           </h1>
           <p className="text-xl md:text-3xl text-white/90 max-w-2xl font-light mb-8 glass px-8 py-4 rounded-full shadow-2xl">
             Scroll down to fill the jar.
           </p>
        </div>
      </div>
    </div>
  );
}
