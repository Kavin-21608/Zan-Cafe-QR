import React from 'react';

// FIX: Added `children: React.ReactNode` to the props type because `React.FC` no longer provides an implicit `children` prop. This resolves errors when destructuring `children` and when passing children to `IconWrapper`.
const IconWrapper: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`w-4 h-4 flex items-center justify-center border ${className}`}>
    {children}
  </div>
);

const Dot: React.FC<{ className: string }> = ({ className }) => (
  <div className={`w-2 h-2 rounded-full ${className}`}></div>
);

export const VegIcon: React.FC = () => (
  <IconWrapper className="border-green-500">
    <Dot className="bg-green-500" />
  </IconWrapper>
);

export const NonVegIcon: React.FC = () => (
  <IconWrapper className="border-red-500">
    <Dot className="bg-red-500" />
  </IconWrapper>
);

export const EggIcon: React.FC = () => (
  <IconWrapper className="border-yellow-500">
    <Dot className="bg-yellow-500" />
  </IconWrapper>
);