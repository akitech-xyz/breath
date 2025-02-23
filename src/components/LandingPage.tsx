import React from "react";
import { ZenBackground } from "./ZenBackground";
interface LandingPageProps {
  onStart: () => void;
}
const LandingPage = ({
  onStart
}: LandingPageProps) => {
  return <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
      <ZenBackground />
      <div className="floating-meditation mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-white/5 animate-breath-slow" />
          <div className="w-80 h-80 rounded-full bg-white/3 animate-breath-medium absolute" />
          <div className="w-96 h-96 rounded-full bg-white/2 animate-breath-fast absolute" />
        </div>
        <svg width="240" height="240" viewBox="0 0 240 240" className="relative z-10 text-white/90">
          <path fill="currentColor" d="M120 180c33.137 0 60-26.863 60-60s-26.863-60-60-60-60 26.863-60 60 26.863 60 60 60zm-20-60c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z" className="opacity-90" />
          <path fill="currentColor" d="M120 240c66.274 0 120-53.726 120-120S186.274 0 120 0 0 53.726 0 120s53.726 120 120 120zm0-40c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z" className="animate-pulse opacity-20" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-light text-white text-center mb-12">
        Breathe in, breathe out.
        <br />
        <span className="text-2xl md:text-3xl opacity-75">
          Return to the present moment
        </span>
      </h1>
      <button onClick={onStart} className="group relative px-12 py-4 text-xl bg-white/10 backdrop-blur-sm
                   text-white rounded-full transition-all duration-500
                   border border-white/20 hover:border-white/40
                   shadow-lg hover:shadow-xl overflow-hidden">
        <span className="relative z-10">Begin Meditation</span>
        <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </button>
    </div>;
};
export default LandingPage;