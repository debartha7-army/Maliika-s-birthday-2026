import React, { useState } from 'react';
import { Sparkles, Heart, AlertCircle, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_CONTENT } from '../content';
import { verifyUnlock } from '../api';
import { Sparkle4, CrescentMoon } from './CelestialIcons';

export default function LockScreen({ onUnlock, onUserInteraction, backendOnline }) {
  const [answer, setAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const lockData = BIRTHDAY_CONTENT.lockScreen;

  const triggerCarnivalConfetti = () => {
    // Confetti in purple, red, gold, and white with stars!
    const defaults = {
      colors: ['#7B3FE4', '#E0314B', '#F5C26B', '#FFFFFF', '#D9C7FF', '#FFD3DA'],
      shapes: ['star', 'circle'],
    };

    confetti({
      ...defaults,
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer.trim()) return;

    if (onUserInteraction) {
      onUserInteraction();
    }

    setIsLoading(true);
    setErrorMsg('');

    const normalized = answer
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, ' ');

    let isUnlocked = false;

    // 1. Verify with backend MVC (bcrypt logic)
    const backendResult = await verifyUnlock(normalized);

    if (backendResult) {
      if (backendResult.ok && backendResult.data?.data?.unlocked) {
        isUnlocked = true;
      } else if (backendResult.data?.errors?.hint) {
        setErrorMsg(backendResult.data.errors.hint);
      }
    }

    // 2. Client fallback
    if (!isUnlocked && !errorMsg) {
      const matchesLocal = lockData.acceptedAnswers.some((validAns) => {
        const validNorm = validAns.toLowerCase().trim().replace(/[^\w\s]/gi, '');
        return normalized === validNorm || normalized.includes(validNorm);
      });

      if (matchesLocal) {
        isUnlocked = true;
      } else {
        setErrorMsg(lockData.wrongAnswerHint);
      }
    }

    setIsLoading(false);

    if (isUnlocked) {
      triggerCarnivalConfetti();
      setTimeout(() => {
        onUnlock();
      }, 500);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className={`carnival-card ${isShaking ? 'animate-shake' : ''}`}
        style={{
          width: '100%',
          maxWidth: '430px',
          padding: '2.5rem 1.75rem',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          boxShadow: '0 20px 45px rgba(75, 29, 143, 0.12), 0 4px 14px rgba(224, 49, 75, 0.06)',
          border: '1px solid rgba(123, 63, 228, 0.18)',
        }}
      >
        {/* Top Carnival Striped Accent */}
        <div
          style={{
            height: '6px',
            width: '64px',
            margin: '0 auto 1.5rem auto',
            background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
            borderRadius: '999px',
          }}
        />

        {/* Crescent Moon Lock Icon */}
        <div
          style={{
            width: '74px',
            height: '74px',
            margin: '0 auto 1.25rem auto',
            borderRadius: '50%',
            backgroundColor: '#F3ECFF',
            border: '2px solid #7B3FE4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(123, 63, 228, 0.22)',
            position: 'relative',
          }}
        >
          <CrescentMoon size={36} color="#7B3FE4" className="animate-float-moon" />
          <div style={{ position: 'absolute', top: '10px', right: '12px' }}>
            <Sparkle4 size={14} color="#F5C26B" />
          </div>
        </div>

        {/* Title in Deep Purple Script */}
        <h1
          className="font-script"
          style={{
            fontSize: '2.4rem',
            fontWeight: 700,
            color: '#2A1038',
            marginBottom: '0.4rem',
            lineHeight: 1.15,
          }}
        >
          {lockData.title}
        </h1>

        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.9rem',
            marginBottom: '1.75rem',
            lineHeight: 1.5,
          }}
        >
          {lockData.subtitle}
        </p>

        {/* Question & Striped Input Frame */}
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#2A1038',
                fontSize: '0.92rem',
                fontWeight: 600,
                marginBottom: '0.6rem',
              }}
            >
              <Sparkle4 size={14} color="#E0314B" />
              <span>{lockData.question}</span>
            </label>

            {/* Input box inside a striped carnival frame */}
            <div
              style={{
                padding: '3px',
                borderRadius: '16px',
                background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
                boxShadow: '0 4px 14px rgba(123, 63, 228, 0.08)',
              }}
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder={lockData.inputPlaceholder}
                autoComplete="off"
                autoFocus
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '13px',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  color: '#2A1038',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontWeight: 500,
                }}
              />
            </div>
          </div>

          {/* Playful Hint in Soft Tint */}
          {errorMsg && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                backgroundColor: '#FFF0F3',
                border: '1px solid #FFD3DA',
                color: '#B3122F',
                fontSize: '0.84rem',
                textAlign: 'left',
                marginBottom: '1.25rem',
                lineHeight: 1.45,
              }}
            >
              <AlertCircle size={16} color="#E0314B" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Almost! </strong>
                {errorMsg}
              </div>
            </div>
          )}

          {/* Rounded Purple Button with Red Stripe Accent */}
          <button
            type="submit"
            disabled={isLoading || !answer.trim()}
            className="carnival-btn"
            style={{
              width: '100%',
              padding: '0.95rem',
              fontSize: '1rem',
              cursor: answer.trim() ? 'pointer' : 'not-allowed',
              opacity: answer.trim() ? 1 : 0.65,
            }}
          >
            {isLoading ? (
              <span>Checking the Stars...</span>
            ) : (
              <>
                <Unlock size={18} />
                <span>{lockData.unlockButtonText}</span>
              </>
            )}
          </button>
        </form>

        {/* Backend Connectivity Status Badge */}
        <div
          style={{
            marginTop: '1.25rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '4px 12px',
            borderRadius: '999px',
            backgroundColor: backendOnline ? 'rgba(123, 63, 228, 0.08)' : 'rgba(94, 74, 110, 0.08)',
            border: backendOnline ? '1px solid #D9C7FF' : '1px solid #E5DFEC',
            fontSize: '0.72rem',
            color: backendOnline ? '#4B1D8F' : '#8E7A9E',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: backendOnline ? '#7B3FE4' : '#8E7A9E',
            }}
          />
          <span>{backendOnline ? 'Moonlit Server Connected' : 'Moonlit Standalone'}</span>
        </div>

        {/* Footer Romantic Note */}
        <div
          style={{
            marginTop: '1.25rem',
            color: '#8E7A9E',
            fontSize: '0.78rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
          }}
        >
          <span>Crafted for you by</span>
          <span style={{ color: '#E0314B', fontWeight: 600 }}>Kuttush</span>
          <Heart size={12} color="#E0314B" fill="#E0314B" />
        </div>
      </div>
    </div>
  );
}
