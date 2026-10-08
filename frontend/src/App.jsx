import React, { useState, useEffect } from 'react';
import StarBackground from './components/StarBackground';
import LockScreen from './components/LockScreen';
import MusicPlayer from './components/MusicPlayer';
import HeroIntro from './components/HeroIntro';
import TimelineSection from './components/TimelineSection';
import PhotoGallery from './components/PhotoGallery';
import NineteenReasons from './components/NineteenReasons';
import LoveLetter from './components/LoveLetter';
import FinalSurprise from './components/FinalSurprise';
import QRCodeModal from './components/QRCodeModal';
import { QrCode, Heart } from 'lucide-react';
import { BIRTHDAY_CONTENT } from './content';
import { checkBackendHealth } from './api';
import { Sparkle4, CrescentMoon } from './components/CelestialIcons';
import './App.css';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [backendOnline, setBackendOnline] = useState(false);
  const { recipient } = BIRTHDAY_CONTENT;

  useEffect(() => {
    checkBackendHealth().then((res) => {
      if (res && res.status === 'online') {
        setBackendOnline(true);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen text-[#5E4A6E] selection:bg-[#E0314B] selection:text-white">
      {/* Moonlit Carnival Celestial Ambient Sky */}
      <StarBackground />

      {/* Floating Ambient Music Player */}
      <MusicPlayer isUnlocked={isUnlocked} />

      {/* 1. Lock Screen (Displayed until unlocked) */}
      {!isUnlocked ? (
        <LockScreen onUnlock={() => setIsUnlocked(true)} backendOnline={backendOnline} />
      ) : (
        /* Main Birthday Journey */
        <div className="relative z-10 animate-fade-in">
          {/* Top Sticky Header */}
          <header
            style={{
              position: 'fixed',
              top: '1rem',
              left: '1rem',
              zIndex: 40,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #D9C7FF',
                boxShadow: '0 6px 18px rgba(123, 63, 228, 0.12)',
              }}
            >
              <CrescentMoon size={15} color="#7B3FE4" />
              <span className="font-script" style={{ fontSize: '1.4rem', color: '#4B1D8F', fontWeight: 700 }}>
                {recipient.nickname}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#E0314B', fontWeight: 800 }}>• 19</span>
            </div>

            {/* Print Card Button */}
            <button
              onClick={() => setShowQRModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #FFD3DA',
                color: '#E0314B',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(224, 49, 75, 0.12)',
              }}
            >
              <QrCode size={14} color="#E0314B" />
              <span>Print Card</span>
            </button>
          </header>

          {/* 2. Hero Intro with Large Crescent Moon */}
          <HeroIntro />

          {/* 3. "Since Class 11" Story Timeline */}
          <TimelineSection />

          {/* 4. Photo Gallery with Carnival Pavilion Framing */}
          <PhotoGallery />

          {/* 5. 19 Reasons I Love You (Purple Star & Red Moon Flip Cards) */}
          <NineteenReasons />

          {/* 6. Handwritten Love Letter on Cream Paper Card */}
          <LoveLetter />

          {/* 8. Final Surprise with Striped Gift Box Button & Fireworks */}
          <FinalSurprise />

          {/* Moonlit Carnival Footer */}
          <footer
            style={{
              textAlign: 'center',
              padding: '3rem 1.25rem 4.5rem 1.25rem',
              borderTop: '1px dashed #D9C7FF',
              color: '#8E7A9E',
              fontSize: '0.85rem',
              position: 'relative',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                marginBottom: '0.5rem',
              }}
            >
              <span className="font-script" style={{ color: '#4B1D8F', fontSize: '1.8rem', fontWeight: 700 }}>
                Kuttush
              </span>
              <Heart size={16} color="#E0314B" fill="#E0314B" />
              <span className="font-script" style={{ color: '#4B1D8F', fontSize: '1.8rem', fontWeight: 700 }}>
                Matsurika
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#5E4A6E', fontWeight: 500 }}>
              Under the Moonlit Carnival Sky • Class 11 to Eternity ✨
            </p>
          </footer>

          {/* Printable QR Code Modal */}
          <QRCodeModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
        </div>
      )}
    </div>
  );
}
