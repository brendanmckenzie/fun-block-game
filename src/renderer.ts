import { World } from "./world";

export type RendererConfig = {
  canvas: HTMLCanvasElement;
  debug?: HTMLElement;
  world: World;
  pixelsPerParticle: number;
};
export class Renderer {
  private context: CanvasRenderingContext2D;

  constructor(private config: RendererConfig) {
    const multiplier =
      this.config.world.config.particlePerBlock * this.config.pixelsPerParticle;
    this.config.canvas.width = this.config.world.config.blocksWide * multiplier;
    this.config.canvas.height =
      this.config.world.config.blocksHigh * multiplier;

    this.obtainContext();
  }

  private obtainContext() {
    const context = this.config.canvas.getContext("2d");
    if (!context) {
      throw new Error("context not found");
    }

    context.scale(this.config.pixelsPerParticle, this.config.pixelsPerParticle);
    this.context = context;
  }

  public start() {
    requestAnimationFrame(this.callback);
  }

  callback: FrameRequestCallback = () => {
    this.render();

    requestAnimationFrame(this.callback);
  };

  private render() {
    const {
      config: {
        canvas,
        debug,
        world: {
          block,
          particles,
          config: { particlePerBlock },
        },
      },
      context,
    } = this;

    if (debug) {
      debug.innerText = particles
        .map((row) =>
          row
            .map((particle) => (particle.type === "empty" ? "0" : "1"))
            .join("")
        )
        .join("\n");
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (block) {
      context.fillStyle = block.colour;
      for (let y = 0; y < block.shape.length; y++)
        for (let x = 0; x < block.shape[0].length; x++)
          if (block.shape[y][x]) {
            context.fillRect(
              (block.x + x) * particlePerBlock,
              (block.y + y) * particlePerBlock,
              particlePerBlock,
              particlePerBlock
            );
          }
    }

    particles.forEach((row, y) => {
      row.forEach((particle, x) => {
        if (particle.type !== "empty") {
          context.fillStyle = particle.colour || "white";
          context.fillRect(x, y, 1, 1);
        }
      });
    });
  }
}
