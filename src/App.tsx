import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import LandingPage from "./components/LandingPage";
import MeditationSpace from "./components/MeditationSpace";
import { SceneType } from "./components/scenes/MeditationScene";
export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentScene, setCurrentScene] = useState<SceneType>("bamboo");
  useEffect(() => {
    const hour = new Date().getHours();
    setIsDarkMode(hour >= 18 || hour < 6);
  }, []);
  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsStarted(true);
      setIsTransitioning(false);
    }, 1000);
  };
  return <main className={`w-full min-h-screen relative overflow-hidden`}>
      <ParticleBackground currentScene={currentScene} />
      <div className="absolute top-4 right-4 z-50">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Toggle theme">
          {isDarkMode ? <Moon className="text-white" size={24} /> : <Sun className="text-white" size={24} />}
        </button>
      </div>
      <div className={`transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {!isStarted ? <LandingPage onStart={handleStart} /> : <MeditationSpace onSceneChange={setCurrentScene} />}
      </div>
    </main>;
}