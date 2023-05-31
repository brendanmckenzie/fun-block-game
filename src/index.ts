import { Block, randomBlock } from "./blocks";
import { canvas, context, render } from "./canvas";
import { config } from "./config";

import "./input";

type Game = {
  currentBlock: Block;
  progressBlock: () => void;
};

export const progressBlock = () => {
  game.currentBlock.y++;
  if (game.currentBlock.y + game.currentBlock.height === config.blocks.y + 1) {
    game.currentBlock = randomBlock();
  }
};

export const game: Game = {
  currentBlock: randomBlock(),
  progressBlock,
};

const gameLoop: TimerHandler = () => {
  progressBlock();
};
setInterval(gameLoop, 250);

const drawBlock = (block: Block, context: CanvasRenderingContext2D) => {
  for (let y = 0; y < block.shape.length; y++) {
    for (let x = 0; x < block.shape[y].length; x++) {
      if (block.shape[y]?.[x] === 1) {
        render(
          { x: block.x + x, y: block.y + y, colour: block.colour },
          context
        );
      }
    }
  }
};

const loop: FrameRequestCallback = async () => {
  context!.clearRect(0, 0, canvas!.width, canvas!.height);

  drawBlock(game.currentBlock, context!);

  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
