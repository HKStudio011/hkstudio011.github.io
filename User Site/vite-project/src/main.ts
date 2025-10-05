import "./style.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from "jquery";
import type { NeatConfig } from "@firecms/neat";
import { NeatGradient } from "@firecms/neat";

declare global {
  interface Window {
    neat: NeatGradient; // hoặc kiểu cụ thể nếu có
  }
}

// Define your config
const config: NeatConfig = {
  colors: [
    {
      color: "#FF5772",
      enabled: true,
    },
    {
      color: "#4CB4BB",
      enabled: true,
    },
    {
      color: "#FFC600",
      enabled: true,
    },
    {
      color: "#8B6AE6",
      enabled: true,
    },
    {
      color: "#2E0EC7",
      enabled: true,
    },
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 3,
  waveAmplitude: 8,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 3,
  grainIntensity: 0.3,
  grainSpeed: 1,
  resolution: 1,
};

// define an element with id="gradient" in your html
export function initNeatGradient() {
  const canvas = document.getElementById("gradient");
  if (canvas instanceof HTMLCanvasElement) {
    const neat = new NeatGradient({
      ref: canvas,
      ...config,
    });

    window.neat = neat;
  }
}

export function testViteLibrary() {
  console.log("Vite library successfully imported!");
}

export { $ };

