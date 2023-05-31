import { game } from ".";
import { rotateBlock } from "./blocks";
import { config } from "./config";

const handleInput = (ev: KeyboardEvent) => {
  switch (ev.key) {
    case "ArrowLeft":
      if (game.currentBlock.x > 0) {
        game.currentBlock.x--;
      }
      ev.preventDefault();
      break;
    case "ArrowRight":
      if (game.currentBlock.x + game.currentBlock.width < config.blocks.x) {
        game.currentBlock.x++;
      }
      ev.preventDefault();
      break;
    case "ArrowUp":
      game.currentBlock = rotateBlock(game.currentBlock);
      ev.preventDefault();
      break;
    case "ArrowDown":
      game.progressBlock();
      ev.preventDefault();
      break;
  }
};

document.addEventListener("keydown", handleInput);
