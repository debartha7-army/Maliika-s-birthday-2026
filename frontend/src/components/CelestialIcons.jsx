import React from 'react';

/**
 * 4-Point Celestial Sparkle Star SVG
 */
export function Sparkle4({ size = 18, color = 'currentColor', className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
    >
      <path d="M12 0 C12 6.5 17.5 12 24 12 C17.5 12 12 17.5 12 24 C12 17.5 6.5 12 0 12 C6.5 12 12 6.5 12 0 Z" />
    </svg>
  );
}

/**
 * 5-Point Sparkle Star SVG
 */
export function Sparkle5({ size = 18, color = 'currentColor', className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
    >
      <path d="M12 1.5 L14.8 8.6 L22.4 9.1 L16.6 14.1 L18.4 21.5 L12 17.5 L5.6 21.5 L7.4 14.1 L1.6 9.1 L9.2 8.6 Z" />
    </svg>
  );
}

/**
 * Elegant Crescent Moon SVG
 */
export function CrescentMoon({ size = 20, color = 'currentColor', className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79 Z" />
    </svg>
  );
}

/**
 * Section Divider with Crescent Moon & Stars
 */
export function MoonDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.8rem',
        margin: '2.5rem auto',
        maxWidth: '280px',
      }}
    >
      {/* Left Striped Line */}
      <div
        style={{
          flex: 1,
          height: '2px',
          background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 6px, #FFF8F3 6px, #FFF8F3 10px, #E0314B 10px, #E0314B 16px)',
          borderRadius: '999px',
          opacity: 0.7,
        }}
      />

      <Sparkle4 size={12} color="#F5C26B" />
      <CrescentMoon size={18} color="#7B3FE4" className="animate-float-moon" />
      <Sparkle4 size={12} color="#F5C26B" />

      {/* Right Striped Line */}
      <div
        style={{
          flex: 1,
          height: '2px',
          background: 'repeating-linear-gradient(90deg, #E0314B 0, #E0314B 6px, #FFF8F3 6px, #FFF8F3 10px, #7B3FE4 10px, #7B3FE4 16px)',
          borderRadius: '999px',
          opacity: 0.7,
        }}
      />
    </div>
  );
}

/**
 * Star Bullet for lists / points
 */
export function StarBullet({ color = '#7B3FE4' }) {
  return <Sparkle4 size={14} color={color} style={{ marginRight: '6px', flexShrink: 0 }} />;
}

/**
 * Corner Sticker for Photo Frames
 */
export function CornerSticker({ type = 'moon' }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        border: '2px solid #7B3FE4',
        boxShadow: '0 4px 10px rgba(123, 63, 228, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
      }}
    >
      {type === 'moon' ? (
        <CrescentMoon size={16} color="#7B3FE4" />
      ) : (
        <Sparkle4 size={16} color="#F5C26B" />
      )}
    </div>
  );
}

/**
 * Section Top Striped Ribbon Banner
 */
export function SectionRibbonBanner({ title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
      {/* Carnival Striped Ribbon Top Accent */}
      <div
        style={{
          width: '70px',
          height: '5px',
          margin: '0 auto 0.75rem auto',
          background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
          borderRadius: '999px',
        }}
      />
      {title && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.25rem 0.85rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(123, 63, 228, 0.08)',
            border: '1px solid rgba(123, 63, 228, 0.2)',
            color: '#7B3FE4',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          <Sparkle4 size={12} color="#F5C26B" />
          <span>{title}</span>
          <Sparkle4 size={12} color="#F5C26B" />
        </div>
      )}
    </div>
  );
}
