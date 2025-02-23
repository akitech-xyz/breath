import React from "react";
export const BambooForest = () => {
  return <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Misty Background */}
        <rect width="100%" height="100%" fill="url(#bambooGradient)" />
        <defs>
          <linearGradient id="bambooGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d4a3e" />
            <stop offset="100%" stopColor="#1a2e27" />
          </linearGradient>
        </defs>
        {/* Bamboo Stalks */}
        {Array.from({
        length: 12
      }).map((_, i) => <g key={i} transform={`translate(${150 + i * 140}, 0)`} className="bamboo-stalk">
            <line x1="0" y1="0" x2={`${Math.sin(i * 0.5) * 20}`} y2="1080" stroke="#395144" strokeWidth="20" className="animate-sway" style={{
          animationDelay: `${i * 0.2}s`
        }} />
            {Array.from({
          length: 8
        }).map((_, j) => <g key={j} transform={`translate(0, ${100 + j * 120})`}>
                <circle cx="0" cy="0" r="10" fill="#2d4a3e" />
                <path d={`M-20,0 Q0,-20 20,0`} fill="none" stroke="#395144" strokeWidth="2" />
              </g>)}
          </g>)}
        {/* Mist Overlay */}
        <g className="animate-mist">
          <path d="M0,800 Q960,750 1920,800 L1920,1080 L0,1080 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,900 Q960,850 1920,900 L1920,1080 L0,1080 Z" fill="rgba(255,255,255,0.03)" />
        </g>
      </svg>
    </div>;
};