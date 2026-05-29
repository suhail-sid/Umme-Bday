import React from 'react';
import teePhoto from "../assets/tee-photo.jpg"
import ScreenWrapper from './ScreenWrapper';

export default function OpeningScreen({ isActive, onNext }) {
  return (
    <ScreenWrapper isActive={isActive} className="justify-center">

      <div className="w-full text-center mt-2 mb-4 animate-fade-in opacity-80 z-20">
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-berry-light bg-blush-light/60 px-3 py-1 rounded-full border border-blush/20">
          From KALLU to his Puchuu ❤️‍🩹
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 px-2">

        <div className="w-64 sm:w-72 bg-white rounded-2xl p-4 shadow-xl border border-blush-light/50 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 animate-scale-in relative group z-10">
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 shadow-md flex items-center justify-center border border-white/40 transform rotate-12 z-20">
            <span className="text-[10px] text-amber-900 font-bold font-serif">Gudda</span>
          </div>

          <div className="w-full aspect-[4/5] rounded-xl bg-gradient-to-tr from-champagne-dark via-blush-light to-champagne overflow-hidden border border-blush/10 relative flex items-center justify-center">

            <img
              src={teePhoto}
              alt="Birthday Tee Photo Placeholder"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />

            <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-champagne-light via-blush-light/40 to-champagne">
              <span className="text-3xl mb-2">✨</span>
              <p className="text-[11px] uppercase tracking-wider text-rose-dusty font-bold">Replace this image with her photo</p>
              <p className="text-[9px] text-berry/50 mt-1 italic">(Comment inside OpeningScreen.jsx)</p>
            </div>

          </div>

          <div className="pt-4 pb-2 text-center">
            <p className="font-serif italic text-lg text-red-600 font-semibold">Puchuu 💖</p>
            <p className="text-[10px] text-red-600  tracking-widest uppercase mt-0.5">May 30th, 2026</p>
          </div>
        </div>

        <div className="mt-8 text-center px-4 animate-slide-up max-w-sm">
          <h1 className="font-serif text-3xl sm:text-4xl text-berry-dark font-extrabold tracking-tight leading-tight text-glow">
            Happy Birthday <span className="text-transparent bg-clip-text bg-gradient-to-r from-berry via-rose-accent to-berry-light">Gudda</span>
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-berry-light font-medium leading-relaxed italic">
            ""
          </p>
        </div>

      </div>

      <div className="w-full max-w-xs px-4 mt-4 mb-6 z-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <button
          onClick={onNext}
          className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-blush-dark via-rose-accent to-blush-dark text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
        >
          Start
        </button>
      </div>

    </ScreenWrapper>
  );
}

