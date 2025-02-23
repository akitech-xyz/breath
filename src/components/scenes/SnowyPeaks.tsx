import React from "react";
export const SnowyPeaks = () => {
  return <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        {/* Sky Background */}
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#skyGradient)" />
        {/* Clouds */}
        <g className="animate-float-slow">
          {Array.from({
          length: 3
        }).map((_, i) => <path key={i} d={`M${200 + i * 600},200 q50,-20 100,0 t100,0 t100,0`} fill="white" opacity="0.8" />)}
        </g>
        {/* Mountains */}
        <path d="M0,400 L400,100 L800,450 L1200,150 L1600,400 L1920,200 L1920,1080 L0,1080 Z" fill="#f1f5f9" />
        <path d="M0,600 L400,300 L800,650 L1200,350 L1600,600 L1920,400 L1920,1080 L0,1080 Z" fill="#e2e8f0" />
        <path d="M0,800 L400,500 L800,850 L1200,550 L1600,800 L1920,600 L1920,1080 L0,1080 Z" fill="#cbd5e1" />
        {/* Snow Particles */}
        <g className="animate-snow">
          {Array.from({
          length: 50
        }).map((_, i) => <circle key={i} cx={Math.random() * 1920} cy={Math.random() * 1080} r="2" fill="white" opacity="0.8" />)}
        </g>
      </svg>
    </div>;
};