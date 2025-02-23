import React, { useEffect, useState } from "react";
interface BreathingGuideProps {
  isPlaying: boolean;
}
const BreathingGuide = ({
  isPlaying
}: BreathingGuideProps) => {
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [counter, setCounter] = useState(4);
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev === 1) {
          setBreathPhase(currentPhase => {
            if (currentPhase === "inhale") return "hold";
            if (currentPhase === "hold") return "exhale";
            return "inhale";
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);
  return <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
      <h2 className="text-xl mb-4">Breathing Guide</h2>
      <div className="flex justify-center">
        <div className="relative">
          <div className={`w-32 h-32 rounded-full border-4 transition-all duration-1000
              ${breathPhase === "inhale" ? "scale-110" : "scale-100"}
              ${breathPhase === "hold" ? "border-white" : "border-white/50"}
              ${isPlaying ? "" : "opacity-50"}`}>
            <div className="w-full h-full flex items-center justify-center flex-col">
              <span className="text-lg font-light">
                {isPlaying ? breathPhase : "Start"}
              </span>
              {isPlaying && <span className="text-2xl font-bold">{counter}</span>}
            </div>
          </div>
          {isPlaying && <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />}
        </div>
      </div>
    </div>;
};
export default BreathingGuide;