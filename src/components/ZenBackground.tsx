import React from "react";
export const ZenBackground = () => {
  return <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Mountains */}
        <path d="M0 1080 L960 400 L1920 1080 Z" fill="currentColor" className="text-white/10" />
        <path d="M480 1080 L960 600 L1440 1080 Z" fill="currentColor" className="text-white/5" />
        {/* Mist */}
        <path d="M0 800 Q480 750 960 800 Q1440 850 1920 800 L1920 1080 L0 1080 Z" fill="currentColor" className="text-white/5" />
        {/* Bodhi Tree */}
        <g transform="translate(960 500) scale(0.5)" className="text-white/10">
          <path d="M0,0 Q-100,-100 -150,-50 Q-200,0 -180,50 Q-160,100 -100,80 Q-40,60 0,0" fill="currentColor" />
          <path d="M0,0 Q100,-100 150,-50 Q200,0 180,50 Q160,100 100,80 Q40,60 0,0" fill="currentColor" />
          <rect x="-5" y="0" width="10" height="200" fill="currentColor" />
        </g>
      </svg>
    </div>;
};