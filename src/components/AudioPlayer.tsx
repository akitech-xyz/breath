import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { SceneType } from "./scenes/MeditationScene";
interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  sounds: string[];
  currentScene: SceneType;
}
const AudioPlayer = ({ isPlaying, setIsPlaying }: AudioPlayerProps) => {
  const [selectedSound, setSelectedSound] = useState("rain");
  const sounds = [
    {
      id: "rain",
      name: "Rain Sounds",
    },
    {
      id: "forest",
      name: "Forest Ambience",
    },
    {
      id: "waves",
      name: "Ocean Waves",
    },
    {
      id: "white",
      name: "White Noise",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="text-purple-900" size={32} />
          ) : (
            <Play className="text-purple-900" size={32} />
          )}
        </button>
        <div className="flex-1">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-1000"
              style={{
                width: isPlaying ? "60%" : "0%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {sounds.map((sound) => (
          <button
            key={sound.id}
            onClick={() => setSelectedSound(sound.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl ${
              selectedSound === sound.id
                ? "bg-white text-purple-900"
                : "bg-white/20 text-white"
            }`}
          >
            <Volume2 size={20} />
            {sound.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default AudioPlayer;
