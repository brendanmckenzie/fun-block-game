export enum Rotation {
  A = 0,
  B = 90,
  C = 180,
  D = 270,
}

export const shapeColours = ["red", "green", "blue", "purple", "orange"];
export const shapes = [
  [
    // T
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    // square
    [1, 1],
    [1, 1],
  ],
  [
    // line
    [1, 1, 1, 1],
  ],
  [
    // L
    [1, 1, 1],
    [1, 0, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];

export const randomShapeIndex = () => Math.floor(Math.random() * shapes.length);

export const randomRotation = (): Rotation => {
  const rotations = [0, 90, 180, 270];
  return rotations[Math.floor(Math.random() * rotations.length)];
};

export const rotateMatrix = (matrix: number[][]): number[][] => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new matrix with the same dimensions as the input matrix
  const rotatedMatrix: number[][] = Array.from(
    { length: numRows },
    () => [] as number[]
  );

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Rotate the matrix right
      rotatedMatrix[numCols - 1 - col] ??= [];
      rotatedMatrix[numCols - 1 - col][row] = matrix[row][col];
    }
  }

  return rotatedMatrix;
};

export function scaleMatrix(matrix: number[][], scale: number): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const scaledMatrix: number[][] = [];

  for (let i = 0; i < numRows * scale; i++) {
    const row: number[] = [];

    for (let j = 0; j < numCols * scale; j++) {
      const originalRow = Math.floor(i / scale);
      const originalCol = Math.floor(j / scale);
      const originalValue = matrix[originalRow][originalCol];

      row.push(originalValue);
    }

    scaledMatrix.push(row);
  }

  return scaledMatrix;
}
