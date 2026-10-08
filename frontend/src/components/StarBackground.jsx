import React, { useMemo } from 'react';

export default function StarBackground() {
  // Scatter small 4-point & 5-point SVG stars across the background
  const celestialStars = useMemo(() => {
    const starColors = [
      '#7B3FE4', // primary purple
      '#D9C7FF', // soft purple tint
      '#E0314B', // accent red
      '#FFD3DA', // soft red tint
      '#F5C26B', // gold highlight
      '#FDE8B5', // soft gold
    ];

    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 6, // 6px to 14px
      color: starColors[i % starColors.length],
      type: i % 2 === 0 ? 'sparkle4' : 'sparkle5',
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.35,
    }));
  }, []);

  // Slowly floating crescent moons
  const floatingMoons = useMemo(() => {
    return [
      { id: 1, x: 8, y: 14, size: 28, color: '#D9C7FF', delay: 0 },
      { id: 2, x: 88, y: 22, size: 22, color: '#FFD3DA', delay: 1.5 },
      { id: 3, x: 12, y: 55, size: 24, color: '#FDE8B5', delay: 2.8 },
      { id: 4, x: 85, y: 72, size: 30, color: '#D9C7FF', delay: 0.8 },
      { id: 5, x: 45, y: 88, size: 20, color: '#FFD3DA', delay: 3.2 },
    ];
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#FFF8F3',
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(243, 236, 255, 0.85) 0%, transparent 45%),
          radial-gradient(circle at 85% 35%, rgba(255, 211, 218, 0.6) 0%, transparent 45%),
          radial-gradient(circle at 25% 75%, rgba(217, 199, 255, 0.7) 0%, transparent 50%),
          radial-gradient(circle at 80% 85%, rgba(253, 232, 181, 0.4) 0%, transparent 40%)
        `,
      }}
    >
      {/* Scattered Animated Stars */}
      {celestialStars.map((s) => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            top: `${s.y}%`,
            left: `${s.x}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            display: 'inline-block',
            opacity: s.opacity,
            animation: `twinkleStar ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.type === 'sparkle4' ? (
            <svg viewBox="0 0 24 24" fill={s.color} width="100%" height="100%">
              <path d="M12 0 C12 6.5 17.5 12 24 12 C17.5 12 12 17.5 12 24 C12 17.5 6.5 12 0 12 C6.5 12 12 6.5 12 0 Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill={s.color} width="100%" height="100%">
              <path d="M12 1.5 L14.8 8.6 L22.4 9.1 L16.6 14.1 L18.4 21.5 L12 17.5 L5.6 21.5 L7.4 14.1 L1.6 9.1 L9.2 8.6 Z" />
            </svg>
          )}
        </span>
      ))}

      {/* Floating Crescent Moons */}
      {floatingMoons.map((m) => (
        <span
          key={m.id}
          style={{
            position: 'absolute',
            top: `${m.y}%`,
            left: `${m.x}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            display: 'inline-block',
            opacity: 0.65,
            animation: `floatMoon 6s ease-in-out infinite`,
            animationDelay: `${m.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill={m.color} width="100%" height="100%">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79 Z" />
          </svg>
        </span>
      ))}

      {/* Occasional Shooting Stars */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '20%',
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, #F5C26B, #7B3FE4, transparent)',
          borderRadius: '999px',
          animation: 'shootingStar 7s ease-in-out infinite',
          animationDelay: '1s',
          opacity: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '38%',
          right: '25%',
          width: '70px',
          height: '2px',
          background: 'linear-gradient(90deg, #E0314B, #D9C7FF, transparent)',
          borderRadius: '999px',
          animation: 'shootingStar 9s ease-in-out infinite',
          animationDelay: '4.5s',
          opacity: 0,
        }}
      />
    </div>
  );
}
