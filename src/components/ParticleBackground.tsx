import React, { useEffect, useRef } from "react";
import { SceneType } from "./scenes/MeditationScene";
interface ParticleBackgroundProps {
  currentScene?: SceneType;
}
const ParticleBackground = ({
  currentScene = "bamboo"
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Particle[] = [];
    const particleCount = 200;
    const sceneConfigs = {
      bamboo: {
        hueRange: [80, 140],
        // Green hues
        speedMultiplier: 0.5,
        sizeRange: [1, 3],
        opacity: 0.4
      },
      garden: {
        hueRange: [40, 60],
        // Golden hues
        speedMultiplier: 0.3,
        sizeRange: [1, 4],
        opacity: 0.5
      },
      desert: {
        hueRange: [20, 40],
        // Orange hues
        speedMultiplier: 0.8,
        sizeRange: [1, 2],
        opacity: 0.3
      },
      waterfall: {
        hueRange: [180, 220],
        // Blue hues
        speedMultiplier: 1.2,
        sizeRange: [2, 4],
        opacity: 0.6
      },
      snow: {
        hueRange: [200, 220],
        // Light blue hues
        speedMultiplier: 0.4,
        sizeRange: [2, 5],
        opacity: 0.7
      }
    };
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
      angle: number;
      angleSpeed: number;
      radius: number;
      constructor() {
        const config = sceneConfigs[currentScene];
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0];
        // Scene-specific movement patterns
        if (currentScene === "waterfall") {
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = Math.random() * 3 + 1;
        } else if (currentScene === "snow") {
          this.speedX = (Math.random() - 0.5) * 0.8;
          this.speedY = Math.random() * 0.5 + 0.2;
        } else {
          this.speedX = (Math.random() - 0.5) * 2 * config.speedMultiplier;
          this.speedY = (Math.random() - 0.5) * 2 * config.speedMultiplier;
        }
        this.hue = Math.random() * (config.hueRange[1] - config.hueRange[0]) + config.hueRange[0];
        this.opacity = config.opacity;
        // For circular motion
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
        this.radius = Math.random() * 100 + 50;
      }
      update() {
        if (currentScene === "garden") {
          // Circular motion for zen garden
          this.angle += this.angleSpeed;
          this.x = canvas.width / 2 + Math.cos(this.angle) * this.radius;
          this.y = canvas.height / 2 + Math.sin(this.angle) * this.radius;
        } else {
          this.x += this.speedX;
          this.y += this.speedY;
          // Scene-specific behaviors
          if (currentScene === "waterfall") {
            if (this.y > canvas.height) {
              this.y = 0;
              this.x = Math.random() * canvas.width;
            }
          } else if (currentScene === "snow") {
            if (this.y > canvas.height) {
              this.y = 0;
              this.x = Math.random() * canvas.width;
            }
          } else {
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
          }
        }
        this.opacity = Math.sin(Date.now() * 0.001) * 0.2 + sceneConfigs[currentScene].opacity;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentScene]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};
export default ParticleBackground;