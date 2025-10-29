import React from 'react';

interface FooterProps {
  onQrClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQrClick }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center gap-2 text-sm sm:justify-between">
          <a href="tel:6381325838" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors">
            <PhoneIcon />
            <span>6381325838</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
            <LocationIcon />
            <span>Thiruvanaikovil, Trichy</span>
          </div>
          <button onClick={onQrClick} className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors">
            <QRIcon />
            <span className="hidden sm:inline">QR Code</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.024 11.024 0 008.59 8.59l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const QRIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 2a1 1 0 100-2 1 1 0 000 2zM3 13a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm2 2a1 1 0 100-2 1 1 0 000 2zM13 3a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zm2 2a1 1 0 100-2 1 1 0 000 2zM12 12h2v2h-2v-2zm-2 2h2v2h-2v-2zm6-4h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2-4h2v2h-2V8zm4 0h2v2h-2V8zm-2 6h2v2h-2v-2z" clipRule="evenodd" />
    </svg>
);
