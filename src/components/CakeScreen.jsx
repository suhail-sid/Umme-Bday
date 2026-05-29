import React, { useState } from 'react';
import ScreenWrapper from './ScreenWrapper';
import Cake from './Cake';
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
export default function CakeScreen({ isActive, onNext }) {
  const [isBlown, setIsBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const triggerConfetti = () => {
    const colors = ['#f3d1d1', '#e5a9a9', '#8f4f58', '#d4af37', '#e09898', '#faf6f0'];
    const shapes = ['❤️', '✨', '🌸', '●', '■'];

    const newConfetti = Array.from({ length: 45 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 120;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - 80;
      const color = colors[i % colors.length];
      const shape = shapes[i % shapes.length];
      const size = 10 + Math.random() * 14;
      const delay = Math.random() * 0.2;
      const duration = 1.5 + Math.random() * 1.5;

      return {
        id: i,
        shape,
        style: {
          position: 'absolute',
          left: '50%',
          top: '40%',
          fontSize: `${size}px`,
          color: color,
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0.5)',
          animation: `explode ${duration}s cubic-bezier(0.1, 0.8, 0.3, 1) forwards`,
          animationDelay: `${delay}s`,
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          '--rot': `${-180 + Math.random() * 360}deg`
        }
      };
    });

    setConfetti(newConfetti);
  };

  const handleBlow = () => {
    if (isBlown) return;
    setIsBlown(true);
    triggerConfetti();
  };

  return (
    <ScreenWrapper isActive={isActive} className="overflow-y-auto hide-scrollbar">

      <style>{`
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1) rotate(var(--rot));
            opacity: 0;
          }
        }
      `}</style>

      {confetti.map((c) => (
        <div key={c.id} style={c.style}>
          {c.shape}
        </div>
      ))}

      <div className="w-full text-center mt-2 z-20 animate-fade-in">
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-berry-light">
          Make a wish first :)
        </p>
        <h2 className="font-serif text-2xl font-bold text-berry-dark mt-1 text-glow">
          {isBlown ? 'Wish sent ✨' : 'Blow the candles 🎂'}
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 my-4 min-h-[280px]">
        {!isBlown ? (
          <div className="py-4">
            <Cake isBlown={isBlown} />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <div className="scale-[0.65] -my-14 opacity-85">
              <Cake isBlown={isBlown} />
            </div>

            <div className="w-full glass-card-premium rounded-3xl p-5 border border-white/60 shadow-xl max-w-sm mt-4 animate-slide-up flex flex-col gap-4">

              <div className="flex justify-center items-center gap-6 py-2 relative h-44">

                <div className="w-32 bg-white p-2 rounded shadow-md border border-blush/20 transform -rotate-6 hover:-rotate-2 transition-transform duration-300 absolute left-[6%] top-1 animate-float-medium z-10">
                  <div className="w-full aspect-square bg-gradient-to-tr from-blush-light to-champagne overflow-hidden relative">
                    <img
                      src={p1}
                      alt="Tee Birthday Memories 1"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-blush-light text-[10px] text-berry/60 uppercase font-bold text-center p-1">Pic 1</div>
                  </div>
                  <div className="text-center text-[9px] font-serif text-berry mt-1.5">Katil hasi</div>
                </div>

                <div className="w-32 bg-white p-2 rounded shadow-md border border-blush/20 transform rotate-6 hover:rotate-2 transition-transform duration-300 absolute right-[6%] top-3 animate-float-slow z-20" style={{ animationDelay: '-2s' }}>
                  <div className="w-full aspect-square bg-gradient-to-tr from-champagne to-blush-light overflow-hidden relative">
                    <img
                      src={p2}
                      alt="Tee Birthday Memories 2"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-blush-light text-[10px] text-berry/60 uppercase font-bold text-center p-1">Pic 2</div>
                  </div>
                  <div className="text-center text-[9px] font-serif text-berry mt-1.5">Always Bhuki</div>
                </div>

              </div>


              <div className="text-center mt-1 px-1">
                <p className="text-sm font-semibold text-berry-dark italic font-serif">"You are one of the sweetest parts of my heart..."</p>
                <p className="text-xs text-berry-light mt-2 leading-relaxed">
                  May your birthday bring you endless smiles, gentle peace, and all the love your heart can hold.
                  <br /> Always by your side, loving you more with every passing day.Meri Chimirkhi ❤
                </p>
              </div>

            </div>
          </div>
        )}
      </div>

      <div className="w-full max-w-xs px-4 mt-2 mb-6 z-20 animate-slide-up">
        {!isBlown ? (
          <button
            onClick={handleBlow}
            className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-rose-dusty via-berry-light to-rose-dusty text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Blow the candles 🎂
          </button>
        ) : (
          <button
            onClick={onNext}
            className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-blush-dark via-rose-accent to-blush-dark text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
          >
            Continue
          </button>
        )}
      </div>

    </ScreenWrapper>
  );
}

