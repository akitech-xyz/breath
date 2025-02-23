import React from "react";
export const Waterfall = () => {
  return <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Background */}
        <defs>
          <linearGradient id="waterfallGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#waterfallGradient)" />
        {/* Rocks */}
        <path d="M800,300 Q960,200 1120,300 L1120,1080 L800,1080 Z" fill="#475569" />
        {/* Waterfall */}
        <g className="animate-flow">
          {Array.from({
          length: 10
        }).map((_, i) => <path key={i} d={`M880,${300 + i * 80} Q960,${340 + i * 80} 1040,${300 + i * 80}`} stroke="white" strokeWidth="2" fill="none" opacity="0.5" />)}
        </g>
        {/* Water Pool */}
        <path d="M0,800 Q480,750 960,800 Q1440,850 1920,800 L1920,1080 L0,1080 Z" fill="url(#waterGradient)" className="animate-ripple" />
        {/* Mist */}
        <g className="animate-float">
          {Array.from({
          length: 5
        }).map((_, i) => <circle key={i} cx={920 + Math.random() * 80} cy={400 + Math.random() * 400} r="20" fill="white" opacity="0.2" />)}
        </g>
      </svg>
    </div>;
};