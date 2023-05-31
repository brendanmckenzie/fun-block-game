import { config } from "./config";

export const canvas: HTMLCanvasElement | null =
  document.querySelector("canvas");
if (!canvas) {
  throw new Error("canvas not found");
}
export const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
if (!context) {
  throw new Error("context not found");
}

canvas.width = config.blocks.x * config.blocks.size;
canvas.height = config.blocks.y * config.blocks.size;

type Point = {
  x: number;
  y: number;
  colour: string;
};

export function render(pos: Point, context: CanvasRenderingContext2D): void {
  context.fillStyle = pos.colour;
  context.fillRect(
    pos.x * config.blocks.size,
    pos.y * config.blocks.size,
    config.blocks.size,
    config.blocks.size
  );
}
