import React from 'react';

export default function Cake({ isBlown }) {
  return (
    <div className="relative w-64 h-64 flex flex-col justify-end items-center select-none animate-float-medium">
      
      <div className="absolute bottom-[110px] w-full flex justify-center gap-8 z-30">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <div
              className={`w-3 h-6 bg-gradient-to-t from-orange-400 via-yellow-300 to-amber-100 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)] origin-bottom transition-all duration-1000 ${
                isBlown
                  ? 'scale-0 opacity-0 pointer-events-none'
                  : 'animate-flicker scale-100 opacity-100'
              }`}
              style={{
                animationDelay: `${i * 0.25}s`,
              }}
            />
            {isBlown && (
              <div 
                className="absolute -top-6 w-4 h-6 bg-gray-400/20 rounded-full blur-[2px] animate-smoke"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            )}
            <div className="w-2.5 h-12 rounded-t-sm bg-gradient-to-r from-blush-dark to-blush border-b border-rose-dusty/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 skew-y-12 transform scale-y-150" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-56 h-28 bg-gradient-to-r from-blush-light via-white to-blush-light rounded-t-[20px] shadow-md border-b-4 border-rose-dusty/20 flex flex-col justify-between overflow-hidden z-20">
        <div className="w-full h-5 bg-gradient-to-r from-blush via-blush-light to-blush rounded-t-[20px] relative flex justify-around items-center px-4">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-berry to-berry-dark shadow-sm transform -translate-y-1" />
          ))}
        </div>

        <div className="absolute top-4 w-full flex z-10">
          {[...Array(14)].map((_, idx) => (
            <div
              key={idx}
              className="flex-1 bg-blush rounded-b-full shadow-sm"
              style={{
                height: `${12 + (idx % 3 === 0 ? 12 : idx % 2 === 0 ? 6 : 16)}px`,
                marginTop: '-1px',
              }}
            />
          ))}
        </div>

        <div className="w-full h-full relative z-0 flex flex-wrap justify-around items-center p-8 opacity-75">
          <div className="w-1.5 h-3 bg-rose-dusty rounded-full rotate-45 transform translate-y-3" />
          <div className="w-3 h-1.5 bg-berry-light rounded-full -rotate-12 transform -translate-y-2 translate-x-4" />
          <div className="w-2 h-2 bg-amber-400 rounded-full transform translate-y-5 -translate-x-3 shadow-[0_0_4px_rgba(251,191,36,0.3)]" />
          <div className="w-1.5 h-3 bg-blush-dark rounded-full -rotate-45 transform -translate-y-4" />
          <div className="w-3 h-1.5 bg-rose-accent rounded-full rotate-12 transform translate-y-1 translate-x-8" />
          <div className="w-2 h-2 bg-amber-400 rounded-full transform -translate-y-2 -translate-x-6 shadow-[0_0_4px_rgba(251,191,36,0.3)]" />
        </div>

        <div className="w-full h-3 bg-gradient-to-r from-rose-dusty/40 via-rose-dusty/20 to-rose-dusty/40" />
      </div>

      <div className="w-64 h-4 bg-gradient-to-r from-[#e3c79a] via-[#f7e6c4] to-[#e3c79a] rounded-full shadow-md z-10 relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-gradient-to-r from-[#d9b77e] via-[#f3d9aa] to-[#d9b77e] rounded-b-xl shadow-md" />
      </div>
      
    </div>
  );
}

