import React, { useState } from 'react';
import { Calendar, Heart, X } from 'lucide-react';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4, CrescentMoon, MoonDivider, SectionRibbonBanner, CornerSticker } from './CelestialIcons';

export default function TimelineSection() {
  const [activePhoto, setActivePhoto] = useState(null);
  const { timeline } = BIRTHDAY_CONTENT;

  return (
    <section
      id="timeline-section"
      style={{
        padding: '3rem 1.25rem 4rem 1.25rem',
        maxWidth: '520px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Moonlit Carnival Top Section Ribbon & Title */}
      <SectionRibbonBanner title="Chapter by Chapter" />

      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
          Since Class 11
        </h2>
        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.92rem',
            lineHeight: 1.6,
          }}
        >
          From that first classroom encounter, to celebrating nineteen years of your light.
        </p>
      </div>

      {/* Timeline Track with Celestial Line */}
      <div style={{ position: 'relative' }}>
        {/* Striped spine line */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '25px',
            bottom: '25px',
            width: '3px',
            background: 'repeating-linear-gradient(to bottom, #7B3FE4 0, #7B3FE4 12px, #FFF8F3 12px, #FFF8F3 18px, #E0314B 18px, #E0314B 30px, #FFF8F3 30px, #FFF8F3 36px)',
            borderRadius: '999px',
            opacity: 0.7,
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem' }}>
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  paddingLeft: '50px',
                }}
              >
                {/* Celestial Node: Crescent Moon or Star */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '22px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #7B3FE4',
                    boxShadow: '0 4px 10px rgba(123, 63, 228, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  {isEven ? (
                    <Sparkle4 size={12} color="#F5C26B" />
                  ) : (
                    <CrescentMoon size={12} color="#E0314B" />
                  )}
                </div>

                {/* Photo Card with White Frame, Thin Striped Border, Slight Tilt, Soft Shadow & Corner Sticker */}
                <div
                  className={isEven ? 'photo-tilt-left' : 'photo-tilt-right'}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '10px',
                    position: 'relative',
                    boxShadow: '0 16px 36px rgba(75, 29, 143, 0.1), 0 4px 12px rgba(224, 49, 75, 0.05)',
                  }}
                >
                  {/* Striped Border Background pseudo effect */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-3px',
                      borderRadius: '27px',
                      background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 8px, #FFF8F3 8px, #FFF8F3 12px, #E0314B 12px, #E0314B 20px, #FFF8F3 20px, #FFF8F3 24px)',
                      zIndex: -1,
                    }}
                  />

                  {/* Corner Star or Moon Sticker */}
                  <CornerSticker type={isEven ? 'star' : 'moon'} />

                  {/* Photo Thumbnail */}
                  <div
                    onClick={() => setActivePhoto(item.photo)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '220px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      backgroundColor: '#F3ECFF',
                    }}
                  >
                    <img
                      src={item.photo}
                      alt={item.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />

                    {/* Pill Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #D9C7FF',
                        color: '#4B1D8F',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Calendar size={12} color="#E0314B" />
                      <span>{item.year}</span>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '12px',
                        color: '#4B1D8F',
                        fontSize: '0.68rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(4px)',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontWeight: 600,
                      }}
                    >
                      Tap to zoom ✨
                    </div>
                  </div>

                  {/* Card Story Content */}
                  <div style={{ padding: '1.25rem 0.5rem 0.75rem 0.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span
                        style={{
                          color: '#E0314B',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.tag}
                      </span>
                      <Heart size={14} color="#E0314B" fill="#FFD3DA" />
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#2A1038',
                        marginBottom: '0.55rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: '#5E4A6E',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Moon Section Divider */}
      <MoonDivider />

      {/* Lightbox / Zoom Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(42, 16, 56, 0.75)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '85vh',
              backgroundColor: '#FFFFFF',
              padding: '10px',
              borderRadius: '24px',
              border: '3px solid #7B3FE4',
              boxShadow: '0 25px 60px rgba(42, 16, 56, 0.4)',
            }}
          >
            <button
              onClick={() => setActivePhoto(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: '#E0314B',
                border: '2px solid #FFFFFF',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(224, 49, 75, 0.4)',
              }}
            >
              <X size={18} />
            </button>
            <img
              src={activePhoto}
              alt="Zoomed memory"
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
