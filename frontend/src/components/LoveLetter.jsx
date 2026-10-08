import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, RotateCcw, Heart } from 'lucide-react';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4, CrescentMoon, MoonDivider, SectionRibbonBanner } from './CelestialIcons';

export default function LoveLetter() {
  const { loveLetter } = BIRTHDAY_CONTENT;

  // Format letter text
  const fullText = [
    loveLetter.salutation,
    "",
    ...loveLetter.paragraphs,
    "",
    "Forever and always,",
    "Yours, Kuttush ❤️",
    loveLetter.date,
  ].join("\n\n");

  const [displayedLength, setDisplayedLength] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying && displayedLength < fullText.length) {
      timerRef.current = setTimeout(() => {
        const nextStep = fullText[displayedLength] === '\n' ? 3 : 1;
        setDisplayedLength((prev) => Math.min(prev + nextStep, fullText.length));
      }, 22);
    }
    return () => clearTimeout(timerRef.current);
  }, [isPlaying, displayedLength, fullText]);

  const handleSkip = () => {
    setDisplayedLength(fullText.length);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setDisplayedLength(0);
    setIsPlaying(true);
  };

  const togglePause = () => {
    setIsPlaying(!isPlaying);
  };

  const isCompleted = displayedLength >= fullText.length;
  const currentText = fullText.slice(0, displayedLength);

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
      <SectionRibbonBanner title="Written in the Moonlight" />

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
          A Letter For You
        </h2>
        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.92rem',
            lineHeight: 1.6,
          }}
        >
          Every word penned for the girl who made Class 11 unforgettable.
        </p>
      </div>

      {/* Cream Paper Card with Striped Top Edge */}
      <div
        className="paper-card"
        style={{
          backgroundColor: '#FFFDF9',
          borderRadius: '24px',
          padding: '0 0 2rem 0',
          overflow: 'hidden',
          boxShadow: '0 20px 45px rgba(75, 29, 143, 0.1), 0 4px 14px rgba(224, 49, 75, 0.05)',
          border: '1.5px solid #D9C7FF',
        }}
      >
        {/* Striped Top Edge Ribbon */}
        <div
          style={{
            height: '10px',
            width: '100%',
            background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 14px, #FFF8F3 14px, #FFF8F3 20px, #E0314B 20px, #E0314B 34px, #FFF8F3 34px, #FFF8F3 40px)',
          }}
        />

        {/* Wax Seal & Controls Header */}
        <div
          style={{
            padding: '1.5rem 1.5rem 1rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px dashed #D9C7FF',
          }}
        >
          {/* Wax Seal Emblem */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#E0314B',
                boxShadow: '0 4px 12px rgba(224, 49, 75, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #FFD3DA',
              }}
            >
              <Sparkle4 size={18} color="#FFFFFF" />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#4B1D8F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Matsu-Chan • 19
              </div>
              <div style={{ fontSize: '0.7rem', color: '#8E7A9E' }}>
                Moonlit Carnival Letter
              </div>
            </div>
          </div>

          {/* Typewriter Speed & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {!isCompleted && (
              <button
                onClick={togglePause}
                title={isPlaying ? 'Pause' : 'Play'}
                style={{
                  backgroundColor: '#F3ECFF',
                  border: '1px solid #D9C7FF',
                  color: '#7B3FE4',
                  borderRadius: '10px',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            )}

            {!isCompleted && (
              <button
                onClick={handleSkip}
                title="Show full letter"
                style={{
                  backgroundColor: '#F3ECFF',
                  border: '1px solid #D9C7FF',
                  color: '#7B3FE4',
                  borderRadius: '10px',
                  padding: '0 0.65rem',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <FastForward size={14} />
                <span>Show All</span>
              </button>
            )}

            {isCompleted && (
              <button
                onClick={handleRestart}
                title="Replay Letter"
                style={{
                  backgroundColor: '#F3ECFF',
                  border: '1px solid #D9C7FF',
                  color: '#7B3FE4',
                  borderRadius: '10px',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Handwritten Letter Body */}
        <div
          className="font-handwriting"
          style={{
            padding: '1.75rem 1.5rem',
            minHeight: '280px',
            whiteSpace: 'pre-line',
            color: '#2A1038',
            fontSize: '1.35rem',
            lineHeight: 1.7,
            position: 'relative',
          }}
        >
          {currentText}
          {!isCompleted && (
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.2em',
                backgroundColor: '#E0314B',
                marginLeft: '4px',
                verticalAlign: 'text-bottom',
                animation: 'twinkleStar 0.8s infinite',
              }}
            />
          )}
        </div>

        {/* Letter Footer */}
        <div
          style={{
            margin: '0 1.5rem',
            paddingTop: '1rem',
            borderTop: '1px dashed #D9C7FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: '#8E7A9E',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkle4 size={12} color="#F5C26B" />
            <span>October 9, 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E0314B', fontWeight: 600 }}>
            <span>Sealed with Love</span>
            <Heart size={12} color="#E0314B" fill="#E0314B" />
          </div>
        </div>
      </div>

      {/* Moon Section Divider */}
      <MoonDivider />
    </section>
  );
}
