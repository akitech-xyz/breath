import React from "react";
export const DesertNight = () => {
  return <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Night Sky */}
        <defs>
          <linearGradient id="nightGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#nightGradient)" />
        {/* Stars */}
        {Array.from({
        length: 50
      }).map((_, i) => <g key={i} transform={`translate(${Math.random() * 1920}, ${Math.random() * 600})`}>
            <circle r={Math.random() * 2 + 1} fill="white" className="animate-twinkle" style={{
          animationDelay: `${Math.random() * 3}s`
        }} />
            <circle r={Math.random() * 4 + 2} fill="url(#starGlow)" opacity="0.5" className="animate-pulse" />
          </g>)}
        {/* Desert Dunes */}
        <path d="M0,600 Q480,500 960,600 Q1440,700 1920,600 L1920,1080 L0,1080 Z" fill="#78350f" opacity="0.8" />
        <path d="M0,700 Q480,600 960,700 Q1440,800 1920,700 L1920,1080 L0,1080 Z" fill="#92400e" opacity="0.6" />
        <path d="M0,800 Q480,700 960,800 Q1440,900 1920,800 L1920,1080 L0,1080 Z" fill="#b45309" opacity="0.4" />
      </svg>
    </div>;
};