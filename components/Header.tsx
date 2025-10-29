import React from 'react';

const BANNER_BG =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80';

export const Header: React.FC = () => {
  return (
    <header
      className="relative w-full h-48 md:h-64 flex items-center justify-center overflow-hidden mb-4 text-center"
      style={{
        backgroundImage: `url(${BANNER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken the background for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Title */}
      <h1 className="relative z-10 font-oswald text-6xl md:text-8xl font-bold uppercase tracking-wider text-white drop-shadow-lg">
        Zan <span className="text-pink-500">Cafe</span>
      </h1>
    </header>
  );
};
