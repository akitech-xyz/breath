import React from "react";
import { BambooForest } from "./BambooForest";
import { ZenGarden } from "./ZenGarden";
import { DesertNight } from "./DesertNight";
import { Waterfall } from "./Waterfall";
import { SnowyPeaks } from "./SnowyPeaks";
export type SceneType = "bamboo" | "garden" | "desert" | "waterfall" | "snow";
interface MeditationSceneProps {
  currentScene: SceneType;
  isTransitioning: boolean;
}
export const scenes = {
  bamboo: {
    component: BambooForest,
    sounds: ["bamboo-wind", "river-flow", "birds"],
    title: "Bamboo Forest & Flowing River"
  },
  garden: {
    component: ZenGarden,
    sounds: ["temple-bells", "soft-wind", "distant-chimes"],
    title: "Mountain Zen Garden"
  },
  desert: {
    component: DesertNight,
    sounds: ["night-wind", "crystal-bowls", "deep-space"],
    title: "Desert Dunes & Starry Sky"
  },
  waterfall: {
    component: Waterfall,
    sounds: ["waterfall", "forest-birds", "gentle-rain"],
    title: "Waterfall Sanctuary"
  },
  snow: {
    component: SnowyPeaks,
    sounds: ["winter-wind", "crystal-bells", "silence"],
    title: "Snowy Mountain Peaks"
  }
} as const;
export const MeditationScene = ({
  currentScene,
  isTransitioning
}: MeditationSceneProps) => {
  const Scene = scenes[currentScene].component;
  return <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <Scene />
    </div>;
};