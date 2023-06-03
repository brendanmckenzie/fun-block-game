import { randomShapeIndex, rotateMatrix, shapeColours, shapes } from "./shapes";

export type Block = {
  x: number;
  y: number;
  width: number;
  height: number;
  shape: number[][];
  colour: string;
};

export const randomBlock = (): Block => {
  const shapeIdx = randomShapeIndex();
  const shape = shapes[shapeIdx];
  const colour = shapeColours[randomShapeIndex()];

  return {
    x: 0,
    y: 0,
    shape,
    height: shape.length,
    width: shape[0].length,
    colour,
  };
};

export const rotateBlock = (block: Block): Block => {
  const shape = rotateMatrix(block.shape);
  return {
    ...block,
    shape,
    height: shape.length,
    width: shape[0].length,
  };
};
