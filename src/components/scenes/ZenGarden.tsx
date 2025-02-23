import React from "react";
export const ZenGarden = () => {
  return <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Background */}
        <defs>
          <linearGradient id="gardenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8d5c4" />
            <stop offset="100%" stopColor="#c8b6a6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gardenGradient)" />
        {/* Sand Patterns */}
        {Array.from({
        length: 5
      }).map((_, i) => <path key={i} d={`M0,${200 + i * 200} Q480,${150 + i * 200} 960,${200 + i * 200} Q1440,${250 + i * 200} 1920,${200 + i * 200}`} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="animate-wave" style={{
        animationDelay: `${i * 0.5}s`
      }} />)}
        {/* Koi Pond */}
        <circle cx="960" cy="700" r="200" fill="#6b8e9e" className="animate-ripple" />
        {/* Rocks */}
        <g transform="translate(700 650)">
          <path d="M0,0 L40,-30 L80,0 L60,20 L20,20 Z" fill="#8b7355" />
        </g>
        <g transform="translate(1160 680)">
          <path d="M0,0 L30,-20 L60,0 L45,15 L15,15 Z" fill="#8b7355" />
        </g>
        {/* Koi Fish */}
        <g className="animate-swim">
          <path d="M960,700 Q980,690 1000,700 Q980,710 960,700 Z" fill="#e86d5c" />
          <path d="M920,650 Q940,640 960,650 Q940,660 920,650 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>;
};