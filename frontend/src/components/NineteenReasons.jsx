import React, { useState } from 'react';
import { Heart, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4, Sparkle5, CrescentMoon, MoonDivider, SectionRibbonBanner } from './CelestialIcons';

export default function NineteenReasons() {
  const { reasons } = BIRTHDAY_CONTENT;
  const [flippedCards, setFlippedCards] = useState({});

  const triggerStarsCelebration = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#7B3FE4', '#E0314B', '#F5C26B', '#FFFFFF', '#D9C7FF', '#FFD3DA'],
      shapes: ['star', 'circle'],
    });
  };

  const toggleCard = (id) => {
    setFlippedCards((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      const totalFlipped = Object.values(updated).filter(Boolean).length;
      if (totalFlipped === reasons.length) {
        triggerStarsCelebration();
      }
      return updated;
    });
  };

  const flipAll = () => {
    const all = {};
    reasons.forEach((r) => {
      all[r.id] = true;
    });
    setFlippedCards(all);
    triggerStarsCelebration();
  };

  const resetAll = () => {
    setFlippedCards({});
  };

  const flippedCount = Object.values(flippedCards).filter(Boolean).length;
  const progressPercent = Math.round((flippedCount / reasons.length) * 100);

  return (
    <section
      style={{
        padding: '3rem 1.25rem 4rem 1.25rem',
        maxWidth: '520px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Top Carnival Section Banner */}
      <SectionRibbonBanner title="19 Years • 19 Wonders" />

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2
          className="font-script"
          style={{
            fontSize: '2.8rem',
            fontWeight: 700,
            color: '#4B1D8F',
            marginBottom: '0.4rem',
            lineHeight: 1.15,
          }}
        >
          19 Reasons I Love You
        </h2>
        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.92rem',
            lineHeight: 1.6,
          }}
        >
          One for every luminous year. Purple holds the secret, red reveals the heart.
        </p>

        {/* Progress Tracker Card with Striped Progress Bar */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.15rem',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #D9C7FF',
            boxShadow: '0 8px 24px rgba(123, 63, 228, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.6rem',
              fontSize: '0.86rem',
            }}
          >
            <span style={{ color: '#2A1038', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <CrescentMoon size={14} color="#7B3FE4" />
              <span>Cards Flipped: {flippedCount} / {reasons.length}</span>
            </span>
            <span style={{ color: '#E0314B', fontWeight: 800 }}>
              {progressPercent}%
            </span>
          </div>

          {/* Striped Carnival Progress Bar */}
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#F3ECFF',
              borderRadius: '999px',
              overflow: 'hidden',
              padding: '1px',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 8px, #E0314B 8px, #E0314B 16px, #F5C26B 16px, #F5C26B 22px)',
                borderRadius: '999px',
                transition: 'width 0.4s ease',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.25rem',
              marginTop: '0.85rem',
            }}
          >
            <button
              onClick={flipAll}
              style={{
                background: 'none',
                border: 'none',
                color: '#7B3FE4',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <Sparkles size={13} color="#F5C26B" />
              <span>Reveal All Cards</span>
            </button>
            {flippedCount > 0 && (
              <button
                onClick={resetAll}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8E7A9E',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <RotateCcw size={13} />
                <span>Reset Cards</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 19 Flipping Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))',
          gap: '1.1rem',
        }}
      >
        {reasons.map((item) => {
          const isFlipped = !!flippedCards[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleCard(item.id)}
              className="perspective-1000"
              style={{
                height: '190px',
                cursor: 'pointer',
              }}
            >
              <div
                className="transform-style-3d"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front Side: PURPLE with a CELESTIAL STAR PATTERN */}
                <div
                  className="backface-hidden"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    padding: '1rem 0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: '#7B3FE4',
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(245, 194, 107, 0.15) 0%, transparent 25%),
                      radial-gradient(circle at 80% 80%, rgba(255, 211, 218, 0.12) 0%, transparent 25%)
                    `,
                    boxShadow: '0 10px 25px rgba(123, 63, 228, 0.28)',
                    border: '2px solid #D9C7FF',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Star SVG Pattern Watermark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      opacity: 0.45,
                    }}
                  >
                    <Sparkle4 size={14} color="#F5C26B" />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      opacity: 0.45,
                    }}
                  >
                    <Sparkle5 size={14} color="#FFFFFF" />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      opacity: 0.3,
                    }}
                  >
                    <Sparkle4 size={10} color="#D9C7FF" />
                  </div>

                  <span
                    className="font-script"
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                      textShadow: '0 2px 6px rgba(42, 16, 56, 0.3)',
                    }}
                  >
                    #{item.id}
                  </span>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: '#F3ECFF',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                    }}
                  >
                    Reason #{item.id}
                  </p>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.68rem',
                      color: '#4B1D8F',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '999px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Sparkle4 size={9} color="#F5C26B" />
                    <span>Tap to flip</span>
                  </div>
                </div>

                {/* Back Side: RED with a MOON PATTERN */}
                <div
                  className="backface-hidden rotate-y-180"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    padding: '0.9rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#E0314B',
                    backgroundImage: `
                      radial-gradient(circle at 15% 85%, rgba(243, 236, 255, 0.15) 0%, transparent 30%),
                      radial-gradient(circle at 85% 15%, rgba(245, 194, 107, 0.15) 0%, transparent 30%)
                    `,
                    boxShadow: '0 10px 25px rgba(224, 49, 75, 0.28)',
                    border: '2px solid #FFD3DA',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Moon Watermark in the corner */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '8px',
                      opacity: 0.5,
                    }}
                  >
                    <CrescentMoon size={16} color="#FFFFFF" />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#FFF0F3',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      #{item.id} • {item.title}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#FFFFFF',
                      lineHeight: 1.45,
                      fontWeight: 500,
                      margin: '0.25rem 0',
                    }}
                  >
                    {item.text}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.66rem',
                      color: '#FFD3DA',
                    }}
                  >
                    <Heart size={10} color="#FFFFFF" fill="#FFFFFF" />
                    <span>Tap to close</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {flippedCount === reasons.length && (
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            borderRadius: '24px',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            border: '2px solid #7B3FE4',
            boxShadow: '0 15px 35px rgba(123, 63, 228, 0.18)',
            animation: 'fadeIn 0.5s ease',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#4B1D8F',
              fontWeight: 800,
              fontSize: '1.15rem',
              marginBottom: '0.4rem',
            }}
          >
            <CheckCircle2 size={22} color="#7B3FE4" />
            <span>All 19 Wonders Unlocked!</span>
            <Sparkle4 size={16} color="#F5C26B" />
          </div>
          <p style={{ color: '#5E4A6E', fontSize: '0.9rem', lineHeight: 1.55 }}>
            And the truth is, Matsurika, I could count nineteen thousand more under every star in the sky. ❤️
          </p>
        </div>
      )}

      {/* Moon Section Divider */}
      <MoonDivider />
    </section>
  );
}
