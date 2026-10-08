import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { BIRTHDAY_CONTENT } from '../content';
import { Sparkle4 } from './CelestialIcons';

export default function MusicPlayer({ isUnlocked }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  const musicData = BIRTHDAY_CONTENT.music;

  // Romantic acoustic piano harmonic synthesizer fallback
  const startRomanticSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Am9 -> Fmaj9 -> Cmaj7 -> Gsus4 piano voicing
      const pianoChords = [
        [220.0, 261.63, 329.63, 392.0, 493.88],  // Am9
        [174.61, 220.0, 261.63, 329.63, 392.0],  // Fmaj9
        [130.81, 196.0, 261.63, 329.63, 392.0],  // Cmaj7
        [196.0, 246.94, 293.66, 392.0, 440.0]   // G6
      ];

      let chordIndex = 0;
      const playPianoChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const currentChord = pianoChords[chordIndex % pianoChords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          // Acoustic piano string harmonics (fundamental + overtones)
          const harmonics = [1.0, 0.45, 0.2, 0.1];
          const startTime = audioCtxRef.current.currentTime + i * 0.22;
          const duration = 3.6;

          harmonics.forEach((weight, hIdx) => {
            const osc = audioCtxRef.current.createOscillator();
            const gain = audioCtxRef.current.createGain();

            osc.type = 'triangle'; // triangle gives warmer, more acoustic piano strike timbre
            osc.frequency.setValueAtTime(freq * (hIdx + 1), startTime);

            // Fast piano hammer strike envelope + natural acoustic decay
            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.035 * weight, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

            osc.connect(gain);
            gain.connect(audioCtxRef.current.destination);

            osc.start(startTime);
            osc.stop(startTime + duration);
          });
        });
      };

      playPianoChord();
      synthIntervalRef.current = setInterval(playPianoChord, 3600);
    } catch (e) {
      console.log('Piano web audio fallback init:', e);
    }
  };

  const stopRomanticSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isUnlocked && !hasInteracted) {
      setHasInteracted(true);
      playAudio();
    }
  }, [isUnlocked]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.65;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          startRomanticSynth();
          setIsPlaying(true);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopRomanticSynth();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={musicData.src} loop preload="auto" />

      {/* Floating Moonlit Carnival Audio Pill */}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          onClick={togglePlay}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 0.95rem',
            borderRadius: '999px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #D9C7FF',
            boxShadow: '0 8px 22px rgba(123, 63, 228, 0.16)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.25s ease',
          }}
        >
          {/* Subtle striped bottom line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'repeating-linear-gradient(90deg, #7B3FE4 0, #7B3FE4 6px, #E0314B 6px, #E0314B 12px, #FFF8F3 12px, #FFF8F3 16px)',
            }}
          />

          {/* Equalizer Wave in Purple */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '2px',
              height: '14px',
            }}
          >
            {[1, 2, 3].map((bar) => (
              <span
                key={bar}
                style={{
                  width: '3px',
                  backgroundColor: isPlaying ? '#7B3FE4' : '#D9C7FF',
                  borderRadius: '2px',
                  height: isPlaying ? (bar === 2 ? '14px' : '9px') : '4px',
                  animation: isPlaying ? `soundWave ${0.5 + bar * 0.2}s ease-in-out infinite alternate` : 'none',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#2A1038',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
              }}
            >
              <span>{musicData.trackName}</span>
              <Sparkle4 size={10} color="#F5C26B" />
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                color: isPlaying ? '#7B3FE4' : '#8E7A9E',
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              {isPlaying ? 'Playing • Romantic Piano' : 'Tap to Play Piano 🎹'}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#7B3FE4',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '2px',
            }}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>

          {/* Mute toggle */}
          <button
            type="button"
            onClick={toggleMute}
            style={{
              background: 'none',
              border: 'none',
              color: isMuted ? '#E0314B' : '#8E7A9E',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '2px',
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>
    </>
  );
}
