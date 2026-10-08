import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { X, Printer, Heart, Copy, Check } from 'lucide-react';
import { Sparkle4, CrescentMoon } from './CelestialIcons';

export default function QRCodeModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (url) {
      QRCode.toDataURL(url, {
        width: 260,
        margin: 2,
        color: {
          dark: '#4B1D8F',
          light: '#FFFFFF',
        },
      })
        .then((data) => setQrDataUrl(data))
        .catch((err) => console.error(err));
    }
  }, [url]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(42, 16, 56, 0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '430px',
          borderRadius: '28px',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          border: '2px solid #7B3FE4',
          boxShadow: '0 25px 60px rgba(42, 16, 56, 0.25)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#F3ECFF',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7B3FE4',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Section Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#7B3FE4',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          <CrescentMoon size={14} color="#7B3FE4" />
          <span>Moonlit Carnival Card</span>
        </div>

        <h3
          className="font-script"
          style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#4B1D8F',
            marginBottom: '0.35rem',
            lineHeight: 1.1,
          }}
        >
          Printable QR Code Card
        </h3>

        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.84rem',
            marginBottom: '1.25rem',
            lineHeight: 1.45,
          }}
        >
          Print this out or tuck it into her birthday card so Matsurika can scan and open it on her phone!
        </p>

        {/* Card Preview Box */}
        <div
          style={{
            backgroundColor: '#FFFDF9',
            borderRadius: '20px',
            padding: '1.5rem 1rem',
            margin: '0 auto 1.25rem auto',
            maxWidth: '310px',
            boxShadow: '0 10px 25px rgba(123, 63, 228, 0.1)',
            border: '2px solid transparent',
            position: 'relative',
          }}
        >
          {/* Striped Border on Card */}
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '22px',
              background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
              zIndex: -1,
            }}
          />

          <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', color: '#B3122F', textTransform: 'uppercase' }}>
            ✦ October 9 • 19th Birthday ✦
          </div>

          <div
            className="font-script"
            style={{
              fontSize: '2rem',
              color: '#4B1D8F',
              margin: '0.1rem 0',
              fontWeight: 700,
            }}
          >
            For Matsurika
          </div>

          {qrDataUrl && (
            <img
              src={qrDataUrl}
              alt="Scan to open birthday surprise"
              style={{
                width: '180px',
                height: '180px',
                margin: '0.5rem auto',
                display: 'block',
                borderRadius: '12px',
                border: '1.5px solid #D9C7FF',
              }}
            />
          )}

          <div style={{ fontSize: '0.75rem', color: '#5E4A6E', fontWeight: 600 }}>
            Scan on your phone to open your surprise ✨
          </div>

          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#2A1038',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
            }}
          >
            <span>With all my love, Kuttush</span>
            <Heart size={12} color="#E0314B" fill="#E0314B" />
          </div>
        </div>

        {/* Change URL Input */}
        <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
          <label style={{ fontSize: '0.74rem', color: '#5E4A6E', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
            App Link (paste deployed URL to refresh QR):
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://matsurika19.vercel.app"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '10px',
                backgroundColor: '#F9F5FF',
                border: '1.5px solid #D9C7FF',
                color: '#2A1038',
                fontSize: '0.82rem',
                outline: 'none',
              }}
            />
            <button
              onClick={handleCopy}
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                backgroundColor: '#F3ECFF',
                border: '1.5px solid #D9C7FF',
                color: '#7B3FE4',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handlePrint}
          className="carnival-btn"
          style={{
            width: '100%',
            padding: '0.85rem',
            fontSize: '0.95rem',
          }}
        >
          <Printer size={16} />
          <span>Print Card to Give Her 🖨️</span>
        </button>
      </div>
    </div>
  );
}
