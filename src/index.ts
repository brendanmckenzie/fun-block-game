import { Renderer } from "./renderer";
import { World } from "./world";

const canvas = document.querySelector("canvas");
const debug = document.getElementById("debug") || undefined;
const score = document.getElementById("score") || undefined;
if (!canvas) {
  throw new Error("canvas not found");
}

const world = new World({
  blocksHigh: 20,
  blocksWide: 11,
  particlePerBlock: 4,
  onScoreChange: (val) => {
    if (score) {
      score.innerText = `Score: ${val}`;
    }
  },
});
const renderer = new Renderer({ world, canvas, debug, pixelsPerParticle: 4 });

renderer.start();
world.start();
