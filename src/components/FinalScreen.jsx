import React, { useState, useRef } from 'react';
import ScreenWrapper from './ScreenWrapper';
import CustomAudioPlayer from './CustomAudioPlayer';
import video from '../assets/v2.mp4';

export default function FinalScreen({ isActive }) {
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
    <ScreenWrapper isActive={isActive} className="overflow-y-auto hide-scrollbar justify-center">

      <div className="w-full text-center mt-2 z-20 animate-fade-in">
        <h2 className="font-serif text-3xl font-extrabold text-berry-dark tracking-tight text-glow">
          One last thing…
        </h2>
        <p className="text-xs uppercase tracking-widest text-rose-dusty mt-1">I could wait for you forever.</p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 my-4 gap-6">

        <div
          onClick={handleTogglePlay}
          className="w-56 aspect-[9/16] bg-white/40 backdrop-blur-md rounded-3xl p-2 shadow-xl border border-white/60 relative animate-scale-in overflow-hidden cursor-pointer"
          style={{ animationDelay: '0.2s' }}
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
          className="w-full max-w-sm animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <CustomAudioPlayer />
        </div>

        <div
          className="text-center animate-slide-up mt-2"
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className="font-serif text-2xl font-bold text-berry-dark italic text-glow gold-text-glow">
            Happy Birthday again Tanu :)
          </h3>
          <p className="text-[10px] text-rose-dusty tracking-widest uppercase mt-1">Have a spectacular year ahead!</p>
        </div>

      </div>

      <div className="w-full text-center mb-4 opacity-50 z-20">
        <span className="text-[9px] font-sans font-medium uppercase tracking-[0.3em] text-rose-dusty">
          Made with Love
        </span>
      </div>

    </ScreenWrapper>
  );
}


