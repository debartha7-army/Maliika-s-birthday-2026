import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4, CrescentMoon, MoonDivider, SectionRibbonBanner, CornerSticker } from './CelestialIcons';

export default function PhotoGallery() {
  const { gallery } = BIRTHDAY_CONTENT;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch tracking for mobile swipe gestures
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const currentItem = gallery[currentIndex];

  return (
    <section
      style={{
        padding: '2.5rem 1.25rem 3.5rem 1.25rem',
        maxWidth: '520px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Top Carnival Section Banner */}
      <SectionRibbonBanner title="Carnival Pavilion" />

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
          Photo Gallery
        </h2>
        <p
          style={{
            color: '#5E4A6E',
            fontSize: '0.92rem',
            lineHeight: 1.6,
          }}
        >
          Swipe across to browse the frames of us under the carnival lights.
        </p>
      </div>

      {/* Main Slideshow Frame with Striped Border & Moon Sticker */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '12px',
          position: 'relative',
          boxShadow: '0 20px 45px rgba(75, 29, 143, 0.12), 0 4px 14px rgba(224, 49, 75, 0.06)',
        }}
      >
        {/* Striped Border Background */}
        <div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '31px',
            background: 'repeating-linear-gradient(45deg, #7B3FE4 0, #7B3FE4 10px, #FFF8F3 10px, #FFF8F3 14px, #E0314B 14px, #E0314B 24px, #FFF8F3 24px, #FFF8F3 28px)',
            zIndex: -1,
          }}
        />

        {/* Moon Sticker on top right */}
        <CornerSticker type="moon" />

        {/* Counter Badge */}
        <div
          style={{
            position: 'absolute',
            top: '22px',
            left: '22px',
            zIndex: 10,
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #D9C7FF',
            borderRadius: '999px',
            padding: '0.25rem 0.8rem',
            color: '#4B1D8F',
            fontSize: '0.78rem',
            fontWeight: 700,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Sparkle4 size={10} color="#F5C26B" />
          <span>{currentIndex + 1} / {gallery.length}</span>
        </div>

        {/* Main Photo View */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#F3ECFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={currentItem.src}
            alt={currentItem.title}
            key={currentItem.src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #7B3FE4',
              color: '#7B3FE4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 5,
              boxShadow: '0 6px 16px rgba(123, 63, 228, 0.25)',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #7B3FE4',
              color: '#7B3FE4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 5,
              boxShadow: '0 6px 16px rgba(123, 63, 228, 0.25)',
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Caption Panel */}
        <div style={{ padding: '1.25rem 1rem 0.5rem 1rem', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#2A1038',
              marginBottom: '0.4rem',
            }}
          >
            {currentItem.title}
          </h3>
          <p
            style={{
              color: '#5E4A6E',
              fontSize: '0.9rem',
              lineHeight: 1.55,
              maxWidth: '380px',
              margin: '0 auto',
            }}
          >
            {currentItem.description}
          </p>

          {/* Navigation Dots */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '1.25rem',
            }}
          >
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: i === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  backgroundColor: i === currentIndex ? '#7B3FE4' : '#D9C7FF',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mini Thumbnails Strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '1.25rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}
      >
        {gallery.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '14px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: index === currentIndex ? '2.5px solid #7B3FE4' : '1.5px solid #D9C7FF',
              boxShadow: index === currentIndex ? '0 4px 12px rgba(123, 63, 228, 0.3)' : 'none',
              transform: index === currentIndex ? 'scale(1.08)' : 'scale(1)',
              transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
          >
            <img
              src={item.src}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {/* Moon Section Divider */}
      <MoonDivider />
    </section>
  );
}
