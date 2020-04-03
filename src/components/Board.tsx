import React, { useContext } from "react";
import Square from "./Square";
import { Position } from "../domain/entity";
import { SizeContext } from "../contexts/SizeContext";

type BoardProps = {
  image: string;
  position: Position;
};

const Board: React.FC<BoardProps> = ({ image, position }) => {
  const {size} = useContext(SizeContext);

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
        {Array(size)
          .fill(0)
          .map((_, i) => {
            return (
              <tr key={i}>
                {Array(size)
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
