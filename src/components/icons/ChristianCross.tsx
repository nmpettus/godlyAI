import React from 'react';

export const ChristianCross = ({ className = "", size = 24, color = "currentColor" }: { className?: string; size?: number; color?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Vertical line (longer at bottom) */}
      <line x1="12" y1="4" x2="12" y2="20" />
      {/* Horizontal line */}
      <line x1="6" y1="9" x2="18" y2="9" />
    </svg>
  );
};