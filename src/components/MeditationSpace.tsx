import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import BreathingGuide from "./BreathingGuide";
// import AIRecommendations from "./AIRecommendations";
import { MeditationScene, scenes, SceneType } from "./scenes/MeditationScene";
const MeditationSpace = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [currentScene, setCurrentScene] = useState<SceneType>("bamboo");
  const [isTransitioning, _setIsTransitioning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  useEffect(() => {
    const sceneKeys = Object.keys(scenes) as SceneType[];
    const randomScene = sceneKeys[Math.floor(Math.random() * sceneKeys.length)];
    setCurrentScene(randomScene);
  }, []);
  useEffect(() => {
    if (!isPlaying || !timeRemaining) return;
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 0) {
          setIsPlaying(false);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeRemaining]);
  const handleDurationSelect = (duration: number) => {
    setSelectedDuration(duration);
    setTimeRemaining(duration * 60);
  };
  // const handleSceneChange = (scene: SceneType) => {
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     setCurrentScene(scene);
  //     setIsTransitioning(false);
  //   }, 1000);
  // };
  return (
    <>
      <MeditationScene
        currentScene={currentScene}
        isTransitioning={isTransitioning}
      />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <AudioPlayer
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentScene={currentScene}
              sounds={scenes[currentScene].sounds.slice()}
            />
            <div className="mt-8">
              <h2 className="text-white text-xl mb-4">Duration</h2>
              <div className="flex gap-4">
                {[5, 10, 20].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => handleDurationSelect(duration)}
                    className={`px-6 py-2 rounded-full ${
                      selectedDuration === duration
                        ? "bg-white text-purple-900"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {duration} min
                  </button>
                ))}
              </div>
              {timeRemaining !== null && (
                <p className="text-white mt-4">
                  Time remaining: {Math.floor(timeRemaining / 60)}:
                  {(timeRemaining % 60).toString().padStart(2, "0")}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <BreathingGuide isPlaying={isPlaying} />
            {/* <AIRecommendations currentScene={currentScene} onSceneChange={handleSceneChange} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default MeditationSpace;
