import { Position } from "./entity";

export const getRandomPosition = (size: number): Position => {
  return {
    col: Math.floor(Math.random() * size),
    row: Math.floor(Math.random() * size)
  };
};
