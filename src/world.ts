import { Block, randomBlock, rotateBlock } from "./blocks";
import { scaleMatrix } from "./shapes";

export type WorldConfig = {
  blocksWide: number;
  blocksHigh: number;
  particlePerBlock: number;
  onScoreChange?: (score: number) => void;
};

type ParticleType = "empty" | "particle";
export type Particle = {
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

  private score: number;

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

    if (this.block.y + this.block.height >= this.config.blocksHigh) {
      // block at bottom
      this.placeBlock(this.block);
      this.newBlock();
    }

    this.checkCollision();
  }

  private progressParticles() {
    for (let y = 0; y < this.particles.length; y++) {
      // for (let y = this.particles.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.particles[y].length; x++) {
        const particle = this.particles[y][x];
        if (particle.type === "particle") {
          const below = this.particles[y + 1]?.[x];
          const belowLeft = this.particles[y + 1]?.[x - 1];
          const belowRight = this.particles[y + 1]?.[x + 1];
          const left = this.particles[y]?.[x - 1];
          const right = this.particles[y]?.[x + 1];
          if (below?.type === "empty") {
            this.particles[y][x] = { type: "empty" };
            this.particles[y + 1][x] = particle;
          } else if (below?.type === "particle") {
            // see if it falls left/right
            if (belowLeft?.type === "empty" || belowRight?.type === "empty") {
              if (belowLeft?.type === "empty" && left?.type === "empty") {
                this.particles[y][x] = { type: "empty" };
                this.particles[y + 1][x - 1] = particle;
              } else if (
                belowRight?.type === "empty" &&
                right?.type === "empty"
              ) {
                this.particles[y][x] = { type: "empty" };
                this.particles[y + 1][x + 1] = particle;
              }
            }
          }
        }
      }
    }

    this.checkContiguous(this.particles);
  }

  private checkCollision() {
    const { block, particles } = this;
    const offset = this.transformBlockPosition({
      ...block,
      y: block.y + 1,
    });

    const scaledShape = scaleMatrix(block.shape, this.config.particlePerBlock);

    out: for (let y = 0; y < scaledShape.length; y++)
      for (let x = 0; x < scaledShape[0].length; x++)
        if (scaledShape[y][x]) {
          if (
            offset.y + y + 1 <
            particles.length - this.config.particlePerBlock - 1
          ) {
            if (particles[offset.y + y]?.[offset.x + x].type === "particle") {
              this.placeBlock(block);
              this.newBlock();
              break out;
            }
          }
        }
  }

  private checkContiguous(particles: Particle[][]) {
    // TODO: expand this to traverse over multiple rows
    const scoreBefore = this.score;
    type Coord = { x: number; y: number };
    const matchingNeighbours = (start: Coord, visited: boolean[][]) => {
      const startingParticle = particles[start.y][start.x];
      const directions: Coord[] = [
        { y: 0, x: -1 }, // left
        { y: -1, x: 0 }, // up
        { y: 0, x: 1 }, // right
        { y: 1, x: 0 }, // down
      ];
      const friends: Coord[] = [];
      for (const dir of directions) {
        const coords = { x: start.x + dir.x, y: start.y + dir.y };
        const offsetParticle = particles?.[coords.y]?.[coords.x];
        if (!offsetParticle) {
          // particle is off the board
          continue;
        } else if (visited[coords.y][coords.x] === true) {
          // particle has already been checked
          continue;
        }
        visited[coords.y][coords.x] = true;
        if (
          offsetParticle?.type === "particle" &&
          offsetParticle.colour === startingParticle.colour
        ) {
          friends.push(coords);
          friends.push(...matchingNeighbours(coords, visited));
        }
      }
      return friends;
    };
    for (let y = 0; y < particles.length; y++) {
      if (particles[y - 1]?.[0].colour === particles[y][0].colour) {
        continue;
      }

      if (particles[y][0].type === "particle") {
        const visitedStore = Array.from({ length: particles.length }, () =>
          Array.from({ length: particles[0].length }, () => false)
        );
        const friends = matchingNeighbours({ x: 0, y }, visitedStore);
        if (friends.find((ent) => ent.x === particles[0].length - 1)) {
          // we have a coloured particle at x:0 and x:$width with contiguity
          this.score += friends.length;
          for (const coord of friends) {
            particles[coord.y][coord.x] = { type: "empty" };
          }
        }
      }
    }

    if (scoreBefore !== this.score) {
      this.updateScore();
    }
  }

  private updateScore() {
    this.config.onScoreChange?.(this.score);
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
  }

  private transformBlockPosition(block: Block) {
    const { x, y } = block;

    return {
      x: x * this.config.particlePerBlock,
      y: (y - 1) * this.config.particlePerBlock, // TODO: not sure why the -1 is necessary
    };
  }

  private newBlock() {
    const block = randomBlock();
    block.x =
      Math.floor(this.config.blocksWide / 2) - Math.ceil(block.width / 2);
    // block.colour = "red";
    this.block = block;
  }

  private reset() {
    this.score = 0;
    this.updateScore();
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
