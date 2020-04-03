import { Position } from "./entity";

export const getRandomPosition = (size: number): Position => {
  return {
    col: Math.floor(Math.random() * size),
    row: Math.floor(Math.random() * size)
  };
};

const movements: Position[] = [
  { col: 0, row: 0 },
  { col: 0, row: 1 },
  { col: 0, row: -1 },
  { col: 1, row: 0 },
  { col: 1, row: 1 },
  { col: 1, row: -1 },
  { col: -1, row: 0 },
  { col: -1, row: 1 },
  { col: -1, row: -1 }
];

export const walkDrunkenly = (position: Position, size: number) => {
  let random = shuffle(
    Array(9)
      .fill(0)
      .map((_, k) => k)
  );
  while (random.length > 0) {
    const movement = movements[random.pop()!];
    const distination: Position = {
      col: position.col + movement.col,
      row: position.row + movement.row
    };
    if (
      distination.col >= 0 &&
      distination.col < size &&
      distination.row >= 0 &&
      distination.row < size
    ) {
      return distination;
    }
  }
  return position;
};

const shuffle = ([...array]: number[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
