import React from 'react';

export default function ScreenWrapper({ children, isActive, className = '' }) {
  if (!isActive) return null;

  return (
    <div
      className={`relative w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden px-6 py-8 md:py-12 select-none animate-fade-in ${className}`}
      style={{
        background: 'linear-gradient(180deg, #faf6f0 0%, #fdfbf7 50%, #f7eded 100%)',
      }}
    >
      <div className="absolute inset-4 border border-blush/30 rounded-[32px] pointer-events-none z-0"></div>
      
      <div className="w-full max-w-md h-full flex flex-col justify-between items-center z-20 relative">
        {children}
      </div>
    </div>
  );
}

