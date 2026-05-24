import React, { useMemo } from 'react';

export default function FloatingDecor() {
  const particles = useMemo(() => {
    const types = ['✨', '❤️', '🌸', '✨', '🟡', '❤️'];
    return Array.from({ length: 24 }).map((_, i) => {
      const type = types[i % types.length];
      const left = Math.random() * 100;
      const delay = Math.random() * -20;
      const duration = 12 + Math.random() * 15;
      const size = type === '🟡' ? 4 + Math.random() * 6 : 12 + Math.random() * 12;
      const drift = -80 + Math.random() * 160;
      const rotation = 90 + Math.random() * 270;

      return {
        id: i,
        type,
        style: {
          left: `${left}%`,
          fontSize: `${size}px`,
          '--delay': `${delay}s`,
          '--duration': `${duration}s`,
          '--drift': `${drift}px`,
          '--rotation': `${rotation}deg`,
          filter: type === '🟡' ? 'blur(1px) drop-shadow(0 0 4px #d4b537)' : 'none',
          opacity: type === '🟡' ? 0.6 : 0.7,
          color: type === '🟡' ? '#d4b537' : '#e5a9a9',
        },
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10 select-none">
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-blush-light/30 rounded-full filter blur-[80px] animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-rose-dusty/10 rounded-full filter blur-[90px] animate-float-slow pointer-events-none" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[250px] h-[250px] bg-champagne-dark/40 rounded-full filter blur-[70px] animate-float-slow pointer-events-none" style={{ animationDelay: '-1.5s' }}></div>

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={p.style}
        >
          {p.type === '🟡' ? '•' : p.type}
        </div>
      ))}
    </div>
  );
}

