import React, { useEffect, useRef } from 'react';

// This tells TypeScript that the QRCode object will be available globally (from the script tag in index.html)
declare var QRCode: any;

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      // Generate QR code pointing to the current site's URL
      QRCode.toCanvas(canvasRef.current, window.location.href, { width: 256, margin: 2 }, function (error: any) {
        if (error) console.error('Error generating QR code:', error);
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-2xl text-center relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 font-oswald uppercase">Scan to Open Menu</h3>
        <canvas ref={canvasRef} />
        <p className="text-sm text-gray-500 mt-4">Point your phone's camera at the code.</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close QR Code Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
