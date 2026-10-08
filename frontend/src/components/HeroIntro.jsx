import React, { useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4, Sparkle5, CrescentMoon, CornerSticker } from './CelestialIcons';

export default function HeroIntro() {
  const { recipient, intro } = BIRTHDAY_CONTENT;

  useEffect(() => {
    // Moonlit Carnival Confetti: purple, red, gold, and white with stars!
    const count = 180;
    const carnivalColors = ['#7B3FE4', '#E0314B', '#F5C26B', '#FFFFFF', '#D9C7FF', '#FFD3DA'];

    confetti({
      particleCount: count,
      spread: 90,
      origin: { y: 0.65 },
      colors: carnivalColors,
      shapes: ['star', 'circle'],
    });
  }, []);

  const handleScrollDown = () => {
    const timelineEl = document.getElementById('timeline-section');
    if (timelineEl) {
      timelineEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.25rem 2.5rem 1.25rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Top Carnival Striped Canopy / Ribbon */}
      <div
        style={{
          width: '90px',
          height: '6px',
          margin: '0 auto 1rem auto',
          background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 10px, #FFF8F3 10px, #FFF8F3 14px, #E0314B 14px, #E0314B 24px, #FFF8F3 24px, #FFF8F3 28px)',
          borderRadius: '999px',
        }}
      />

      {/* Date Pill Tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.35rem 1rem',
          borderRadius: '999px',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #D9C7FF',
          color: '#4B1D8F',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '2rem',
          letterSpacing: '0.04em',
          boxShadow: '0 4px 15px rgba(123, 63, 228, 0.1)',
        }}
      >
        <Sparkle4 size={14} color="#F5C26B" />
        <span>{intro.tagline}</span>
        <Sparkle4 size={14} color="#F5C26B" />
      </div>

      {/* Large Celestial Crescent Moon with Photo and Twinkling Stars */}
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '240px',
          margin: '0 auto 1.75rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Large Decorative Crescent Moon Illustration encircling the portrait */}
        <div
          style={{
            position: 'absolute',
            inset: '-18px',
            pointerEvents: 'none',
            zIndex: 1,
            animation: 'floatMoon 7s ease-in-out infinite',
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <defs>
              <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9C7FF" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#F5C26B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFD3DA" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M82,48 C82,68 66,85 46,85 C32,85 19,77 12,65 C17,73 28,78 40,78 C60,78 75,63 75,43 C75,30 68,19 58,13 C72,17 82,31 82,48 Z"
              fill="url(#moonGrad)"
              filter="drop-shadow(0 4px 12px rgba(123, 63, 228, 0.2))"
            />
          </svg>
        </div>

        {/* Twinkling Stars surrounding the Moon */}
        <div style={{ position: 'absolute', top: '-10px', left: '15px', zIndex: 3 }}>
          <Sparkle4 size={18} color="#F5C26B" className="animate-twinkle" />
        </div>
        <div style={{ position: 'absolute', bottom: '15px', left: '-12px', zIndex: 3 }}>
          <Sparkle5 size={16} color="#7B3FE4" className="animate-twinkle" style={{ animationDelay: '1s' }} />
        </div>
        <div style={{ position: 'absolute', top: '15px', right: '-10px', zIndex: 3 }}>
          <Sparkle4 size={20} color="#E0314B" className="animate-twinkle" style={{ animationDelay: '2s' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '5px', right: '25px', zIndex: 3 }}>
          <Sparkle4 size={14} color="#F5C26B" className="animate-twinkle" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Polaroid/Carnival Photo Card with Thin Striped Border, slight tilt & sticker */}
        <div
          className="photo-tilt-left"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '155px',
            height: '185px',
            backgroundColor: '#FFFFFF',
            padding: '7px 7px 22px 7px',
            borderRadius: '16px',
            boxShadow: '0 16px 36px rgba(75, 29, 143, 0.16)',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
          }}
        >
          {/* Carnival Striped Border Outline */}
          <div
            style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '19px',
              background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
              zIndex: -1,
            }}
          />

          {/* Corner Moon Sticker */}
          <CornerSticker type="moon" />

          <div
            style={{
              width: '100%',
              height: '140px',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: '#F3ECFF',
            }}
          >
            <img
              src="/photos/couple3.jpg"
              alt="Kuttush and Matsurika"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Mini polaroid caption */}
          <div
            className="font-handwriting"
            style={{
              marginTop: '4px',
              fontSize: '0.9rem',
              color: '#4B1D8F',
              fontWeight: 700,
            }}
          >
            Kuttush & Matsu-Chan ✨
          </div>
        </div>
      </div>

      {/* Main Elegant Script Heading in Deep Purple */}
      <h1
        className="font-script"
        style={{
          fontSize: '3.4rem',
          lineHeight: 1.1,
          marginBottom: '0.4rem',
          color: '#4B1D8F',
          textShadow: '0 2px 10px rgba(123, 63, 228, 0.15)',
        }}
      >
        Happy 19th Birthday
      </h1>

      {/* Recipient Name */}
      <h2
        className="font-body"
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#2A1038',
          letterSpacing: '0.02em',
          marginBottom: '1rem',
        }}
      >
        {recipient.name}
      </h2>

      {/* Subtitle in Soft Grey-Purple with comfortable line-height */}
      <p
        style={{
          fontSize: '1rem',
          color: '#5E4A6E',
          maxWidth: '380px',
          margin: '0 auto 2.25rem auto',
          lineHeight: 1.65,
        }}
      >
        {intro.subHeading}
      </p>

      {/* Button: rounded, purple with red stripe accent, gentle glow */}
      <button
        onClick={handleScrollDown}
        className="carnival-btn"
        style={{
          padding: '0.85rem 1.6rem',
          fontSize: '0.92rem',
        }}
      >
        <span>{intro.scrollPrompt}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
