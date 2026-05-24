import React, { useState, useRef } from 'react';
import ScreenWrapper from './ScreenWrapper';
import video from '../assets/v1.mp4';

export default function VideoMessageScreen({ isActive, onNext }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch((err) => {
          console.log("Video playback blocked", err);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <ScreenWrapper isActive={isActive} className="overflow-y-auto hide-scrollbar">

      <div className="w-full text-center mt-2 z-20 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-berry-light bg-blush-light/50 px-3 py-1 rounded-full border border-blush/10">
          Moments Shared
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 my-4">

        <div
          onClick={handleTogglePlay}
          className="w-60 sm:w-64 aspect-[9/16] bg-white/40 backdrop-blur-md rounded-3xl p-2.5 shadow-xl border border-white/60 relative animate-scale-in gold-glow overflow-hidden cursor-pointer group"
        >

          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-champagne-dark via-blush-light/60 to-champagne overflow-hidden relative flex items-center justify-center border border-blush-light/35">

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              src={video}
              onEnded={() => setIsPlaying(false)}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            >
              Your browser does not support the video tag.
            </video>
            {/* Custom Centered Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/60 text-white flex items-center justify-center shadow-lg transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 translate-x-0.5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}


          </div>

        </div>

        <div
          className="mt-6 text-center px-4 max-w-sm animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="font-serif italic text-lg text-berry-dark font-semibold leading-relaxed">
            "Hope I made your special day a little more special Tee"
          </p>
          <p className="mt-2 text-xs sm:text-sm text-berry-light font-medium leading-relaxed">
            Always your Little supporter ❤️
          </p>
        </div>

      </div>

      <div
        className="w-full max-w-xs px-4 mt-2 mb-6 z-20 animate-slide-up"
        style={{ animationDelay: '0.5s' }}
      >
        <button
          onClick={onNext}
          className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-blush-dark via-rose-accent to-blush-dark text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
        >
          One last thing
        </button>
      </div>

    </ScreenWrapper>
  );
}


