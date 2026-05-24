import React, { useState, useRef, useEffect } from 'react';
import song from '../assets/audio.mp3'
export default function CustomAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(err => {
          console.log("Audio play blocked by browser policy. User gesture required.", err);
        });
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return (
    <div className="w-full glass-card rounded-2xl p-5 border border-white/50 relative overflow-hidden shadow-lg select-none">

      <audio
        ref={audioRef}
        src={song}
        preload="metadata"
      />

      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-blush-dark to-rose-dusty text-white font-bold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 ${isPlaying ? 'shadow-[0_0_15px_rgba(229,169,169,0.6)]' : ''
            }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-berry truncate">Lo Apna gana Sun lo🎧</p>

          <div className="h-6 flex items-center gap-1 mt-1.5 overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((bar) => {
              const animDuration = 0.5 + Math.random() * 0.7;
              return (
                <div
                  key={bar}
                  className="w-[3px] bg-blush-dark rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${20 + Math.sin(bar) * 15}px` : '4px',
                    animation: isPlaying ? `floatSlow ${animDuration}s ease-in-out infinite alternate` : 'none',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1 bg-blush/40 rounded-lg appearance-none cursor-pointer accent-blush-dark"
        />
        <div className="flex justify-between text-[10px] text-rose-dusty px-0.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

    </div>
  );
}

