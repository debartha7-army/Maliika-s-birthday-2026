import React, { useState } from 'react';
import { Gift, Utensils, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONTENT } from '../content';
import { submitWish } from '../api';
import { Sparkle4, Sparkle5, CrescentMoon, SectionRibbonBanner } from './CelestialIcons';

export default function FinalSurprise() {
  const { finalSurprise } = BIRTHDAY_CONTENT;
  const [isOpen, setIsOpen] = useState(false);
  const [wishText, setWishText] = useState('');
  const [wishSubmitted, setWishSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerCarnivalFireworks = () => {
    const end = Date.now() + 3.8 * 1000;
    // Purple, red, gold, white with stars
    const colors = ['#7B3FE4', '#E0314B', '#F5C26B', '#FFFFFF', '#D9C7FF', '#FFD3DA'];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: colors,
        shapes: ['star', 'circle'],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: colors,
        shapes: ['star', 'circle'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleOpenGift = () => {
    setIsOpen(true);
    triggerCarnivalFireworks();
  };

  const handleWishSubmit = async (e) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    setIsSubmitting(true);
    await submitWish({
      sender: 'Matsurika',
      wish: wishText.trim(),
      reaction: '🌙✨',
    });
    setIsSubmitting(false);
    setWishSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.75 },
      colors: ['#7B3FE4', '#E0314B', '#F5C26B', '#FFFFFF'],
      shapes: ['star'],
    });
  };

  return (
    <section
      style={{
        padding: '3rem 1.25rem 5rem 1.25rem',
        maxWidth: '520px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      {/* Top Carnival Section Banner */}
      <SectionRibbonBanner title="The Grand Finale" />

      <div style={{ marginBottom: '2.5rem' }}>
        <h2
          className="font-script"
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#4B1D8F',
            marginBottom: '0.4rem',
            lineHeight: 1.15,
          }}
        >
          Your Birthday Gift
        </h2>
        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.94rem',
            lineHeight: 1.6,
          }}
        >
          {finalSurprise.buttonPrompt}
        </p>
      </div>

      {/* Striped Gift-Box Style Button */}
      {!isOpen && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Subtle Celestial Glow Aura */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, rgba(123, 63, 228, 0.4), rgba(224, 49, 75, 0.35), rgba(245, 194, 107, 0.4))',
              filter: 'blur(12px)',
              animation: 'carnivalGlow 2.5s infinite alternate',
            }}
          />

          {/* Striped Gift Box Container */}
          <div
            onClick={handleOpenGift}
            className="animate-float-moon"
            style={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '24px',
              padding: '4px',
              background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 14px, #FFF8F3 14px, #FFF8F3 20px, #E0314B 20px, #E0314B 34px, #FFF8F3 34px, #FFF8F3 40px)',
              boxShadow: '0 16px 36px rgba(123, 63, 228, 0.28)',
              transition: 'transform 0.2s ease',
            }}
          >
            {/* Inner Button Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.25rem 2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ribbon Bow Indicator */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#7B3FE4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(123, 63, 228, 0.3)',
                }}
              >
                <Gift size={24} color="#FFFFFF" />
              </div>

              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', color: '#E0314B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Tap to Unwrap
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2A1038' }}>
                  {finalSurprise.buttonText}
                </div>
              </div>

              <Sparkle4 size={20} color="#F5C26B" className="animate-twinkle" />
            </div>
          </div>
        </div>
      )}

      {/* Revealed Gift Card */}
      {isOpen && (
        <div
          className="carnival-card"
          style={{
            borderRadius: '28px',
            padding: '2.5rem 1.75rem',
            textAlign: 'center',
            position: 'relative',
            backgroundColor: '#FFFFFF',
            border: '2px solid #7B3FE4',
            boxShadow: '0 25px 50px rgba(75, 29, 143, 0.16)',
            animation: 'fadeIn 0.5s ease',
          }}
        >
          {/* Top Striped Edge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 12px, #FFF8F3 12px, #FFF8F3 16px, #E0314B 16px, #E0314B 28px, #FFF8F3 28px, #FFF8F3 32px)',
            }}
          />

          {/* Top Icon Badge */}
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              margin: '0 auto 1.25rem auto',
              backgroundColor: '#F3ECFF',
              border: '2px solid #7B3FE4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(123, 63, 228, 0.2)',
            }}
          >
            <Utensils size={30} color="#7B3FE4" />
          </div>

          <h3
            className="font-script"
            style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#4B1D8F',
              marginBottom: '0.75rem',
              lineHeight: 1.15,
            }}
          >
            {finalSurprise.celebrationTitle}
          </h3>

          {/* Mutton Kosha Highlight Box with Striped Border */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '18px',
              backgroundColor: '#FFF0F3',
              border: '1.5px solid #FFD3DA',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 14px rgba(224, 49, 75, 0.08)',
            }}
          >
            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#B3122F',
                lineHeight: 1.5,
              }}
            >
              {finalSurprise.revealMessage}
            </p>
          </div>

          {/* Plan Details List */}
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '1.75rem',
            }}
          >
            {finalSurprise.details.map((detail, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.9rem',
                  color: '#2A1038',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '12px',
                  backgroundColor: '#F9F5FF',
                  border: '1px solid #D9C7FF',
                  fontWeight: 500,
                }}
              >
                <Sparkle4 size={14} color="#7B3FE4" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              color: '#5E4A6E',
              fontSize: '0.92rem',
              fontStyle: 'italic',
              lineHeight: 1.6,
              marginBottom: '2rem',
              borderTop: '1px dashed #D9C7FF',
              paddingTop: '1.25rem',
            }}
          >
            "{finalSurprise.closingNote}"
          </p>

          {/* Make a Birthday Wish Box */}
          <div
            style={{
              borderRadius: '20px',
              padding: '1.25rem',
              backgroundColor: '#F7F2FF',
              border: '1.5px solid #D9C7FF',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#4B1D8F',
                fontSize: '0.88rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              <CrescentMoon size={16} color="#7B3FE4" />
              <span>Make Your 19th Birthday Wish ✨</span>
            </div>

            {!wishSubmitted ? (
              <form onSubmit={handleWishSubmit}>
                <textarea
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder="Close your eyes, make a wish under the carnival moon..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D9C7FF',
                    color: '#2A1038',
                    fontSize: '0.88rem',
                    resize: 'none',
                    outline: 'none',
                    marginBottom: '0.75rem',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !wishText.trim()}
                  className="carnival-btn"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.88rem',
                    cursor: wishText.trim() ? 'pointer' : 'not-allowed',
                  }}
                >
                  <Send size={14} />
                  <span>{isSubmitting ? 'Sending to the Moon...' : 'Release Wish to the Moonlit Sky ✨'}</span>
                </button>
              </form>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#4B1D8F',
                  fontSize: '0.88rem',
                  padding: '0.75rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #D9C7FF',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={20} color="#7B3FE4" />
                <span>Your wish has been cast into the moonlit sky! Happy 19th Birthday, Matsu-Chan. ❤️</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
