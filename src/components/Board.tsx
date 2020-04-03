import React from "react";
import Square from "./Square";
import { SIZE } from "./Game";
import { Position } from "../domain/entity";

type BoardProps = {
  image: string;
  position: Position;
};

const Board: React.FC<BoardProps> = ({ image, position }) => {
  const getImage = (col: number, row: number) => {
    if (col === position.col && row === position.row) {
      return image;
    } else {
      return undefined;
    }
  };

  return (
    <table id="game-board">
      <tbody>
        {Array(SIZE)
          .fill(0)
          .map((_, i) => {
            return (
              <tr key={i}>
                {Array(SIZE)
                  .fill(0)
                  .map((_, j) => (
                    <td key={j} >
                      <Square image={getImage(j, i)} />
                    </td>
                  ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Board;
