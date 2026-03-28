import React from 'react';

export const Marble: React.FC<{ color: string; size: number; isNumbered?: boolean }> = ({ color, size, isNumbered }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 35% 25%, white 5%, ${color} 40%, black 100%)`,
        boxShadow: `inset -8px -8px 15px rgba(0,0,0,0.6), inset 5px 5px 15px rgba(255,255,255,0.9), 0 5px 15px rgba(0,0,0,0.5)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Intense specular highlight for glass/candy look */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '40%',
          height: '25%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)',
          transform: 'rotate(-20deg)',
          borderRadius: '50%'
        }}
      />
      {isNumbered && (
        <span style={{
          color: '#0ea5e9', // Cyber blue
          fontSize: size * 0.5,
          fontWeight: '900',
          fontFamily: 'sans-serif',
          textShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.8)',
          zIndex: 10,
          transform: 'rotate(-5deg)' // Match the perspective in the image
        }}>
          1
        </span>
      )}
    </div>
  );
};
