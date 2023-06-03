import { Block, randomBlock, rotateBlock } from "./blocks";
import { scaleMatrix } from "./shapes";

export type WorldConfig = {
  blocksWide: number;
  blocksHigh: number;
  particlePerBlock: number;
};

type ParticleType = "empty" | "block" | "particle";
type Particle = {
  type: ParticleType;
  colour?: string;
};

export class World {
  public particles: Particle[][];

  private particlesHigh: number;
  private particlesWide: number;

  private blockInterval: number | null;
  private particleInterval: number | null;

  public block: Block;

  constructor(public config: WorldConfig) {
    this.particlesHigh = config.blocksHigh * config.particlePerBlock;
    this.particlesWide = config.blocksWide * config.particlePerBlock;
    this.blockInterval = null;

    this.reset();
  }

  public start() {
    if (this.blockInterval || this.particleInterval) {
      return;
    }

    document.addEventListener("keydown", this.handleInput);
    const blockSpeed = 250;
    this.blockInterval = setInterval(this.blockStep, blockSpeed);
    this.particleInterval = setInterval(
      this.particleStep,
      blockSpeed / this.config.particlePerBlock / 4
    );

    this.newBlock();
  }

  public stop() {
    if (!this.blockInterval || !this.particleInterval) {
      return;
    }
    clearInterval(this.blockInterval);
    clearInterval(this.particleInterval);
    this.blockInterval = null;
    this.particleInterval = null;
    document.removeEventListener("keydown", this.handleInput);
  }

  particleStep: TimerHandler = () => {
    this.progressParticles();
  };

  blockStep: TimerHandler = () => {
    if (this.block) {
      this.progressBlock();
    }
  };

  private progressBlock() {
    this.block.y++;

    if (this.block.y + this.block.height >= this.config.blocksHigh + 1) {
      // block at bottom
      this.placeBlock(this.block);
      this.newBlock();
    }

    this.checkCollision();
  }

  private progressParticles() {
    for (let y = this.particles.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.particles[y].length; x++) {
        const particle = this.particles[y][x];
        const below = this.particles[y + 1]?.[x];
        if (below?.type === "empty" && particle.type === "particle") {
          this.particles[y][x] = { type: "empty" };
          this.particles[y + 1][x] = particle;
        }
      }
    }
  }

  private checkCollision() {
    const { block, particles } = this;
    const offset = this.transformBlockPosition(block);

    const scaledShape = scaleMatrix(block.shape, this.config.particlePerBlock);

    out: for (let y = 0; y < scaledShape.length; y++)
      for (let x = 0; x < scaledShape[0].length; x++)
        if (scaledShape[y][x]) {
          if (
            offset.y + y + 1 <
            particles.length - this.config.particlePerBlock - 1
          ) {
            if (
              particles[offset.y + y + 1]?.[offset.x + x].type === "particle"
            ) {
              this.placeBlock(block);
              this.newBlock();
              break out;
            }
          }
        }
  }

  private checkContiguous(particles: Particle[][]) {
    // see if there's a contiguous line of one colour from one side to the other
    for (let y = particles.length - 1; y >= 0; y--) {
      const row = particles[y];
      const colours = row.map((p) => p.colour);
      const contiguous = colours.every((c, _, arr) => c && c === arr[0]);
      if (contiguous) {
        // remove row
        for (let i = 0; i < this.config.particlePerBlock; i++) {
          particles.splice(y, this.config.particlePerBlock);
          particles.unshift(
            Array.from({ length: this.particlesWide }, () => ({
              type: "empty",
            }))
          );
        }
      }
    }
  }

  private placeBlock(block: Block) {
    if (block.y === 1) {
      // game over
      this.stop();
      return;
    }
    const scaledShape = scaleMatrix(block.shape, this.config.particlePerBlock);

    const offset = this.transformBlockPosition(block);

    for (let y = 0; y < scaledShape.length; y++)
      for (let x = 0; x < scaledShape[0].length; x++)
        if (scaledShape[y][x]) {
          this.particles[offset.y + y][offset.x + x] = {
            type: "particle",
            colour: block.colour,
          };
        }

    this.checkContiguous(this.particles);
  }

  private transformBlockPosition(block: Block) {
    const { x, y } = block;

    return {
      x: x * this.config.particlePerBlock,
      y: (y - 1) * this.config.particlePerBlock,
    };
  }

  private newBlock() {
    const block = randomBlock();
    block.x =
      Math.floor(this.config.blocksWide / 2) - Math.ceil(block.width / 2);
    block.colour = "red";
    this.block = block;
  }

  private reset() {
    this.particles = Array.from({ length: this.particlesHigh }, () =>
      Array.from({ length: this.particlesWide }, () => ({
        type: "empty",
      }))
    );
  }

  handleInput = (ev: KeyboardEvent) => {
    switch (ev.key) {
      case "ArrowLeft":
        if (this.block.x > 0) {
          this.block.x--;
        }
        ev.preventDefault();
        break;
      case "ArrowRight":
        if (this.block.x + this.block.width < this.config.blocksWide) {
          this.block.x++;
        }
        ev.preventDefault();
        break;
      case "ArrowUp":
        this.block = rotateBlock(this.block);
        ev.preventDefault();
        break;
      case "ArrowDown":
        this.progressBlock();
        ev.preventDefault();
        break;
      case "r":
        this.stop();
        this.reset();
        this.start();
        ev.preventDefault();
        break;
    }
  };
}
